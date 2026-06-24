# Frontend Catálogo Café

Proyecto final del Bootcamp Neoland Web Development.

## Descripción

Aplicación web para gestionar un catálogo de productos de café.

## Tecnologías

- React
- Vite
- CSS
- JavaScript
- Vitest
- Fetch API
- Testing

## Clonar el repositorio

```
git clone https://github.com/Albema1990/frontend-proyecto-mobiliario-alvaro-benitez.git

git switch dev
```

## Como ejecutar el proyecto

```shell
npm install
npm run dev
```

## Ejecutar en desarrollo
```
npm run dev
```
La aplicación estará disponible en 
```
http://localhost:5173
```

## Ejecutar tests
```
npm test
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.jsx',
  },
})

## Generar build de producción
```
npm run build
```
Los archivos generados se encontrarán en 
```
/dist
```

## Backend
Este proyecto consume una API REST desarrollada con:
- Node
- Express
- MongoDB Atlas
- JWT

## Autenticación

La aplicación utiliza JWT.

Al iniciar sesión se almacena:
```
token
user
```
en el localStorage del navegador

## Deploy

Frontend desplegado en:

```
https://lambent-sopapillas-451a0e.netlify.app/
```

Backend desplegado en: 

```
https://backend-proyecto-mobiliario-alvaro.vercel.app/
```


## Autor

Proyecto desarrollado para el Bootcamp Full Stack Web Development de NEOLAND

Álvaro Benítez Mayorga