import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import loginReduce from "./Auth";
import filmsReduce from "./Films";
import favoritesReduce from "./Favorites";
import ganreSlice from "./Ganre";

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: {
    login: loginReduce,
    filsm: filmsReduce,
    favorites: favoritesReduce,
    ganre: ganreSlice,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
