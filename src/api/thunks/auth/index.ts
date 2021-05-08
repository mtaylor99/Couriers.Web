/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppState } from "../../../state";
import { getHeaders } from "../apiUtil";
import ITokenResponse from "./types/TokenResponse";
import { selectAuthToken } from "../../../state/selectors/authSelectors";

export const postAuthorize = createAsyncThunk(
  "api/auth/postAuthorize",
  async (payload: string, { rejectWithValue }) => {
    const endpoint = `${process.env.REACT_APP_API_URL}/api/auth/authorize`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify({
        payload,
      }),
    });

    if (response.status !== 200) {
      return rejectWithValue(false);
    }

    const result: ITokenResponse = await response.json();
    return result.accessToken;
  }
);

export const postAuthorizeRefresh = createAsyncThunk(
  "api/auth/postAuthorizeRefresh",
  async (_, { rejectWithValue, getState }) => {
    const endpoint = `${process.env.REACT_APP_API_URL}/api/auth/refresh`;

    const response = await fetch(endpoint, {
      method: "POST",
      headers: getHeaders(selectAuthToken(getState() as AppState)),
    });

    if (response.status !== 200) {
      return rejectWithValue(false);
    }

    const result: ITokenResponse = await response.json();
    return result.accessToken;
  }
);
