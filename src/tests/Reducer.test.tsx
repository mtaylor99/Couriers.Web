import { getJobStatuses } from "../api/thunks/jobs";
import {
  IPaginationRequest,
  setJobsGridPagination,
} from "../state/slices/jobsReducer";
import { testStore, testStoreWithPreloadedDrivers } from "./state";

describe("With React Testing Library", () => {
  test("Drivers loaded into state", async () => {
    const state = testStoreWithPreloadedDrivers.getState().globalData;

    const initialDriversCount = state.drivers.length;

    expect(initialDriversCount).toEqual(2);
  });

  test("Loads job statuses into state", async () => {
    let state = testStore.getState().globalData;

    const initialJobStatusesCount = state.drivers.length;

    await testStore.dispatch(getJobStatuses() as any);

    state = testStore.getState().globalData;
    expect(state.jobStatuses.length).toBeGreaterThan(initialJobStatusesCount);
  });

  test("Set jobs grid pagination", () => {
    let state = testStore.getState().jobs;

    const paginationRequest: IPaginationRequest = {
      skip: 10,
      take: 10,
    };

    testStore.dispatch(setJobsGridPagination(paginationRequest));
    state = testStore.getState().jobs;

    expect(state.filters.skip).toEqual(paginationRequest.skip);
    expect(state.filters.take).toEqual(paginationRequest.take);
  });
});
