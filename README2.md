# 🚀 CodeStart — Plataforma Educativa de Programación

[![React](https://img.shields.io/badge/frontend-react-blue?logo=react)](https://react.dev)
[![TailwindCSS](https://img.shields.io/badge/styling-tailwindcss-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![Node.js](https://img.shields.io/badge/backend-node.js-339933?logo=node.js)](https://nodejs.org)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

**CodeStart** es una plataforma educativa creada para guiar a personas en su iniciación al mundo de la programación. Ofrece una interfaz moderna, limpia y responsiva, que permite explorar contenidos modulares y agregar nuevos fácilmente. Es una aplicación **full stack** construida con **React**, **Tailwind CSS**, **Node.js**, **Express** y **MongoDB**.

---

## ✨ Características clave

- ⚛️ **Frontend moderno** con React y Tailwind CSS
- 🌐 **API RESTful** con Node.js, Express y MongoDB
- 📚 **Gestión de módulos educativos**:
  - Visualización general de módulos
  - Vista detallada de un módulo
  - Creación de nuevos módulos con formulario
- 🔁 **Arquitectura frontend/backend desacoplada**
- ❗ **Manejo de errores y estados de carga eficiente**
- 📦 **Estructura de carpetas organizada**
- 📄 **Documentación técnica clara y extensa**

---

## 📁 Estructura del proyecto

```
codestart/
├── backend/              # API REST - Node.js/Express
│   ├── controllers/
│   │   └── moduleController.js
│   ├── models/
│   │   └── Module.js
│   ├── routes/
│   │   └── moduleRoutes.js
│   ├── render.yaml       # Configuración para despliegue en Render
│   └── server.js
└── frontend/             # Interfaz - React/Tailwind
    ├── src/
    │   ├── components/
    │   │   └── ModuleCard.jsx
    │   ├── pages/
    │   │   ├── ModulesPage.jsx
    │   │   ├── ModuleDetailPage.jsx
    │   │   ├── CreateModulePage.jsx
    │   │   ├── LoginPage.jsx
    │   │   └── RegisterPage.jsx
    │   ├── services/
    │   │   └── authService.js
    │   ├── context/
    │   │   └── AuthContext.jsx
    │   └── AppNew2.jsx
    ├── indexNew2.js
    ├── package.json
    └── vercel.json       # Configuración para despliegue en Vercel
```

---

## 🔌 Endpoints de la API

### `GET /api/modules`
- Retorna todos los módulos disponibles.
- Respuesta: Array de objetos módulo.

### `GET /api/modules/:id`
- Retorna un módulo específico por su ID.
- Respuesta: Objeto del módulo.

### `POST /api/modules`
- Crea un nuevo módulo.
- Body:
```json
{
  "title": "Título del módulo",
  "description": "Descripción del módulo",
  "content": "Contenido detallado",
  "codeSamples": ["ejemplo1", "ejemplo2"],
  "level": "Principiante"
}
```

---

## ⚙️ Instalación y ejecución local

### Requisitos:
- Node.js y npm instalados
- MongoDB local o en la nube

### 1. Clonar el repositorio

```bash
git clone https://github.com/Fefox-glitch/CodeStart.git
cd codestart
```

### 2. Configurar Backend

```bash
cd backend
npm install
npm run dev
```

> Servidor backend corriendo en `http://localhost:5000`

### 3. Configurar Frontend

```bash
cd ../frontend
npm install
npm run start:new2
```

> Interfaz disponible en `http://localhost:3000`

---

## ☁️ Despliegue automático

### Frontend (Vercel)

- Conecta el repositorio a Vercel
- El archivo `frontend/vercel.json` configura el build y rutas
- El comando de build es `npm run build`
- El directorio de salida es `build`

### Backend (Render)

- Usa el archivo `backend/render.yaml` para configurar el servicio
- Variables de entorno necesarias:
  - `NODE_ENV=production`
  - `PORT=10000`
  - `MONGO_URI` (cadena de conexión MongoDB)
  - `JWT_SECRET` (secreto para JWT)
  - `JWT_EXPIRE` (duración del token)
  - `JWT_COOKIE_EXPIRE` (duración cookie)
- El comando de inicio es `npm run start`

---

## 🧪 Próximas mejoras

- 🧪 Pruebas unitarias e integración
- 📈 Seguimiento de progreso por usuario

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas!

1. Haz un fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva funcionalidad'`)
4. Haz push a tu rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 👨‍💻 Autor

**Fernando Troncoso Ortiz**  
Desarrollador Full Stack | Santiago, Chile  
📧 [fernandotroncoso.ortiz@gmail.com](mailto:fernandotroncoso.ortiz@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/fernando-troncoso-ortiz)

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.
