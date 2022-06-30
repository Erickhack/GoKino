import { MainUrls } from "components/interface";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <div className="layout-nav-bar">
      <div className="logo-type">
        <Link to={MainUrls.index}>
          <h2>GoKino</h2>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to={MainUrls.index}>
              <span>Главная</span>
            </Link>
          </li>
          <li>
            <Link to={MainUrls.MainTrending}>
              <span>Трендовые</span>
            </Link>
          </li>
          <li>
            <NavLink to={MainUrls.MainCategories}>
              <span>Жанр</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
