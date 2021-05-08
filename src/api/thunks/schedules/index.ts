import { createAsyncThunk } from "@reduxjs/toolkit";
import { isTransactionError } from "../../../common/types/TransactionError";
import { genericGet } from "../apiUtil";
import IScheduleStatus from "./types/ScheduleStatus";

export const getScheduleStatuses = createAsyncThunk(
  "job/getScheduleStatuses",
  async (_, { signal, rejectWithValue }) => {
    const result = await genericGet<Array<IScheduleStatus>>(
      `${process.env.REACT_APP_API_URL}/schedule/statuses`,
      signal
    );

    if (isTransactionError(result)) {
      return rejectWithValue(result);
    }

    return result;
  }
);

export default getScheduleStatuses;
