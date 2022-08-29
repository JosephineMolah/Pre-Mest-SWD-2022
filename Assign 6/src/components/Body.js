import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Card from "./Card"

const Body = () => {
  return (
    <main className="main">
      <NavBar />
      <Hero />
      <Card />
    </main>
  );
};

export default Body;
