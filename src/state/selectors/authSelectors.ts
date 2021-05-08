import { AppState } from "..";

export const selectAuthToken = (state: AppState) => state.auth.token;
export const selectIsAuthorised = (state: AppState) => state.auth.authorised;
