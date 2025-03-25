# Backend Base con Node.js

Este es un backend base desarrollado en Node.js con una arquitectura modular y escalable. Está diseñado para soportar múltiples bases de datos (MongoDB y PostgreSQL) y seguir buenas prácticas de desarrollo.

## 📁 Estructura del Proyecto

```
src/
├── config/                         # Configuración de la aplicación y adaptadores
├── domain/                         # Capa de dominio
│   ├── datasources/                # Interfaces de acceso a datos
│   ├── dtos/                       # Data Transfer Objects (DTOs)
│   ├── entities/                   # Definición de entidades
│   ├── errors/                     # Manejo de errores
│   ├── repositories/               # Interfaces de repositorios
│   └── services/                   # Casos de uso y lógica de negocio
├── infrastructure/                 # Implementaciones de la infraestructura
│   ├── database/                   # Conexiones a bases de datos
│   │   ├── mongo/                  # Configuración de MongoDB
│   │   ├──   ├── models/           # Modelos de MongoDB
│   │   ├──   └── mongoDB/          # Coneccion y desconección de MongoDB
│   │   ├── postgres/               # Configuración de PostgreSQL (si aplica)
│   │   ├── firebase/               # Configuración de Firebase (si aplica)
│   │   └── connection/             # Lógica de conexión general
│   ├── datasources/                # Implementaciones de acceso a datos
│   │   ├── mongo/                  # Implementaciones con Mongo
│   │   ├── postgres/               # Implementaciones con Postgres (si aplica)
│   │   └── etc/                    # Otras bases de datos (si aplica)
│   ├── repositories/               # Implementaciones de repositorios
└── presentation/                   # Capa de presentación
    ├── controllers/                # Controladores para manejar las solicitudes
    ├── routes/                     # Definición de rutas
    └── server/                     # Configuración del servidor

```

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/Ezequielz/back-default.git
cd back-default
```

### 2️⃣ Instalar dependencias
```sh
npm install
```

### 3️⃣ Configurar variables de entorno
Reemplazar `.env.template` por `.env` en la raíz del proyecto y añadir las variables necesarias:



### 5️⃣ Levantar Base de datos con Docker
Tener Docker desktop abierto con el demonio de docker en verde y ejecutar

```sh
  docker compose up -d
```



### 5️⃣ Ejecutar el servidor
#### Modo desarrollo
```sh
npm run dev
```

#### Modo producción
```sh
npm start
```

## 🛠 Tecnologías Utilizadas
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework para manejar rutas y controladores
- **MongoDB y Mongoose** - Base de datos NoSQL y ODM
- **PostgreSQL y Prisma** - Base de datos SQL y ORM
- **TypeScript** - Tipado estático
- **JWT (JSON Web Tokens)** - Autenticación segura

## 📌 Principios de Arquitectura
✅ **Separación de responsabilidades** - Cada capa tiene su propósito específico.
✅ **Escalabilidad** - Fácil de agregar nuevas funcionalidades.
✅ **Facilidad para cambiar la base de datos** - Implementaciones intercambiables.

## 📬 Endpoints Básicos
| Método  | Ruta            | Descripción         |
|---------|---------------|---------------------|
| POST    | `/api/auth/register` | Crear un nuevo usuario, obtiene token de sessión |
| POST    | `/api/auth/login` | Inicia sessión y obtiene token |
| GET     | `/api/users`      | Obtener todos los usuarios |
| GET     | `/api/users/:id`  | Obtener un usuario por ID |
| PUT     | `/api/users/:id`  | Actualizar un usuario |
| DELETE  | `/api/users/:id`  | Eliminar un usuario |


## 📄 Licencia
Este proyecto está bajo la licencia MIT. ¡Úsalo y modifícalo libremente! 🎉
