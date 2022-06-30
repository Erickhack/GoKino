import { Film } from "./../../types/Films/index";
import { FilmsAPI } from "./../api/index";
import { Axios } from "./../../components/shared/utils/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFilsm } from "./interface";

export const getFilms = createAsyncThunk(
  "films/getFilms",
  async (
    params:
      | { Genre?: string; IsTrending?: boolean; Search?: string }
      | undefined,
    {}
  ) => {
    try {
      const res = await Axios({
        method: "GET",
        url: FilmsAPI.getFilms,
        params,
      });

      return res.data as getFilsm;
    } catch (error) {}
  }
);

export const getFilmById = createAsyncThunk(
  "films/getFilmById",
  async (id: string | number | undefined, {}) => {
    try {
      const res = await Axios({
        method: "GET",
        url: FilmsAPI.getFilmById + id,
      });

      return res.data as Film;
    } catch (error) {}
  }
);
