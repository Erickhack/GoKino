import { useAppDispatch } from "hook/ReduxToolkitHooks";
import { ActionCreatorFilms } from "store/Films";
import { MainUrls } from "components/interface";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { bindActionCreators } from "redux";
import "./Header.scss";

export const Header = () => {
  const { getFilms } = bindActionCreators(ActionCreatorFilms, useAppDispatch());
  const navigate = useNavigate();

  const goToFavorites = () => {
    navigate(MainUrls.Favorites);
  };

  const handleSearchFilm = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    getFilms({ Search: value });
  };

  return (
    <section className="def-header">
      <div>
        <div className="search-movie">
          <input
            type="serach"
            className="form-control"
            placeholder="Поиск..."
            onChange={handleSearchFilm}
          />
        </div>
        <nav>
          <button onClick={goToFavorites}>
            <span>Список просмотра</span>
          </button>
        </nav>
      </div>
    </section>
  );
};
