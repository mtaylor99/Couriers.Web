import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import SortDirection from "../../common/enums/SortDirection";
import JobsGridRequest from "../../api/thunks/jobs/types/JobsGridRequest";
import IJobsGridItem from "../../api/thunks/jobs/types/JobsGridItem";
import { getJobsGrid, getJob, postJob, putJob } from "../../api/thunks/jobs";
import IGridResponse from "../../common/types/GridResponse";
import IJob from "../../api/thunks/jobs/types/Job";

export interface IJobState {
  loading: boolean;
  isSaving: boolean;
  dto: IJob | undefined;
  filters: JobsGridRequest;
  data: IGridResponse<IJobsGridItem>;
}

export interface IPaginationRequest {
  skip: number;
  take: number;
}

const initialState: IJobState = {
  loading: true,
  isSaving: false,
  dto: undefined,
  filters: {
    take: 10,
    skip: 0,
    sortDirection: SortDirection.Asc,
    sortBy: "",
    searchText: "",
    jobTypeIds: [],
  },
  data: {
    result: [],
    count: 0,
  },
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobsGridPagination(state, action: PayloadAction<IPaginationRequest>) {
      state.filters.skip = action.payload.skip;
      state.filters.take = action.payload.take;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getJobsGrid.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getJob.fulfilled, (state, action) => {
      state.dto = action.payload;
      state.loading = false;
    });
    builder.addCase(postJob.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(postJob.fulfilled, (state, action) => {
      state.isSaving = false;
      state.dto = action.meta.arg;
    });
    builder.addCase(postJob.rejected, (state) => {
      state.isSaving = false;
    });
    builder.addCase(putJob.pending, (state) => {
      state.isSaving = true;
    });
    builder.addCase(putJob.fulfilled, (state, action) => {
      state.isSaving = false;
      state.dto = action.meta.arg;
    });
    builder.addCase(putJob.rejected, (state) => {
      state.isSaving = false;
    });
  },
});

export const jobsReducer = jobSlice.reducer;

export const { setJobsGridPagination } = jobSlice.actions;
