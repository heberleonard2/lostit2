import React from "react";

import "./style.css";

function SideBar(props) {
  return (
    <section className="side-bar">
      <h1>Lost.it</h1>
      {props.children}
    </section>
  );
}

export default SideBar;
