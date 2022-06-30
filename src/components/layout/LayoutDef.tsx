import { FC } from "react";
import { Outlet } from "react-router";
import { Header } from "./Header/Header";
import "./LayoutStyles.scss";
import { NavBar } from "./NavBar/NavBar";

export const LayoutDef: FC = () => {
  return (
    <div className="def-layout">
      <main className="def-main">
        <aside className="def-aside">
          <NavBar />
        </aside>
        <article className="def-section">
          <Header />
          <Outlet />
        </article>
      </main>
    </div>
  );
};
