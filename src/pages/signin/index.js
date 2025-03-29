import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import style from "./style.module.css";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos.");
      return;
    }

    const res = signin(email, password);

    if (res) {
      setError(res);
      return;
    }

    navigate("/");
  };

  return (
    <div>
      <h1 className={style.title}>SISTEMA DE LOGIN</h1>

      <form className={style.form}>
        <div>
          <div className={style.inputWrapper}>
            <label for="email">Email</label>
            <input
              className={style.input}
              id="email"
              type="email"
              value={email}
              placeholder="Digite seu email..."
              onChange={(e) => [setEmail(e.target.value), setError("")]}
            ></input>
          </div>
          <div className={style.inputWrapper}>
            <label for="password">Senha</label>
            <input
              className={style.input}
              id="password"
              type="password"
              value={password}
              placeholder="Digite sua senha..."
              onChange={(e) => [setPassword(e.target.value), setError("")]}
            ></input>
          </div>
        </div>

        <p>{error}</p>
        <button className={style.button} onClick={handleSignin}>
          Entrar
        </button>
        <p className={style.register}>
          Não tem uma conta?
          <strong>
            <Link className={style.link} to="./signup">
              {" "}
              Registre-se.
            </Link>
          </strong>
        </p>
      </form>
    </div>
  );
};

export default Signin;
