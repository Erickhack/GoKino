import { GanreAPI } from "./../api/index";
import { Axios } from "./../../components/shared/utils/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const GetGanre = createAsyncThunk(
  "ganre/get",
  async (empty, { rejectWithValue }) => {
    try {
      const res = await Axios({
        method: "GET",
        url: GanreAPI.GET,
      });

      return res.data as {
        id: string;
        name: string;
        imagePath: string;
        createDate: string;
      }[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
