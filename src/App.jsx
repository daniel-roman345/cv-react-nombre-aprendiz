import CabeceraCV from "./components/CabeceraCV";
import Perfil from "./components/Perfil";
import Experiencia from "./components/Experiencia";
import Educacion from "./components/Educacion";

function App() {

  // Datos personales
  const nombre = "Daniel salas";
  const cargo = "Frontend Developer";
  const ciudad = "Medellin, Colombia";
  const contacto = "daniel992007@gmail.com";

  // Resumen profesional
  const resumen = "Desarrollador frontend con experiencia en React, diseño de interfaces, integración de APIs y creación de componentes reutilizables.";

  // Experiencias laborales (array dinámico)
  const experiencias = [
    {
      cargo: "Desarrollador React",
      empresa: "Tech Solutions",
      periodo: "2022 - 2024"
    },
    {
      cargo: "Frontend Trainee",
      empresa: "Digital Factory",
      periodo: "2021 - 2022"
    }
  ];

  // Estudios (array dinámico)
  const estudios = [
    {
      titulo: "Tecnólogo en Análisis y Desarrollo de Software",
      institucion: "SENA",
      periodo: "2021 - 2023"
    },
    {
      titulo: "Curso de React Avanzado",
      institucion: "Platzi",
      periodo: "2023"
    }
  ];

  return (
    <div className='container mx-auto p-6'>
      
      <CabeceraCV 
        nombre={nombre}
        cargo={cargo}
        ciudad={ciudad}
        contacto={contacto}
      />

      <Perfil resumen={resumen} />

      <Experiencia experiencias={experiencias} />

      <Educacion estudios={estudios} />

    </div>
  );
}

export default App;

