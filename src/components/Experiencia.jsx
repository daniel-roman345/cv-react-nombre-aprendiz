function Experiencia({ experiencias }) {

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Experiencia Laboral</h2>

      {experiencias.map((exp, index) => (
        <div key={index} className="mb-3 p-3 border rounded-lg">
          <p className="font-bold">{exp.cargo}</p>
          <p className="text-gray-700">{exp.empresa}</p>
          <p className="text-gray-500">{exp.periodo}</p>
        </div>
      ))}
    </section>
  );
}

export default Experiencia;
