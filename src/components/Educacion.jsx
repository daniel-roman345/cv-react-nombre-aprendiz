import React from "react";

function Educacion() {

  const estudios = [
    {
      institucion: "SENA",
      curso: "Tecnologías de Programación",
      año: "2024"
    },
    {
      institucion: "Google Activate",
      curso: "Marketing Digital",
      año: "2023"
    },
    {
      institucion: "Udemy",
      curso: "Curso de JavaScript",
      año: "2023"
    },
    {
      institucion: "Ministerio TIC",
      curso: "Introducción a la Inteligencia Artificial",
      año: "2024"
    }
  ];

  return (
    <section style={{ marginTop: "20px" }}>
      <h2>Formación Académica</h2>

      <ul>
        {estudios.map((estudio, index) => (
          <li key={index}>
            <strong>{estudio.institucion}</strong> — {estudio.curso} ({estudio.año})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Educacion;
