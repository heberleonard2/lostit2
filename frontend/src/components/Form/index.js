import React from "react";

import "./style.css";

function Form(props) {
  return (
    <>
      <div className="container-form">
        <h1 className="logo">Lost.it</h1>
        <h2>{props.title}</h2>
        {props.children}
      </div>
    </>
  );
}

export default Form;
