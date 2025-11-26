import React from "react";
function Perfil({ resumen }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">Perfil Profesional</h2>
      <p className="text-gray-700">{resumen}</p>
    </section>
  );
}

export default Perfil;
