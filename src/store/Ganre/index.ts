import { GetGanre } from "./../../service/Genres/index";
import { createSlice } from "@reduxjs/toolkit";
import { Serializable } from "child_process";
import { AxiosError } from "axios";
const initialState = {
  loading: false,
  error: null,
  items: [],
} as {
  loading: boolean;
  error: null | Serializable | AxiosError;
  items: {
    id: string;
    name: string;
    imagePath: string;
    createDate: string;
  }[];
};

const ganreSlice = createSlice({
  name: "ganre",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(GetGanre.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default ganreSlice.reducer;
export const ActionCreatorGanre = { ...ganreSlice.actions, GetGanre };
