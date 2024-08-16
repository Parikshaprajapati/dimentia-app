
import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <h3 style={{marginBottom: '55px'}}>{props.subtitle}</h3>
    </div>
  );
}
