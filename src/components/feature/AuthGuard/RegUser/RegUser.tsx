import { bindActionCreators } from "redux";
import { useAppDispatch, useAppSelector } from "hook/ReduxToolkitHooks";
import { loginActionCreator } from "store/Auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { useState } from "react";
import Loading from "components/shared/Loadin/Loading";
import "./RegUser.scss";
import { If } from "components/shared/other/If/If";
import { AuthGuardUrls } from "components/interface";

export const RegUser = () => {
  const { loading } = useAppSelector((store) => store.login);

  const [toggle, setToggle] = useState(false);

  const { registerUser } = bindActionCreators(
    loginActionCreator,
    useAppDispatch()
  );

  return (
    <section className="login-section">
      <h1>GoKino</h1>
      <Formik
        initialValues={{
          email: "",
          name: "",
          password: "",
        }}
        onSubmit={(values) => {
          registerUser(values);
        }}
      >
        <Form className="form-auth-user">
          <h3 className="header-form">Форма регистрации пользователей</h3>
          <div className="row g-3 form-child-elements">
            <div className="grout-input-div">
              <div className="log-in-email row-dm mt-4 position-relative">
                <label htmlFor="email" className="form-label">
                  Почта
                </label>
                <Field
                  name="email"
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                />
                <label htmlFor="email" className="icon-user">
                  <BiUser className="react-icons-styled" />
                </label>
                <ErrorMessage name="email" />
              </div>
              <div className="log-in-password row-dm mt-4 position-relative">
                <label htmlFor="name" className="form-label">
                  Имя
                </label>
                <Field
                  name="name"
                  id="name"
                  type={"text"}
                  className="form-control"
                  placeholder="first-name last-name"
                />
                <ErrorMessage name="password" />
              </div>
              <div className="log-in-password row-dm mt-4 position-relative">
                <label htmlFor="email" className="form-label">
                  Пароль
                </label>
                <Field
                  name="password"
                  id="password"
                  type={toggle ? "text" : "password"}
                  className="form-control"
                  placeholder="********"
                />
                <label
                  htmlFor="password"
                  className="icon-eye"
                  onClick={() => {
                    setToggle((prev) => !prev);
                  }}
                >
                  <If
                    condition={toggle}
                    anotherChildren={
                      <AiOutlineEyeInvisible className="react-icons-styled" />
                    }
                  >
                    <AiOutlineEye className="react-icons-styled" />
                  </If>
                </label>
                <ErrorMessage name="password" />
              </div>
              <div className="form-group row-dm mt-4 d-flex justify-content-between">
                <div>
                  <Link
                    to={`../${AuthGuardUrls.logIn}`}
                    className="link-success"
                  >
                    Нет аккаунта ?
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 d-grid gap-2">
              <button className="btn log-self-color-btn" type="submit">
                {loading ? (
                  <Loading
                    ClassName="loading-in-button"
                    type="bars"
                    color="#fff"
                    height="10%"
                    width="10%"
                  />
                ) : (
                  <span>Регистрация</span>
                )}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};
