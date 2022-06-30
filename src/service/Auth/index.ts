import { MainUrls } from "components/interface";
import { AuthAPI } from "./../api/index";
import { Axios } from "./../../components/shared/utils/axios/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginData, IRegisterData } from "./interface";
import { history } from "store/";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (data: ILoginData) => {
    try {
      const res = await Axios({
        method: "POST",
        url: AuthAPI.log,
        data,
      });

      history.push("/" + MainUrls.Favorites);

      return res.data as {
        id: string;
        name: string;
        roleName: string;
        email: string;
        token: string;
      };
    } catch (error) {}
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (data: IRegisterData, { dispatch }) => {
    try {
      const res = await Axios({
        method: "POST",
        url: AuthAPI.reg,
        data,
      });

      if (res.status === 200) {
        dispatch(
          loginUser({
            email: data.email,
            password: data.password,
          })
        );
      }
    } catch {}
  }
);
