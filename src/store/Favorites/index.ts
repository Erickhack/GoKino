import {
  addFavorites,
  removeFavorite,
  getFavoriteById,
  getFavorites,
} from "./../../service/Favorites/index";
import { createSlice } from "@reduxjs/toolkit";
import {
  toastifyFailed,
  toastifySuccess,
} from "components/shared/functions/Thoastify";

const initialState = {
  item: [],
} as {
  item: {
    id: string;
    name: string;
    description: string;
    imagePath: string;
    filmId: string;
    inTrend: boolean;
  }[];
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(addFavorites.fulfilled, (state, action) => {
      toastifySuccess("Добавлено !");
    });
    build.addCase(addFavorites.rejected, (state, action) => {
      toastifyFailed("Вы уже добавили !");
    });
    build.addCase(getFavorites.fulfilled, (state, action) => {
      if (action.payload) state.item = action.payload.content;
    });
    build.addCase(removeFavorite.fulfilled, (state, action) => {
      toastifySuccess("Удалено !");
    });
    build.addCase(removeFavorite.rejected, (state, action) => {
      toastifyFailed("Что то пошло не так!");
    });
  },
});

export default favoritesSlice.reducer;
export const ActionCreatorsFavorites = {
  ...favoritesSlice.actions,
  addFavorites,
  removeFavorite,
  getFavoriteById,
  getFavorites,
};
