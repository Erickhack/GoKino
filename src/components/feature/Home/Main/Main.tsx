import { ActionCreatorFilms } from "store/Films";
import { useAppDispatch, useAppSelector } from "hook/ReduxToolkitHooks";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import "./Main.scss";
import { Link } from "react-router-dom";
import { ActionCreatorsFavorites } from "store/Favorites";

export const Main = () => {
  const { items } = useAppSelector((store) => store.filsm);
  const { getFilms, addFavorites } = bindActionCreators(
    { ...ActionCreatorFilms, ...ActionCreatorsFavorites },
    useAppDispatch()
  );

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <section className="home-section">
      <h3>В кино</h3>
      <div className="films">
        {items.map((film) => (
          <div className="card" key={film.id}>
            <Link to={film.id}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}${film.imagePath}`}
                className="card-img-top"
                alt={film.name}
              />
            </Link>
            <div className="card-body">
              <h6 className="card-title">{film.name}</h6>
              <p className="card-text">Страна: {film.countryOfOrigin}</p>
              <p className="card-text">Язык: {film.subtitleLanguage}</p>
              <p className="card-text">Возраст: {film.mpaaRating}</p>
              <button
                onClick={() => {
                  addFavorites({ filmId: film.id });
                }}
                className="btn btn-primary"
              >
                Добавить в список
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
