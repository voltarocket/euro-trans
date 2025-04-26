import React from "react";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Stages from "./components/Stages";
import Vehicles from "./components/Vehicles";

const HomePage: React.FC = () => {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <AboutUs />
      </section>

      <section id="vehicles">
        <Vehicles />
      </section>

      <section id="stages">
        <Stages />
      </section>
    </>
  );
};

export default HomePage;
