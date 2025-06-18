# CodeStart - Plataforma Educativa

Una aplicación web moderna para el aprendizaje de programación, construida con React y Node.js.

## Características

- 📚 Visualización de módulos educativos
- 📖 Vista detallada de cada módulo
- ✍️ Creación de nuevos módulos
- 🎨 Interfaz moderna y responsive
- ⚡ Navegación fluida entre páginas

## Estructura del Proyecto

```
codestart-app/
├── backend/
│   ├── controllers/
│   │   └── moduleController.js
│   ├── models/
│   │   └── Module.js
│   ├── routes/
│   │   └── moduleRoutes.js
│   └── index.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   └── ModuleCard.jsx
    │   ├── pages/
    │   │   ├── ModulesPage.jsx
    │   │   ├── ModuleDetailPage.jsx
    │   │   └── CreateModulePage.jsx
    │   └── App.jsx
    └── package.json
```

## API Endpoints

### GET `/api/modules`
- Retorna todos los módulos disponibles
- Respuesta: Array de módulos

### GET `/api/modules/:id`
- Retorna un módulo específico por ID
- Respuesta: Objeto del módulo

### POST `/api/modules`
- Crea un nuevo módulo
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

## Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd codestart-app
```

2. Instala las dependencias del backend:
```bash
cd backend
npm install
```

3. Instala las dependencias del frontend:
```bash
cd ../frontend
npm install
```

## Ejecución

1. Inicia el servidor backend:
```bash
cd backend
npm start
```

2. En otra terminal, inicia el frontend:
```bash
cd frontend
npm start
```

La aplicación estará disponible en `http://localhost:3000`

## Tecnologías Utilizadas

- **Frontend:**
  - React
  - React Router DOM
  - Axios
  - Tailwind CSS

- **Backend:**
  - Node.js
  - Express
  - MongoDB/Mongoose

## Contribución

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.
