# Título del Proyecto

CODEQUEST 2024 - Sorteos

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas. Mira la sección de _Instalación_ para saber cómo instalarlo.

### Pre-requisitos

Necesitas instalar:

- Node.js (Preferiblemente la última versión LTS)
- Yarn o NPM
- PostgreSQL (Asegúrate de tener una base de datos creada para el proyecto)
- React para el frontend

### Instalación

Clonar el repositorio y entrar en el directorio del proyecto:

```bash
git clone https://github.com/tuUsuario/CodeQuest2024.git
cd CodeQuest2024
```

Instalar las dependencias del backend

```bash
cd backend
npm install
```

Instalar las dependencias del frontend

```bash
cd frontend
npm install
```

Crea un archivo .env en el directorio del backend basándote en el archivo .env.example proporcionado, ajustando las variables de entorno necesarias (por ejemplo, las credenciales de la base de datos).

Ejecución
Para iniciar el backend, ejecuta:

```bash
npm run start:dev
```

Para iniciar el frontend, ejecuta:

```bash
npm run dev
```

# Construido con:
- NestJS - El framework utilizado para el backend
- React - Utilizado para el frontend
- TypeORM - ORM para la gestión de la base de datos
- PostgreSQL - Como sistema de gestión de base de datos