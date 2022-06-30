import { FavoritesAPI } from "./../api/index";
import { Axios } from "./../../components/shared/utils/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const addFavorites = createAsyncThunk(
  "favorites/addFavorite",
  async (data: { filmId: string }, { rejectWithValue }) => {
    try {
      const res = await Axios({
        method: "POST",
        url: FavoritesAPI.addFavorite,
        data,
      });

      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getFavorites = createAsyncThunk(
  "favorites/getFavorites",
  async (blan, { rejectWithValue }) => {
    try {
      const res = await Axios({
        method: "GET",
        url: FavoritesAPI.getFavorites,
      });

      return res.data as {
        totalPages: number;
        totalCount: number;
        content: [];
      };
    } catch (error) {}
  }
);

export const getFavoriteById = createAsyncThunk(
  "favorites/getFavoriteById",
  async (id: number) => {
    try {
      const res = await Axios({
        method: "GET",
        url: FavoritesAPI.getFavoriteById + id,
      });

      return res.data;
    } catch (error) {}
  }
);

export const removeFavorite = createAsyncThunk(
  "favorites/deleteFavorite",
  async (id: string, { dispatch }) => {
    try {
      await Axios({
        method: "DELETE",
        url: FavoritesAPI.removeFavorite + id,
      });
      dispatch(getFavorites());
    } catch (error) {}
  }
);
