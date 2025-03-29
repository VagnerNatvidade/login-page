import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import style from "./style.module.css";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (!email | !confirmEmail | !password) {
      setError("Preencha todos os campos.");
      return;
    } else if (email !== confirmEmail) {
      setError("Emails são diferentes.");
    }

    const res = signup(email, password);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso.");
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
            <label for="confirmEmail">Confirmar email</label>
            <input
              className={style.input}
              id="confirmEmail"
              type="email"
              value={confirmEmail}
              placeholder="Confirme seu email..."
              onChange={(e) => [setConfirmEmail(e.target.value), setError("")]}
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
        <button className={style.button} onClick={handleSignup}>
          Se inscrever
        </button>
        <label className={style.entry}>
          Já tem uma conta?
          <strong>
            <Link className={style.link} to="./signin">
              {" "}
              Entrar.
            </Link>
          </strong>
        </label>
      </form>
    </div>
  );
};

export default Signup;
