import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import { FiClipboard } from "react-icons/fi";

import SideBar from "../../components/SideBar";
import Content from "../../components/Content";
import "./style.css";

function Dashboard() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    async function loadLostItems() {
      setTitle("Itens cadastros por você");
      const admin_id = localStorage.getItem("admin");
      const response = await api.get("/dashboard", {
        headers: { admin_id },
      });

      setItems(response.data);
    }

    loadLostItems();
  }, []);

  async function handleMyItems() {
    setTitle("Itens cadastros por você");
    const admin_id = localStorage.getItem("admin");
    const response = await api.get("/dashboard", {
      headers: { admin_id },
    });

    setItems(response.data);
  }
  async function handleAllItems() {
    setTitle("Todos os itens");
    const response = await api.get("/lostitems");
    setItems(response.data);
  }
  return (
    <>
      <div className="dashboard">
        <SideBar>
          <ul>
            <li>
              <Link to="/cadastro">
                <button>Cadastrar novo item</button>
              </Link>
            </li>
            <li>
              <button onClick={handleMyItems}>Ver seus itens</button>
            </li>
            <li>
              <button onClick={handleAllItems}>Ver todos os itens</button>
            </li>
          </ul>
        </SideBar>
        <Content>
          <section>
            <p>{title}</p>
            {items.map((item) => (
              <div className="lost-items" key={item._id}>
                <FiClipboard size={30} style={{ stroke: "blue" }} />
                <div className="data-group">
                  <p className="item-title">Item perdido: Notebook</p>
                  <p className="item-date">Data: 24 de Outubro</p>
                </div>
                <div className="data-group">
                  <p>
                    Achado por: {item.nome} {item.sobrenome}
                  </p>
                  <p>Telefone: {item.telefone}</p>
                </div>
                <div className="data-group">
                  <p>Andar: {item.andar}</p>
                  <p>Referencia: {item.referencia}</p>
                </div>
                <button>
                  {item.devolvido === true
                    ? "Devolvido"
                    : "Ainda náo foi Devolvido"}
                </button>
              </div>
            ))}
          </section>
        </Content>
      </div>
    </>
  );
}

export default Dashboard;
