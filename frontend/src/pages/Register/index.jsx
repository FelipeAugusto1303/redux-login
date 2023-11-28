import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import LoadingButton from "../../components/loadingButton";
import "./Register.styles.css";
import { createUser } from "../../services/user";

function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("É obrigatorio colocar seu nome"),
    username: Yup.string()
      .email("Formato de e-mail inválido")
      .required("O e-mail é obrigatório"),
    password: Yup.string().required("A senha é obrigatoria!"),
  });

  const initialValues = {
    name: "",
    username: "",
    password: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setLoading(true);
    createUser(values)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="register-container">
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
              id="name"
              name="name"
              placeholder="Digite seu nome"
            />
            <ErrorMessage
              className="error-message"
              name="name"
              component="div"
            />
          </div>
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
              Cadastrar
            </LoadingButton>
          </div>
        </Form>
      </Formik>
      <button className="register-button" onClick={() => navigate("/")}>
        Voltar
      </button>
    </div>
  );
}

export default Register;
