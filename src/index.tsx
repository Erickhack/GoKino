import { render } from "react-dom";
import { Provider } from "react-redux";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import App from "./App";
import { history, store } from "./store";
import "./index.scss";
import "./assets/scripts/bootstrap.bundle.min.js";

render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>,
  document.getElementById("root")
);
