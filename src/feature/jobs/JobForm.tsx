/* eslint-disable react/jsx-props-no-spreading */
import { unwrapResult } from "@reduxjs/toolkit";
import { useForm, Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { FormHelperText, MenuItem } from "@material-ui/core";
import { useEffect } from "react";
import IJob from "../../api/thunks/jobs/types/Job";
import {
  SecondaryButton,
  PrimaryButton,
} from "../../common/components/buttons";
import { PanelFooterActions } from "../../common/components/panel";
import {
  FormInputWrapper,
  FormLabelWithHint,
  TextInput,
  YesNoInput,
  SelectInput,
  DateInput,
} from "../../common/components/formElements";

import nameof from "../../common/util/nameof";
import {
  createRequestErrorToast,
  createSuccessToast,
  createValidationWarningToast,
} from "../../common/util/toastUtil";
import {
  isTransactionError,
  iterateErrors,
} from "../../common/types/TransactionError";
import { useAppDispatch } from "../../state";
import { getJob, saveJob } from "../../api/thunks/jobs";
import {
  selectIsJobSaving,
  selectJobDto,
} from "../../state/selectors/jobsSelectors";
import { selectJobStatusOptions } from "../../state/selectors/globalSelectors";

const JobForm = () => {
  const dispatch = useAppDispatch();
  const { push } = useHistory();
  const { id } = useParams() as any;

  const {
    register,
    control,
    reset,
    clearErrors,
    setError,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IJob>();

  useEffect(() => {
    if (id > 0) {
      dispatch(getJob(id)).then((result) => unwrapResult(result));
    }
  }, [dispatch, id]);

  const dto = useSelector(selectJobDto);
  const isSaving = useSelector(selectIsJobSaving);
  const jobStatusOptions = useSelector(selectJobStatusOptions);

  const submit = (data: IJob) => {
    clearErrors();
    dispatch(saveJob(data))
      .then((result) => unwrapResult(result))
      .then(() => {
        createSuccessToast("Job details saved");
        push("/");
      })
      .catch((error) => {
        if (isTransactionError(error) && !error.generalError) {
          createValidationWarningToast();
          iterateErrors(error, (propName, propError) =>
            setError(propName as keyof IJob, {
              type: "manual",
              message: propError,
            })
          );
        } else {
          createRequestErrorToast(error);
        }
      });
  };

  useEffect(() => {
    reset(dto);
  }, [dto, reset]);

  const { ref: inputJobId, ...inputJobIdProps } = register("jobId", {
    valueAsNumber: true,
  });

  const { ref: inputGoods, ...inputGoodsProps } = register("goods", {
    required: true,
  });

  const { ref: inputCustomer, ...inputCustomerProps } = register("customer", {
    required: true,
  });

  const { ref: inputOrderedBy, ...inputOrderedByProps } = register(
    "orderedBy",
    {
      required: true,
    }
  );

  return (
    <>
      <div>Job - Form</div>
      <form onSubmit={handleSubmit(submit)}>
        <input type="hidden" ref={inputJobId} {...inputJobIdProps} value="0" />

        <FormInputWrapper required error={!!errors.goods}>
          <FormLabelWithHint
            htmlFor={nameof<IJob>("goods")}
            hint="maximum 50 characters"
          >
            Goods
          </FormLabelWithHint>
          <TextInput inputRef={inputGoods} {...inputGoodsProps} />
          {errors.goods ? (
            <FormHelperText>{errors.goods.message}</FormHelperText>
          ) : null}
        </FormInputWrapper>

        <FormInputWrapper required error={!!errors.customer}>
          <FormLabelWithHint
            htmlFor={nameof<IJob>("customer")}
            hint="maximum 50 characters"
          >
            Customer
          </FormLabelWithHint>
          <TextInput inputRef={inputCustomer} {...inputCustomerProps} />
          {errors.customer ? (
            <FormHelperText>{errors.customer.message}</FormHelperText>
          ) : null}
        </FormInputWrapper>

        <FormInputWrapper required error={!!errors.orderedBy}>
          <FormLabelWithHint
            htmlFor={nameof<IJob>("orderedBy")}
            hint="maximum 50 characters"
          >
            Ordered By
          </FormLabelWithHint>
          <TextInput inputRef={inputOrderedBy} {...inputOrderedByProps} />
          {errors.orderedBy ? (
            <FormHelperText>{errors.orderedBy.message}</FormHelperText>
          ) : null}
        </FormInputWrapper>

        <FormInputWrapper required error={!!errors.createdDate}>
          <FormLabelWithHint
            htmlFor={nameof<IJob>("createdDate")}
            hint="Today's Date"
          >
            Created Date
          </FormLabelWithHint>
          <Controller
            control={control}
            name="createdDate"
            defaultValue={dto?.createdDate || null}
            render={({ field: { onChange, value, name } }) => (
              <DateInput
                disableFuture
                id={name}
                name={name}
                value={value?.toString()}
                onChange={onChange}
              />
            )}
          />
          {errors.createdDate ? (
            <FormHelperText>{errors.createdDate.message}</FormHelperText>
          ) : null}
        </FormInputWrapper>

        <FormInputWrapper required error={!!errors.jobStatus}>
          <FormLabelWithHint
            htmlFor={nameof<IJob>("jobStatus")}
            hint="Pick Created"
          >
            Job Status
          </FormLabelWithHint>
          <Controller
            control={control}
            name="jobStatus"
            defaultValue={dto?.jobStatus || null}
            render={({ field: { onChange, value, name } }) => (
              <SelectInput
                displayEmpty
                required
                name={name}
                id={name}
                value={value == null ? "" : value}
                onChange={onChange}
              >
                {jobStatusOptions.map((jobStatusOption) => (
                  <MenuItem
                    key={jobStatusOption.jobStatusId}
                    value={jobStatusOption.jobStatusId}
                  >
                    {jobStatusOption.description}
                  </MenuItem>
                ))}
              </SelectInput>
            )}
          />
          {errors.jobStatus ? (
            <FormHelperText>{errors.jobStatus.message}</FormHelperText>
          ) : null}
        </FormInputWrapper>

        <FormInputWrapper required error={!!errors.active}>
          <FormLabelWithHint htmlFor={nameof<IJob>("active")} hint="Active">
            Active
          </FormLabelWithHint>
          <Controller
            control={control}
            name="active"
            defaultValue={dto?.active || null}
            render={({ field: { onChange, value, name } }) => (
              <YesNoInput
                id={name}
                name={name}
                value={value == null ? false : value}
                onChange={onChange}
              />
            )}
          />
          {errors.active ? (
            <FormHelperText>{errors.active.message}</FormHelperText>
          ) : null}
        </FormInputWrapper>

        <hr />
        <PanelFooterActions cancelLink="/">
          <SecondaryButton>Cancel</SecondaryButton>
          <PrimaryButton type="submit" disabled={!isDirty || isSaving}>
            Save
          </PrimaryButton>
        </PanelFooterActions>
      </form>
    </>
  );
};

export default JobForm;
