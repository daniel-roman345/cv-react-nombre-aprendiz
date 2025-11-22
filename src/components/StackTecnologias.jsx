// src/components/StackTecnologias.jsx
import React from "react";
import './stack.css'; // archivo CSS para badges

const tecnologias = [
  { id: 1, nombre: "React", tipo: "frontend" },
  { id: 2, nombre: "JavaScript", tipo: "frontend" },
  { id: 3, nombre: "Node.js", tipo: "backend" },
  { id: 4, nombre: "Express", tipo: "backend" },
  { id: 5, nombre: "PostgreSQL", tipo: "database" },
  { id: 6, nombre: "MongoDB", tipo: "database" },
  { id: 7, nombre: "TypeScript", tipo: "frontend" },
  { id: 8, nombre: "Docker", tipo: "devops" },
  { id: 9, nombre: "AWS", tipo: "cloud" },
  { id: 10, nombre: "Tailwind", tipo: "frontend" },
];

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

export default function StackTecnologias() {
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
        {tecnologias.map((tech) => (
          <span key={tech.id} className={clasePorTipo(tech.tipo)}>
            {tech.nombre}
          </span>
        ))}
      </div>
    </section>
  );
}
