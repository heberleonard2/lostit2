import React, { useState } from "react";
import api from "../../services/api";

import Form from "../../components/Form";
import "./style.css";

function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post("/sessions", {
      email,
    });

    const { _id } = response.data;

    localStorage.setItem("admin", _id);

    history.push("/dashboard");
  }

  return (
    <>
      <div className="container">
        <Form title="Entre na sua conta">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail </label>
            <input
              type="email"
              id="email"
              value={email}
              required
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Seu melhor e-mail"
            />
            <button className="btn" type="submit">
              Entrar
            </button>
          </form>
        </Form>
      </div>
    </>
  );
}

export default Login;
