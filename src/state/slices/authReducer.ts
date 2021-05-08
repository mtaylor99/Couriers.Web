import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { TOKEN_KEY } from "../../feature/authentication/constants";

export interface IAuthState {
  token: string | null;
  authorised: boolean;
}

const initialState: IAuthState = {
  token: null,
  authorised: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.authorised = !!action.payload;
    },
    setAuthorisedFlag(state, action: PayloadAction<boolean>) {
      state.authorised = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(putReportSubmit.fulfilled, (state) => {
  //     state.token = null;
  //     localStorage.removeItem(TOKEN_KEY);
  //   });
  // },
});

export const authReducer = authSlice.reducer;
export const { setToken, setAuthorisedFlag } = authSlice.actions;
