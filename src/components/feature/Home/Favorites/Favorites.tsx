import { ActionCreatorsFavorites } from "store/Favorites";
import { useAppDispatch, useAppSelector } from "hook/ReduxToolkitHooks";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import "./Favorites.scss";

export const Favorites = () => {
  const { item } = useAppSelector((store) => store.favorites);
  const { getFavorites, removeFavorite } = bindActionCreators(
    ActionCreatorsFavorites,
    useAppDispatch()
  );

  useEffect(() => {
    getFavorites();
  }, []);

  return (
    <section className="favorites-secti0on">
      <h3>Избранное</h3>
      <div className="films">
        {item.map((film) => (
          <div className="card">
            <Link to={"../" + film.filmId}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}${film.imagePath}`}
                className="card-img-top"
                alt={film.name}
              />
            </Link>
            <div className="card-body">
              <h6 className="card-title">{film.name}</h6>
              <button
                onClick={() => {
                  removeFavorite(film.id);
                }}
                className="btn btn-primary"
              >
                Удалить Список
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
