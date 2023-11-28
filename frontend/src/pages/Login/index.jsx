import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.styles.css";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logoutRequest } from "../../actions/authActions";
import LoadingButton from "../../components/loadingButton";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const { loading, credentials } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (credentials.auth) {
      navigate("/home");
    }
  }, [credentials]);

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("Formato de e-mail inválido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatoria!"),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(loginUser(values));
    setSubmitting(false);
  };

  return (
    <div className="login-container">
      <div className="title-container">
        <h1>Redux Login</h1>
        <img src="./redux-logo.png" height="50px" />
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form-container">
          <div className="form-field">
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Digite seu email"
            />
            <ErrorMessage
              className="error-message"
              name="username"
              component="div"
            />
          </div>

          <div className="form-field">
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
            />
            <ErrorMessage
              className="error-message"
              name="password"
              component="div"
            />
          </div>

          <div className="form-submit">
            <LoadingButton loading={loading} type="submit">
              Entrar
            </LoadingButton>
          </div>
        </Form>
      </Formik>
      <button className="register-button" onClick={() => navigate("/register")}>
        Cadastrar
      </button>
    </div>
  );
}

export default Login;
