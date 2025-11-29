// src/App.jsx
import React, { useState } from "react";
import { datosPersonales, resumen, tecnologiasIniciales, experiencias, estudios } from "./cvData";
import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";
import StackTecnologias from "./components/StackTecnologias";
import ToggleHabilidades from "./components/ToggleHabilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

function App() {
  // visibilidad de habilidades
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  // estado de tecnologías (dinámico)
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  // función para agregar nueva tecnología (se enviará al formulario)
  const agregarTecnologia = (nueva) => {
    if (!nueva || !nueva.trim()) return;
    setTecnologias(prev => [...prev, nueva.trim()]);
  };

  return (
    <div className="container mx-auto p-6">
      <CabeceraCV
        nombre={datosPersonales.nombre}
        cargo={datosPersonales.cargo}
        ciudad={datosPersonales.ciudad}
        contacto={datosPersonales.contacto}
      />

      <Perfil resumen={resumen} />

      <ToggleHabilidades mostrar={mostrarHabilidades} setMostrar={setMostrarHabilidades} />

      {mostrarHabilidades && <StackTecnologias tecnologias={tecnologias} />}

      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />

      <Experiencia experiencias={experiencias} />

      <Educacion estudios={estudios} />
    </div>
  );
}

export default App;
