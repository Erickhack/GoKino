import { Outlet } from "react-router";
import "./LayoutStyles.scss";

export const LayoutAuth = () => {
  return (
    <div className="auth-layout">
      <main className="auth-main">
        <article className="auth-section">
          <Outlet />
        </article>
      </main>
    </div>
  );
};
