# Guía para Crear un Proyecto de React.js con Vite

Esta guía te ayudará a configurar un proyecto de React.js utilizando Vite de manera rápida y sencilla.

## Requisitos Previos

Antes de comenzar, asegúrate de tener lo siguiente instalado en tu sistema:

- **Node.js**: Puedes descargarlo desde [nodejs.org](https://nodejs.org).

---

## Pasos para Crear el Proyecto

### 1. Crear el Proyecto con Vite

1. Abre una terminal y ejecuta el siguiente comando:
    ```bash
    npm create vite@latest nombre-del-proyecto
    ```
2. Reemplaza `nombre-del-proyecto` con el nombre que desees para tu proyecto.

### 2. Seleccionar la Plantilla

Durante la configuración, selecciona una de las siguientes plantillas según tus necesidades:

- **React**: Para un proyecto estándar de React.js.
- **React + TypeScript**: Si deseas trabajar con TypeScript.

### 3. Acceder al Directorio del Proyecto

Navega al directorio del proyecto recién creado con el siguiente comando:
```bash
cd nombre-del-proyecto
```

### 4. Instalar las Dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:
```bash
npm install
```

### 5. Iniciar el Servidor de Desarrollo

Inicia el servidor de desarrollo con el siguiente comando:
```bash
npm run dev
```

Esto abrirá tu aplicación en el navegador en la dirección `http://localhost:5173`.

---

## Pasos para Instalar y Configurar React Router

### 1. Instalar React Router

Ejecuta el siguiente comando para instalar React Router:
```bash
npm install react-router-dom
```

### 2. Configurar React Router

1. Abre el archivo `main.jsx` o `main.tsx` (dependiendo de tu configuración).
2. Importa `BrowserRouter` desde `react-router-dom` y envuelve tu componente raíz con él:
    ```jsx
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';
    import App from './App';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    );
    ```

### 3. Crear las Rutas

1. Abre el archivo `App.jsx` o `App.tsx`.
2. Importa `Routes` y `Route` desde `react-router-dom` y define tus rutas:
    ```jsx
    import { Routes, Route } from 'react-router-dom';
    import Home from './pages/Home';
    import About from './pages/About';

    function App() {
      return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      );
    }

    export default App;
    ```

3. Crea los componentes `Home` y `About` en la carpeta `pages` para que coincidan con las rutas definidas.

---

¡Listo! Ahora tienes React Router configurado en tu proyecto de React.js con Vite.  