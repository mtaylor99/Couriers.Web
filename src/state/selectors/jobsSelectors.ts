import { AppState } from "..";

export const selectJobs = (state: AppState) => state.jobs.data;

export const selectJobsGridFilters = (state: AppState) => state.jobs.filters;

export const selectJobDto = (state: AppState) => state.jobs.dto;

export const selectIsJobSaving = (state: AppState) => state.jobs.isSaving;
