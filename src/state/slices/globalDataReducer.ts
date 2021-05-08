import { createSlice } from "@reduxjs/toolkit";
import getDrivers from "../../api/thunks/drivers";
import { getJobStatuses } from "../../api/thunks/jobs";
import IJobStatus from "../../api/thunks/jobs/types/JobStatus";
import { getScheduleStatuses } from "../../api/thunks/schedules";
import IDriver from "../../api/thunks/drivers/types/Driver";
import IScheduleStatus from "../../api/thunks/schedules/types/ScheduleStatus";

export interface IGlobalDataState {
  jobStatuses: Array<IJobStatus>;
  scheduleStatuses: Array<IScheduleStatus>;
  drivers: Array<IDriver>;
}

const initialState: IGlobalDataState = {
  jobStatuses: [],
  scheduleStatuses: [],
  drivers: [],
};

const globalDataSlice = createSlice({
  name: "globalData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getJobStatuses.fulfilled, (state, action) => {
      state.jobStatuses = action.payload;
    });
    builder.addCase(getScheduleStatuses.fulfilled, (state, action) => {
      state.scheduleStatuses = action.payload;
    });
    builder.addCase(getDrivers.fulfilled, (state, action) => {
      state.drivers = action.payload;
    });
  },
});

export const globalDataReducer = globalDataSlice.reducer;
