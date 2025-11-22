# CV Dinámico en React — Daniel Salas Román

Este proyecto implementa un Currículum Vitae modular y dinámico desarrollado con **React + Vite**, aplicando conceptos de creación de componentes, anidación, renderizado de listas y control de versiones con Git. El objetivo es representar la información personal en un formato estructurado y reutilizable mediante componentes independientes.

---

## 🚀 Tecnologías utilizadas

- React 18
- Vite
- JavaScript moderno (ESM)
- CSS modular
- Git y GitHub

---

## 📂 Estructura del proyecto

src/
components/
CabeceraCV.jsx
Perfil.jsx
Experiencia.jsx
Educacion.jsx
StackTecnologias.jsx
stack.css
App.jsx
main.jsx
index.css
---

## 📌 Descripción general de los componentes

### CabeceraCV.jsx
Incluye nombre completo, rol profesional y datos de contacto.

### Perfil.jsx
Contiene una descripción personal y profesional breve.

### Experiencia.jsx
Renderiza dinámicamente una lista de **10 experiencias laborales o proyectos** utilizando `.map()`.

### Educacion.jsx
Muestra formación académica y cursos complementarios en formato dinámico.

### StackTecnologias.jsx
Incluye renderizado condicional y aplicación de clases CSS dinámicas según el nivel de dominio.

---

## ▶ Cómo ejecutar el proyecto

1. Clonar el repositorio:
```bash
git clone https://github.com/daniel-roman345/cv-react-nombre-aprendiz.git

Instalar dependencias:

npm install


Ejecutar el servidor de desarrollo:

npm run dev


Abrir en el navegador:

http://localhost:5173