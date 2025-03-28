import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router";

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
      <h1>SISTEMA DE LOGIN</h1>

      <form>
        <div>
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Digite seu email..."
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          ></input>
        </div>
        <div>
          <label for="password">Senha</label>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Digite sua senha..."
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          ></input>
        </div>
        <p>{error}</p>
        <button onClick={handleSignin}>Entrar</button>
        <label>
          Não tem uma conta?
          <strong>
            <Link to="./signup">Registre-se.</Link>
          </strong>
        </label>
      </form>
    </div>
  );
};

export default Signin;
