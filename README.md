# Frontend Catálogo Café

Proyecto final del Bootcamp Full Stack Web Development de NEOLAND.

## Descripción

Aplicación web desarrollada con React que permite consultar un catálogo de cafés de especialidad y accesorios, buscar productos, filtrarlos por categorías, gestionar un carrito de compra, suscribirse a una newsletter y administrar los productos mediante un panel protegido para administradores.

## Funcionalidades

- Visualización del catálogo de productos.
- Búsqueda dinámica de productos.
- Filtro por categorías.
- Página de detalle de cada producto.
- Productos relacionados.
- Carrito de compra.
- Persistencia del carrito mediante LocalStorage.
- Registro e inicio de sesión mediante JWT.
- Panel de administración protegido.
- CRUD completo de productos.
- Suscripción a la newsletter.
- Diseño responsive.
- Tests con Vitest.

## Tecnologías

- React
- Vite
- JavaScript (ES6+)
- React Router DOM
- Context API
- CSS3
- Fetch API
- Vitest
- JWT Authentication

## Estructura del proyecto
src/
├── components
├── context
├── hooks
├── layouts
├── pages
├── router
├── services
├── tests
└── assets

## Clonar el repositorio

```
git clone https://github.com/Albema1990/frontend-proyecto-mobiliario-alvaro-benitez.git

cd frontend-proyecto-mobiliario-alvaro-benitez

git switch dev
```

## Como ejecutar el proyecto

```shell
npm install
```

## Variables de entorno

Crear un archivo .env en la raíz del proyecto:

VITE_API_URL=http://localhost:3000/api

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
- Mongoose

Repositorio Backend:

https://github.com/Albema1990/backend-proyecto-mobiliario-alvaro-benitez

## Autenticación

La aplicación utiliza autenticación basada en JWT.

Tras iniciar sesión se almacenan en LocalStorage:

- token
- user

Estas credenciales permiten acceder a las rutas protegidas del panel de administración.

## Características técnicas

- Arquitectura SPA desarrollada con React.
- Consumo de API REST mediante Fetch API.
- Gestión global del carrito utilizando Context API.
- Persistencia del carrito mediante LocalStorage.
- Autenticación mediante JWT.
- Rutas protegidas para administradores.
- CRUD completo de productos.
- Newsletter conectada con MongoDB.
- Diseño responsive para escritorio, tablet y móvil.
- Tests unitarios realizados con Vitest.

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