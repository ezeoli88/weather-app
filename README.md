# ☀️ Weather Forecast App

Una elegante aplicación de pronóstico del tiempo que utiliza la API de Yahoo Weather para mantenerte informado sobre las condiciones meteorológicas de cualquier ciudad del mundo.

## 🚀 Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn
- Cuenta en RapidAPI con API key para Yahoo Weather

## 🛠️ Configuración Inicial

### 1. Clona e instala el proyecto

bash
git clone <url-del-repositorio>
cd weather-forecast-app
npm install

2. Instala las dependencias:

bash
npm install

### 3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

env
VITE_RAPID_API_KEY=tu_api_key_aqui
VITE_RAPID_API_HOST=yahoo-weather5.p.rapidapi.com

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila el proyecto para producción.
- `npm run test`: Ejecuta las pruebas unitarias.

## Estructura del Proyecto

📁 src/
├── 🏠 modules/          # Módulos principales de la aplicación
│   ├── 🏡 Home/        # Página de inicio y búsqueda
│   ├── 📊 Details/     # Vista detallada del clima
│   └── ⭐ Favorites/   # Gestión de ciudades favoritas
├── 🔄 shared/          # Componentes y utilidades reutilizables 
├── 🌍 context/         # Gestión del estado global con React Context
└── 📝 types/           # Definiciones de tipos TypeScript