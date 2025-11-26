import React from "react";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

function App() {
  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <CabeceraCV />
      <Perfil />
      <Experiencia />
      <Educacion />
    </div>
  );
}

export default App;
