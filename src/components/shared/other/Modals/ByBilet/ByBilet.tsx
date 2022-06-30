import { useAppDispatch, useAppSelector } from "hook/ReduxToolkitHooks";
import { ActionCreatorFilms } from "store/Films";
import { useEffect, useState } from "react";
import { bindActionCreators } from "redux";
import "./ByBilet.scss";
import { useNavigate } from "react-router";
import { toastifySuccess } from "components/shared/functions/Thoastify";

export const ByBilet = () => {
  const [toggle, setToggle] = useState(false);

  const { items } = useAppSelector((store) => store.filsm);
  const { getFilms } = bindActionCreators(ActionCreatorFilms, useAppDispatch());
  const navigate = useNavigate();

  useEffect(() => {
    getFilms();
  }, []);

  return (
    <>
      <button onClick={() => setToggle(true)} className="by-bilet">
        Купить билет
      </button>

      <div
        className="modal-by-bilet"
        style={{
          display: toggle ? "flex" : "none",
        }}
      >
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-tittle">Купить билет</h3>
            <button
              onClick={() => setToggle(false)}
              className="close"
              aria-describedby="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div>
              <label htmlFor="screen">Кинотетры</label>
              <select id="screen" className="form-select">
                <option selected>Кайхон</option>
                <option>3D Кинотеатри навруз</option>
                <option>Кинотеатри Ватан</option>
                <option>Tamosho Navruz Cinema</option>
                <option>Кинотеатр "Премьер Зал Душанбе"</option>
                <option>Дом Кино</option>
              </select>
            </div>
            <div>
              <label htmlFor="sit" className="form-label">
                Место на зале
              </label>
              <select id="sit" className="form-select">
                <option selected>1</option>
                <option selected>2</option>
                <option selected>3</option>
                <option selected>4</option>
                <option selected>5</option>
                <option selected>6</option>
                <option selected>7</option>
                <option selected>8</option>
                <option selected>9</option>
                <option selected>10</option>
              </select>
            </div>
            <div>
              <label htmlFor="session" className="form-label">
                Длительность фильма
              </label>
              <select id="session" className="form-select">
                <option selected>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option value="">6</option>
              </select>
            </div>
            <div>
              <label htmlFor="film" className="form-label">
                Фильм
              </label>
              <select id="film" className="form-select">
                {items.map((filmName) => (
                  <option>{filmName.name}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                toastifySuccess("Билет куплен !");
                navigate("/");
              }}
            >
              Купить
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
