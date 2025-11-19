# 🎬 Xilften Pro (React + React Query + TMDB)

Proyecto desarrollado con **React + Vite**, como parte de la práctica de fundamentos de React.  
La aplicación muestra una lista de películas con sus datos principales, permite buscar por nombre o género y visualizar un detalle en un modal.
Aplicación web desarrollada que consume datos reales de películas desde la API de TMDB, utilizando React Query, custom hooks y manejo completo de estados de UI.
Forma parte del trabajo 2 del módulo, reemplazando completamente los datos locales por un servicio externo.

---

## 🚀 Demo en línea

👉 [Ver aplicación desplegada en Vercel](https://xilften-pro.vercel.app/)

---

## 🚀 Tecnologías utilizadas
- React (Vite)
- React Query (useQuery + useMutation)
- Custom Hooks (useMovies)
- TMDB API (The Movie Database)
- LocalStorage (favoritos)
- JavaScript moderno (ESModules)
- CSS Modules

---

## 🎯 Objetivo del proyecto

Incorporar interacción dinámica en la aplicación, cumpliendo con los requisitos del módulo:

✅Eliminar datos hardcodeados
✅Consumir datos desde un servicio externo (TMDB)
✅Usar useState y custom hooks
✅Implementar useQuery y useMutation
✅Manejar estados de UI: loading, error, empty
✅Mostrar lista de películas obtenidas desde la API
✅Permitir agregar favoritos
✅Persistencia de favoritos con localStorage
✅Estructura limpia y escalable

---

## 📡 Consumo de API externa

La app consulta la API de TMDB para obtener películas populares:
https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY

---

## 🧠 Lógica principal

✔️ Lecturas con React Query (useQuery)

Permite:

obtener películas desde TMDB
manejar automáticamente loading/error
cachear resultados
evitar llamadas repetidas

✔️ Mutaciones (useMutation)

Utilizadas para:

agregar favoritos
eliminar favoritos
sincronizar con localStorage

---

## 🖥️ Funcionalidades

🔍 1. Lista de películas

Datos obtenidos en vivo desde TMDB.
Muestra estado de carga y error según la solicitud.
Si la API devuelve cero resultados, aparece un empty state.

⭐ 2. Sistema de favoritos

Guardado local con localStorage.
UI reactiva gracias a useMutation.
Los favoritos persisten aunque reinicies el navegador.

🎨 3. Interfaz limpia y modular

Componentes separados (Header, MoviesList, MovieCard, etc.).
Estilos con CSS Modules.

---

## ⚙️ Instalación y ejecución local

1. Clonar el repositorio:
   
    git clone https://github.com/tu-usuario/peliculas-app.git

3. Instalar dependencias:

    npm install
    npm install @tanstack/react-query axios

4. Ejecutar el proyecto:

    npm run dev


5. Abrir en el navegador:

    http://localhost:5173


👨‍💻 Autor

Hernán Di Gialonardo

Proyecto académico — Informatorio 2025
