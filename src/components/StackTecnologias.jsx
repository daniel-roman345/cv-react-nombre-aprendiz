// src/components/StackTecnologias.jsx
import React from "react";
import "./stack.css";

const clasePorTipo = (tipo) => {
  switch (tipo) {
    case "frontend": return "badge badge-frontend";
    case "backend": return "badge badge-backend";
    case "database": return "badge badge-database";
    case "devops": return "badge badge-devops";
    case "cloud": return "badge badge-cloud";
    default: return "badge badge-default";
  }
};

export default function StackTecnologias({ tecnologias }) {
  if (!tecnologias || tecnologias.length === 0) {
    return (
      <section>
        <h3>Stack de Tecnologías</h3>
        <p>No se registraron tecnologías.</p>
      </section>
    );
  }

  return (
    <section>
      <h3>Stack de Tecnologías</h3>
      <div className="badges-container">
        {tecnologias.map((tech, i) => (
          <span key={i} className={clasePorTipo(tech.tipo)}>
            {tech.nombre}
          </span>
        ))}
      </div>
    </section>
  );
}
