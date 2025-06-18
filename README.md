# CodeStart App

Una aplicación educativa moderna para gestionar módulos de aprendizaje, construida con React y Node.js.

## Mejoras Recientes

### Frontend
- 🎨 UI/UX mejorada con Tailwind CSS
  - Diseño moderno y responsive
  - Animaciones suaves y transiciones
  - Mejor experiencia de usuario en formularios
  - Componentes reutilizables y consistentes

- ⚡ Mejoras en Componentes
  - ModuleCard: Nuevo diseño con efectos hover y PropTypes
  - ModulesPage: Hero section mejorado y estados de carga
  - ModuleDetailPage: Visualización mejorada de ejemplos de código con función de copiado
  - CreateModulePage: Validación de formularios y mejor manejo de errores

### Backend
- 🔒 Mejor Manejo de Errores
  - Validación robusta en controladores
  - Mensajes de error descriptivos
  - Logging mejorado para debugging

- 📝 Documentación
  - Comentarios JSDoc en todas las funciones
  - Documentación de rutas API
  - Mejor organización del código

### Características Principales
- ✨ Listado de módulos educativos
- 📚 Vista detallada de módulos
- ➕ Creación de nuevos módulos
- 🎯 Niveles de dificultad
- 💻 Soporte para ejemplos de código

## Tecnologías

### Frontend
- React
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express
- CORS
- Sistema de base de datos en memoria

## Instalación

1. Clonar el repositorio:
\`\`\`bash
git clone [url-del-repositorio]
\`\`\`

2. Instalar dependencias del backend:
\`\`\`bash
cd codestart-app/backend
npm install
\`\`\`

3. Instalar dependencias del frontend:
\`\`\`bash
cd ../frontend
npm install
\`\`\`

## Uso

1. Iniciar el backend:
\`\`\`bash
cd backend
npm start
\`\`\`

2. Iniciar el frontend:
\`\`\`bash
cd frontend
npm start
\`\`\`

3. Abrir http://localhost:3000 en el navegador

## API Endpoints

- GET /api/modules - Obtener todos los módulos
- GET /api/modules/:id - Obtener un módulo específico
- POST /api/modules - Crear un nuevo módulo
- PUT /api/modules/:id - Actualizar un módulo
- DELETE /api/modules/:id - Eliminar un módulo

## Estructura del Proyecto

\`\`\`
codestart-app/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
└── backend/
    ├── controllers/
    ├── routes/
    ├── db/
    └── index.js
\`\`\`

## Contribuir

1. Fork el proyecto
2. Crear una rama para tu feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit tus cambios (\`git commit -m 'Add some AmazingFeature'\`)
4. Push a la rama (\`git push origin feature/AmazingFeature\`)
5. Abrir un Pull Request
