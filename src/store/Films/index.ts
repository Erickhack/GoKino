import { getFilmById, getFilms } from "./../../service/Films/index";
import { createSlice } from "@reduxjs/toolkit";
import { typeSlices } from "store/types";
import { IConfigInitState } from "./interface";
import { Film } from "types/Films";

const initialState = {
  items: [],
  item: null,
} as IConfigInitState<Film>;

const filmsSlice = createSlice({
  name: typeSlices.films,
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getFilms.fulfilled, (state, action) => {
      state.items = action.payload?.content || ([] as any);
    });
    build.addCase(getFilmById.fulfilled, (state, action) => {
      state.item = action?.payload || (null as any);
    });
  },
});

export default filmsSlice.reducer;
export const ActionCreatorFilms = {
  ...filmsSlice.actions,
  getFilms,
  getFilmById,
};
