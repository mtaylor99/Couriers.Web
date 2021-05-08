import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authReducer } from "./slices/authReducer";
import { globalDataReducer } from "./slices/globalDataReducer";
import { jobsReducer } from "./slices/jobsReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    globalData: globalDataReducer,
    jobs: jobsReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
