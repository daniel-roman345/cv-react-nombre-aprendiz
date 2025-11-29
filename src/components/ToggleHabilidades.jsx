// src/components/ToggleHabilidades.jsx
import React from "react";

function ToggleHabilidades({ mostrar, setMostrar }) {
  return (
    <div className="mb-4">
      <button
        onClick={() => setMostrar(prev => !prev)}
        className="px-3 py-2 rounded bg-slate-800 text-white"
        type="button"
      >
        {mostrar ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>
    </div>
  );
}

export default ToggleHabilidades;
