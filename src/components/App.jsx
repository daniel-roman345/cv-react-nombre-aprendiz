import React from "react";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Educacion from "./components/Educacion";
import Experiencia from "./components/Experiencia";
import StackTecnologias from "./components/StackTecnologias";
import "./index.css";

function App() {
  return (
    <main>
      <CabeceraCV />
      <Perfil />
      <Educacion />
      <Experiencia />
      <StackTecnologias />
    </main>
  );
}

export default App;
