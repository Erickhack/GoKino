import { ActionCreatorFilms } from "store/Films";
import { useAppDispatch, useAppSelector } from "hook/ReduxToolkitHooks";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import "./MainCategories.scss";
import { ActionCreatorGanre } from "store/Ganre";

export const MainCategories = () => {
  const { items } = useAppSelector((store) => store.ganre);
  const { GetGanre } = bindActionCreators(ActionCreatorGanre, useAppDispatch());

  useEffect(() => {
    GetGanre();
  }, []);

  return (
    <section className="home-section">
      <h3>Жанры</h3>
      <div className="films">
        {items.map((ganre) => (
          <div className="card" key={ganre.id}>
            <Link to={ganre.id}>
              <img
                src={`${process.env.REACT_APP_BASE_URL}${ganre.imagePath}`}
                className="card-img-top"
                alt={ganre.name}
              />
            </Link>
            <div className="card-body">
              <h1 className="card-title">{ganre.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
