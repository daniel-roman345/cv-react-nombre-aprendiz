// src/components/FormularioTecnologia.jsx
import React, { useState } from "react";

function FormularioTecnologia({ agregarTecnologia }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // evita recargar la página
    agregarTecnologia(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label className="block mb-2">Agregar tecnología</label>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ej: TypeScript"
          className="border p-2 flex-1"
        />
        <button type="submit" className="px-3 py-2 bg-blue-600 text-white rounded">Agregar</button>
      </div>
    </form>
  );
}

export default FormularioTecnologia;
