import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router";
import style from "./style.module.css";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>

      <button
        className={style.button}
        onClick={() => [signout(), navigate("/")]}
      >
        Sair
      </button>
    </div>
  );
};

export default Home;
