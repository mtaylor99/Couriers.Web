import { createAsyncThunk } from "@reduxjs/toolkit";
import { isTransactionError } from "../../../common/types/TransactionError";
import { genericGet } from "../apiUtil";
import IDriver from "./types/Driver";

export const getDrivers = createAsyncThunk(
  "driver/getDrivers",
  async (_, { signal, rejectWithValue }) => {
    const result = await genericGet<Array<IDriver>>(
      `${process.env.REACT_APP_API_URL}/driver`,
      signal
    );

    if (isTransactionError(result)) {
      return rejectWithValue(result);
    }

    return result;
  }
);

export default getDrivers;
