README.md — Proyecto React CV | Daniel Salas Román
📌 Información General

Proyecto desarrollado como evidencia para la actividad GA1-220501096-03-AA1-EV05, implementando la creación y anidación de componentes en React utilizando Vite.

Autor: Daniel Salas Román
Fecha: 2025
Tecnologías: React + Vite + JavaScript ES6

# CV React – Proyecto con Props y Desestructuración


Este proyecto corresponde a la actividad **GA1-220501096-03-AA1-EV07**, cuyo objetivo es crear una hoja de vida dinámica utilizando **React**, **props** y **desestructuración**, asegurando la modularidad, reutilización de componentes y separación de responsabilidades.


## 🚀 Tecnologías utilizadas
- React 18
- Vite
- TailwindCSS
- JavaScript moderno (ESModules, JSX)


## 🧩 Componentes reutilizables
El proyecto integra 4 componentes principales que reciben props:


- **CabeceraCV.jsx** → recibe nombre, cargo, ciudad y contacto.
- **Perfil.jsx** → recibe resumen profesional.
- **Experiencia.jsx** → recibe un arreglo dinámico de experiencias.
- **Educacion.jsx** → recibe una lista de estudios.


Cada componente utiliza **desestructuración** para acceder a sus props.


## 📂 Organización de datos
Los datos se almacenan en el archivo `data.js` y se importan en `App.jsx`.


## ▶️ Ejecución del proyecto
1. Instala las dependencias:

### Funcionalidades interactivas añadidas (GA1-220501096-03-AA1-EV08)

Se implementaron dos componentes interactivos:
- **ToggleHabilidades**: botón para mostrar/ocultar la sección de habilidades (useState y renderizado condicional).
- **FormularioTecnologia**: formulario controlado que permite agregar tecnologías al stack (useState, onChange, onSubmit).

La lista de tecnologías se mantiene en `App.jsx` (estado principal) y se inicializa desde `src/cvData.js`. Se utiliza `setTecnologias(prev => [...prev, nueva])` para evitar mutaciones directas del estado y mantener la inmutabilidad.
