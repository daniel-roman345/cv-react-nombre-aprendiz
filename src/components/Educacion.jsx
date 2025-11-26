function Educacion({ estudios }) {

  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">Educación</h2>

      {estudios.map((edu, index) => (
        <div key={index} className="mb-3 p-3 border rounded-lg">
          <p className="font-bold">{edu.titulo}</p>
          <p className="text-gray-700">{edu.institucion}</p>
          <p className="text-gray-500">{edu.periodo}</p>
        </div>
      ))}
    </section>
  );
}

export default Educacion;
