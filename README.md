### Tech's

- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) + VIKE
- ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)


### Libraries
- ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)


# Proyecto de React-Vike con SSR y CSR

Este proyecto utiliza React junto con SSR (Server-Side Rendering) y CSR (Client-Side Rendering) para proporcionar una experiencia de usuario rápida y eficiente. A continuación, se detalla cómo se implementaron estas características y cómo ejecutar las pruebas unitarias y el proyecto.

## Implementación de SSR y CSR

### SSR (Server-Side Rendering)

Server-Side Rendering se implementa en este proyecto para mejorar el tiempo de carga inicial de la página y la indexabilidad por los motores de búsqueda. Utilizamos [Vike](https://github.com/vike) para manejar el renderizado del lado del servidor.

- **Vista de Login (/pages/login):**
  - Renderiza el formulario de ingreso de RUT en el servidor.

- **Vista de Password (/pages/password):**
  - Renderiza el formulario de contraseña en el servidor.

### CSR (Client-Side Rendering)

Client-Side Rendering se utiliza para proporcionar una experiencia de usuario interactiva y dinámica después de la carga inicial de la página. En este proyecto, utilizamos React para manejar el renderizado del lado del cliente, permitiendo la actualización dinámica del contenido sin necesidad de recargar la página completa.

- **Vista de Dashboard (/pages/dashboard):**
  - Configurada para renderizarse completamente en el cliente.
  - En el archivo `+config.js` de esta vista, se estableció `ssr: false` para desactivar el renderizado en el servidor.
  - Toda la lógica y renderizado de esta vista se maneja en el navegador del cliente.

## Motivo del Unit Test

Los tests unitarios se utilizan para garantizar que cada componente y función del proyecto funcione correctamente de manera aislada. Esto ayuda a identificar y corregir errores en las etapas tempranas del desarrollo y a asegurar que los cambios en el código no rompan funcionalidades existentes. En este proyecto, hemos implementado tests unitarios para:

- Verificar que los componentes se rendericen correctamente.
- Asegurar que las funciones manejen los datos de entrada y salida según lo esperado.
- Validar que las interacciones del usuario, como clics y entradas de datos, se manejen correctamente.

## Comandos para Ejecutar los Tests y el Proyecto

### Ejecutar Unit Tests

Para ejecutar los tests unitarios, asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados. Luego, en la raíz del proyecto, ejecuta el siguiente comando:

```bash
npm test
```
Ejecutar el Proyecto
Para iniciar el proyecto en modo de desarrollo:

```bash
npm run dev
```
Para construir el proyecto para producción:
```bash

npm run build
```
