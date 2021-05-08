import { AppState } from "..";

export const selectJobStatusOptions = (state: AppState) =>
  state.globalData.jobStatuses;

export const selectScheduleStatusOptions = (state: AppState) =>
  state.globalData.scheduleStatuses;

export const selectDrivers = (state: AppState) => state.globalData.drivers;
