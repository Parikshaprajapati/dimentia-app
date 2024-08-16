import React from "react";
import "./Home.css";

import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";

export default function Home() {
  return (
    <div className="Home">
      <Header title="Care Bridge" subtitle="     " />
      <Main message="Help is just a click away" />
      <Footer note="Deutsche Bank" />
    </div>
  );
}