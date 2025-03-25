# Gateway
Puerta de entrada utilizando GraphQL para utilizar un único endpoint que devuelva los datos de cada microservicio

## 📁 Estructura del Proyecto

```
src/
├── config/                         # Configuración general del gateway
│   ├── graphql/                    # Configuración de GraphQL (schemas, resolvers, etc.)
│   └── server/                     # Configuración del servidor (puertos, middlewares, etc.)
├── domain/                         # Capa de dominio del gateway
│   ├── services/                   # Servicios que gestionan la lógica del gateway
│   ├── errors/                     # Manejo de errores específicos del gateway
│   └── dtos/                       # DTOs para la interacción con otros microservicios
├── infrastructure/                 # Implementaciones de infraestructura
│   ├── datasources/                # Implementaciones de acceso a datos (por ejemplo, clientes HTTP para consumir otros servicios)
│   │   ├── userService/            # Cliente HTTP para el microservicio de usuarios
│   │   ├── otherService/           # Cliente HTTP para otros microservicios
│   │   └── etc/                    # Otros clientes si los hubiere
│   ├── repositories/               # Implementaciones de repositorios del gateway (si es necesario)
│   └── apiClients/                 # Implementación de API clientes (GraphQL, REST) que interactúan con los microservicios
├── presentation/                   # Capa de presentación
│   ├── graphql/                    # Definición de esquemas, resolvers y tipos de GraphQL
│   │   ├── schemas/                # Esquemas de GraphQL (tipos, queries, mutations)
│   │   ├── resolvers/              # Lógica de los resolvers que orquestan las llamadas a los microservicios
│   │   └── subscriptions/          # Si utilizas suscripciones GraphQL
│   └── server/                     # Configuración de Express.js o cualquier servidor que maneje las solicitudes GraphQL
└── shared/                         # Componentes comunes que puedan ser reutilizados
    ├── utils/                      # Funciones utilitarias
    ├── validators/                 # Validadores y middleware comunes
    └── constants/                  # Constantes compartidas entre el gateway y microservicios



```

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el repositorio
```sh
git clone https://github.com/Ezequielz/gateway.git
cd gateway
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

- **Node.js** - Entorno de ejecución para construir aplicaciones backend eficientes y escalables.
- **Express.js** - Framework minimalista para Node.js que facilita la creación de rutas y controladores para gestionar solicitudes HTTP.
- **GraphQL** - Lenguaje de consulta para APIs que permite a los clientes solicitar solo los datos que necesitan, lo que mejora la eficiencia.
- **Apollo Server** - Implementación de GraphQL para Node.js, que facilita la creación de un servidor GraphQL con soporte para resolvers, esquemas y suscripciones.
- **TypeScript** - Lenguaje de programación basado en JavaScript que añade tipado estático, mejorando la calidad del código y la productividad en el desarrollo.



## 📌 Principios de Arquitectura
✅ **Separación de responsabilidades** - Cada capa tiene su propósito específico.
✅ **Escalabilidad** - Fácil de agregar nuevas funcionalidades.


## 📄 Licencia
Este proyecto está bajo la licencia MIT. ¡Úsalo y modifícalo libremente! 🎉
