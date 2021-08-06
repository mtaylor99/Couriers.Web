import { configureStore } from "@reduxjs/toolkit";
import { reducers } from "../state";

const preloadedDriversState = {
  globalData: {
    jobStatuses: [],
    scheduleStatuses: [],
    drivers: [
      {
        driverId: 1,
        firstName: "Joe",
        lastName: "Bloggs",
      },
      {
        driverId: 2,
        firstName: "Matt",
        lastName: "Smith",
      },
    ],
  },
};

export const testStore = configureStore({
  reducer: reducers,
});

export const testStoreWithPreloadedDrivers = configureStore({
  reducer: reducers,
  preloadedState: preloadedDriversState,
});
