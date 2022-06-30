import { MainUrls } from "components/interface";
import { useNavigate } from "react-router";
import "./Header.scss";

export const Header = () => {
  const navigate = useNavigate();

  const goToFavorites = () => {
    navigate(MainUrls.Favorites);
  };

  return (
    <section className="def-header">
      <div>
        <div className="search-movie">
          <input
            type="serach"
            className="form-control"
            placeholder="Поиск..."
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
