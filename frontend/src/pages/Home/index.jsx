import React, { useEffect, useState } from "react";
import LoadingButton from "../../components/loadingButton";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
import { getUser } from "../../actions/userActions";
import "./Home.styles.css";

function Home() {
  const dispatch = useDispatch();
  const { credentials } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(credentials).length === 0) {
      navigate("/");
    } else {
      dispatch(getUser(credentials.user));
    }
  }, [credentials]);

  return (
    <div className="home-container">
      <p>Olá {user.name}</p>
      <LoadingButton onClick={() => dispatch(logoutRequest())}>
        Sair
      </LoadingButton>
    </div>
  );
}

export default Home;
