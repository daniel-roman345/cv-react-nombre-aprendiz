import React from "react";

function Experiencia() {

  const experiencias = [
    {
      cargo: "Desarrollador Front-End Jr.",
      empresa: "Tech Solutions",
      año: "2024",
      funciones: "Desarrollo de interfaces en React."
    },
    {
      cargo: "Soporte Técnico",
      empresa: "Servicios Digitales",
      año: "2023",
      funciones: "Atención y solución a requerimientos de clientes."
    },
    {
      cargo: "Proyecto Personal",
      empresa: "Portafolio Web",
      año: "2023",
      funciones: "Construcción de portafolio usando HTML, CSS y JavaScript."
    },
    {
      cargo: "Proyecto API de Películas",
      empresa: "Freelance",
      año: "2024",
      funciones: "Desarrollo de API con Node.js y Express."
    }
  ];

  return (
    <section style={{ marginTop: "20px" }}>
      <h2>Experiencia</h2>

      {experiencias.map((exp, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <h3>{exp.cargo} – {exp.empresa}</h3>
          <p><strong>Año:</strong> {exp.año}</p>
          <p>{exp.funciones}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiencia;
