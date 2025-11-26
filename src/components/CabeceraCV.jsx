function CabeceraCV({ nombre, cargo, ciudad, contacto }) {
    
  return (
    <header className="mb-6 border-b pb-4">
      <h1 className="text-3xl font-bold">{nombre}</h1>
      <p className="text-xl text-gray-700">{cargo}</p>
      <p className="text-gray-600">{ciudad}</p>
      <p className="text-gray-600">{contacto}</p>
    </header>
  );
}

export default CabeceraCV;
