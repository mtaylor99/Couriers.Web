/* eslint-disable react/jsx-props-no-spreading */
import { FormControlLabelProps, Radio, RadioGroup } from "@material-ui/core";
import { LargeFormControlLabel, SmallFormControlLabel } from "./styles";

interface IYesNoInputProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
  yesText?: string;
  noText?: string;
  name?: string;
  id?: string;
  small?: boolean;
}

const YesNoInput = ({
  value,
  onChange,
  yesText,
  noText,
  name,
  id,
  small,
}: IYesNoInputProps) => {
  const InputOption = (props: FormControlLabelProps) =>
    small ? (
      <SmallFormControlLabel {...props} />
    ) : (
      <LargeFormControlLabel {...props} />
    );

  return (
    <RadioGroup
      row
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value === "true")}
    >
      <>
        <InputOption
          checked={value === true}
          value="true"
          control={<Radio />}
          label={yesText || "Yes"}
        />
        <InputOption
          checked={value === false}
          value="false"
          control={<Radio />}
          label={noText || "No"}
        />
      </>
    </RadioGroup>
  );
};

export default YesNoInput;
