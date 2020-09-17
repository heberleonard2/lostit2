import React, { useState } from "react";
import api from "../../services/api";

import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import { Link } from "react-router-dom";

function Cadastro({ history }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [floor, setFloor] = useState("");
  const [reference, setReference] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    const admin_id = localStorage.getItem("admin");

    await api.post(
      "/lostitems",
      {
        nome: firstName,
        sobrenome: lastName,
        telefone: phone,
        andar: floor,
        referencia: reference,
        data: date,
        tipo: type,
      },
      {
        headers: { admin_id },
      }
    );

    history.push("/dashboard");
  }

  return (
    <>
      <div className="dashboard">
        <SideBar>
          <ul>
            <li>
              <Link to="/dashboard">
                <button>Voltar</button>
              </Link>
            </li>
          </ul>
        </SideBar>
        <Content>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">Nome</label>
            <input
              id="firstname"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              placeholder="Nome"
            />

            <label htmlFor="lastname">Sobrenome</label>
            <input
              id="lastname"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              placeholder="Sobrenome"
            />

            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="Telefone"
            />

            <label htmlFor="floor">Andar</label>
            <input
              id="floor"
              type="text"
              value={floor}
              onChange={(event) => setFloor(event.target.value)}
              placeholder="Andar"
            />

            <label htmlFor="reference">Referência</label>
            <input
              id="reference"
              type="text"
              value={reference}
              onChange={(event) => setReference(event.target.value)}
              placeholder="Referência"
            />

            <label htmlFor="Date">Data</label>
            <input
              id="date"
              type="text"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              placeholder="Data"
            />

            <label htmlFor="type">Tipo</label>
            <input
              id="type"
              type="text"
              value={type}
              onChange={(event) => setType(event.target.value)}
              placeholder="Tipo"
            />

            <button className="btn" type="submit">
              CADASTRAR
            </button>
          </form>
        </Content>
      </div>
    </>
  );
}

export default Cadastro;
