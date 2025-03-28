import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router";

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
          <label for="confirmEmail">Confirmar email</label>
          <input
            id="confirmEmail"
            type="email"
            value={confirmEmail}
            placeholder="Confirme seu email..."
            onChange={(e) => [setConfirmEmail(e.target.value), setError("")]}
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
        <button onClick={handleSignup}>Se inscrever</button>
        <label>
          Já tem uma conta?
          <strong>
            <Link to="./signin">Registre-se.</Link>
          </strong>
        </label>
      </form>
    </div>
  );
};

export default Signup;
