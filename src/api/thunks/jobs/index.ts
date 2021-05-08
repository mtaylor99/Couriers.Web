import { createAsyncThunk } from "@reduxjs/toolkit";
import IGridResponse from "../../../common/types/GridResponse";
import { isTransactionError } from "../../../common/types/TransactionError";
import { genericGet, genericPost, genericPut } from "../apiUtil";
import IJobsGridItem from "./types/JobsGridItem";
import IJobStatus from "./types/JobStatus";
import IJobsGridRequest from "./types/JobsGridRequest";
import IJob from "./types/Job";
// import { AppState } from "state";
// import { selectAuthToken } from "state/selectors/authSelectors";

export const getJobsGrid = createAsyncThunk(
  "job/getJobsGrid",
  async (filters: IJobsGridRequest, { signal, rejectWithValue }) => {
    // getState
    const result = await genericGet<IGridResponse<IJobsGridItem>>(
      `${process.env.REACT_APP_API_URL}/job?take=${filters.take}&skip=${filters.skip}`,
      signal
      // selectAuthToken(getState() as AppState)
    );

    if (isTransactionError(result)) {
      return rejectWithValue(result);
    }

    return result;
  }
);

export const getJobStatuses = createAsyncThunk(
  "job/getJobStatuses",
  async (_, { signal, rejectWithValue }) => {
    // getState
    const result = await genericGet<Array<IJobStatus>>(
      `${process.env.REACT_APP_API_URL}/job/statuses`,
      signal
      // selectAuthToken(getState() as AppState)
    );

    if (isTransactionError(result)) {
      return rejectWithValue(result);
    }

    return result;
  }
);

export const getJob = createAsyncThunk(
  "job/getJob",
  async (jobId: number, { signal, rejectWithValue }) => {
    // getState
    const result = await genericGet<IJob>(
      `${process.env.REACT_APP_API_URL}/job/${jobId}`,
      signal
      // selectAuthToken(getState() as AppState)
    );

    if (isTransactionError(result)) {
      return rejectWithValue(result);
    }

    return result;
  }
);

export const postJob = createAsyncThunk(
  "job/postJob",
  async (dto: IJob, { signal, rejectWithValue }) => {
    // getState

    const result = await genericPost(
      `${process.env.REACT_APP_API_URL}/job`,
      dto,
      signal
      // selectAuthToken(getState() as AppState)
    );

    if (isTransactionError(result)) {
      return rejectWithValue(result);
    }

    return result;
  }
);

export const putJob = createAsyncThunk(
  "job/putJob",
  async (dto: IJob, { signal, rejectWithValue }) => {
    // getState

    const result = await genericPut(
      `${process.env.REACT_APP_API_URL}/job/${dto.jobId}`,
      dto,
      signal
      // selectAuthToken(getState() as AppState)
    );

    if (isTransactionError(result)) {
      return rejectWithValue(result);
    }

    return result;
  }
);

export default getJobsGrid;
