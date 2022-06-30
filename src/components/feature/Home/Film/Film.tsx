import { MainUrls } from "components/interface";
import { useAppDispatch, useAppSelector } from "hook/ReduxToolkitHooks";
import { ActionCreatorFilms } from "store/Films";
import { useEffect, useRef } from "react";
import { useParams } from "react-router";
import { bindActionCreators } from "redux";
import "./Film.scss";
import { ByBilet } from "components/shared/other/Modals/ByBilet/ByBilet";

export const Film = () => {
  const framRef = useRef<HTMLIFrameElement>(null);

  const { getFilmById } = bindActionCreators(
    ActionCreatorFilms,
    useAppDispatch()
  );

  const { item } = useAppSelector((state) => state.filsm);
  const { FilmId } = useParams<Partial<MainUrls>>();

  useEffect(() => {
    getFilmById(FilmId);
  }, []);

  return (
    <section className="section-film">
      {item && (
        <>
          <div className="film-aside">
            <img
              src={`${process.env.REACT_APP_BASE_URL}${item.imagePath}`}
              alt={item.name}
            />
            <dl>
              <dt>Примера</dt>
              <dd>{item.createDate.split("T")[0]}</dd>
              <dt>Страна</dt>
              <dd>{item.countryOfOrigin}</dd>
              <dt>Жанр</dt>
              <dd>{item.genreName}</dd>
              <dt>Продолжитель-ность</dt>
              <dd>{item.duration}ч</dd>
              <dt>Компания</dt>
              <dd>{item.productionCompany}</dd>
              <dt>Режиссёр</dt>
              <dd>{item.director}</dd>
              <dt>Язык</dt>
              <dd>{item.subtitleLanguage}</dd>
              <dt>Рейтинг</dt>
              <dd>{item.imdbRating}</dd>
            </dl>
          </div>
          <div className="film-main">
            <h1>{item.name}</h1>

            <p>{item.description}</p>

            <div className="film-action">
              <a href={item?.trailer || ""}>
                <button>Смотреть трейлер</button>
              </a>
              <ByBilet />
            </div>
          </div>
        </>
      )}
    </section>
  );
};
