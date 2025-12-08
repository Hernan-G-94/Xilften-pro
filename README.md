# 🎬 Xilften Pro (React + React Query + TMDB)

Proyecto desarrollado con React + Vite, como parte de la práctica de fundamentos de React.
La aplicación muestra una lista de películas consumidas desde la API de TMDB, permite buscarlas, agregarlas a favoritos, ver su detalle en un modal y navegar mediante un sistema completo de rutas protegidas.

Incluye manejo de estado global con Context, React Query para datos externos, persistencia con LocalStorage y UI modular con CSS Modules.

---

## 🚀 Demo en línea

👉 [Ver aplicación desplegada en Vercel](https://xilften-pro.vercel.app/)

---

## 🛠️ Tecnologías utilizadas

- React + Vite

- React Router DOM (rutas protegidas)

- React Query (fetch + caché + mutaciones)

- TMDB API (The Movie Database)

- Context + LocalStorage (auth & favoritos)

- CSS Modules

- Axios

- JavaScript moderno (ESM)

---

## 🎯 Objetivo del proyecto

Implementar una aplicación completa que incluya:

✔️ Consumo real de API externa (TMDB).

✔️ Eliminación de datos hardcodeados.

✔️ Navegación con rutas y rutas protegidas.

✔️ Login simulado con Context.

✔️ Dashboard privado.

✔️ Lista de películas.

✔️ Agregar y quitar favoritos.

✔️ Persistencia de favoritos.

✔️ Modal de detalle.

✔️ Buscador.

✔️ UI adaptada y modular.

---

🔐 Sistema de autenticación (simple)

- La app incluye un AuthContext que simula login mediante email:

- Si no estás logueado, cualquier ruta te manda a /login

- Después de iniciar sesión, te redirige automáticamente a /movies

- Podés cerrar sesión desde el Dashboard o el Navbar

---

⭐ Sistema de Favoritos + Contador en Navbar

Funcionalidades:

- Agregar/quitar películas de favoritos

- Persistencia con LocalStorage

- Reactividad instantánea gracias a React Query

- Un badge con contador aparece en la esquina superior derecha del Navbar

- Página dedicada: /favorites

---

## 📡 Consumo de API externa

La app obtiene películas desde TMDB:

https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY

React Query gestiona automáticamente:

- caché

- loading

- error

- revalidación

- sincronía con mutaciones

---

🖥️ Funcionalidades detalladas
🔍 1. Lista de películas

- Datos recientes desde TMDB

- Estados de carga y error

- Buscador por nombre

- Modal con información adicional

⭐ 2. Favoritos

- Guardado local con LocalStorage

- Contador dinámico en el Navbar

- Página /favorites con todas las películas agregadas

👤 3. Sistema de usuario

- Login simple (con email)

- Rutas protegidas

- Dashboard del usuario en /dashboard

- Cerrar sesión desde Navbar o Dashboard

🎨 4. UI modular

- Componentes organizados

- Estilos con CSS Modules

- Navbar unificado con contador de favoritos

---

## 🧠 Lógica principal con React Query
✔️ useQuery

- Para obtener películas desde TMDB

- evita llamadas innecesarias

- cachea datos

- maneja loading/error automáticamente

✔️ useMutation

- Para manipular favoritos

- agrega

- elimina

- sincroniza con LocalStorage

---

## ⚙️ Instalación y ejecución local

1. Clonar el repositorio:
   
    git clone https://github.com/Hernan-G-94/Xilften-pro.git

3. Instalar dependencias:

    npm install
npm install @tanstack/react-query axios react-router-dom

4. Agregar tu API Key de TMDB:

   En un archivo .env: VITE_TMDB_API_KEY=TU_API_KEY

6. Ejecutar el proyecto:

    npm run dev


7. Abrir en el navegador:

    http://localhost:5173


👨‍💻 Autor

Hernán Gabriel Di Gialonardo

Proyecto académico — Informatorio 2025
