import { FC, lazy, Suspense } from "react";
import { Navigate, useRoutes, RouteObject } from "react-router";
import Loading from "./shared/Loadin/Loading";
import "./GlobalStyle.scss";
import { AuthGuardUrls, MainUrls } from "./interface";

const MoveToFirstPage: FC<{ to: string }> = ({ to }) => {
  return <Navigate to={to} />;
};

const LayoutDef = lazy(() =>
  import("./layout/LayoutDef").then((module) => ({ default: module.LayoutDef }))
);

const LayoutAuth = lazy(() =>
  import("./layout/LayoutAuth").then((module) => ({
    default: module.LayoutAuth,
  }))
);

const Auth = lazy(() =>
  import("./feature/AuthGuard/Auth/Auth").then((module) => ({
    default: module.Auth,
  }))
);

const Home = lazy(() =>
  import("./feature/Home/Main/Main").then((module) => ({
    default: module.Main,
  }))
);

const Favorites = lazy(() =>
  import("./feature/Home/Favorites/Favorites").then((module) => ({
    default: module.Favorites,
  }))
);

const MainCategories = lazy(() =>
  import("./feature/Categories/MainCategories/MainCategories").then(
    (module) => ({ default: module.MainCategories })
  )
);

const MainTrending = lazy(() =>
  import("./feature/Trending/MainTrending/MainTrending").then((module) => ({
    default: module.MainTrending,
  }))
);

const PageNotFound = lazy(() =>
  import("./feature/PageNotFound/PageNotFound").then((module) => ({
    default: module.PageNotFound,
  }))
);

const Film = lazy(() =>
  import("./feature/Home/Film/Film").then((module) => ({
    default: module.Film,
  }))
);

const RegUser = lazy(() =>
  import("./feature/AuthGuard/RegUser/RegUser").then((module) => ({
    default: module.RegUser,
  }))
);

const LogInUser = lazy(() =>
  import("./feature/AuthGuard/LogIn/LogIn").then((module) => ({
    default: module.LogIn,
  }))
);

const FilmCategories = lazy(() =>
  import("./feature/Categories/FilmCategories/FilmCategories").then(
    (module) => ({
      default: module.FilmCategories,
    })
  )
);

export const RoutesConfig = () => {
  const routesConfig: RouteObject[] = [
    {
      path: MainUrls.index,
      element: <LayoutDef />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ":" + MainUrls.FilmId,
          element: <Film />,
        },
        {
          path: MainUrls.Favorites,
          element: (
            <Auth>
              <Favorites />,
            </Auth>
          ),
        },
        {
          path: MainUrls.MainCategories,
          element: <MainCategories />,
        },
        {
          path: MainUrls.MainCategories + "/:" + MainUrls.MainCategoriesId,
          element: <FilmCategories />,
        },
        {
          path: MainUrls.MainTrending,
          element: <MainTrending />,
        },
      ],
    },
    {
      path: AuthGuardUrls.index,
      element: <LayoutAuth />,
      children: [
        {
          index: true,
          element: <MoveToFirstPage to="login" />,
        },
        {
          path: AuthGuardUrls.register,
          element: <RegUser />,
        },
        {
          path: AuthGuardUrls.logIn,
          element: <LogInUser />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ];

  return (
    <Suspense
      fallback={
        <div className="background-route-loading">
          <Loading
            ClassName="load-ing"
            type="spokes"
            color="#39b980"
            height="10%"
            width="10%"
          />
        </div>
      }
    >
      {useRoutes(routesConfig)}
    </Suspense>
  );
};
