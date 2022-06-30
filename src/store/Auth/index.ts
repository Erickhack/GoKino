import { setSessionToken } from "./../../components/shared/utils/axios/sessionStorage";
import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "service/Auth";
import { typeSlices } from "store/types";

const initialState = {
  loading: false,
};

const loginSlice = createSlice({
  name: typeSlices.logIn,
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload !== undefined) {
        setSessionToken(action.payload?.token, action.payload?.email);
      }
    });
  },
});

export default loginSlice.reducer;
export const loginActionCreator = {
  ...loginSlice.actions,
  registerUser,
  loginUser,
};
