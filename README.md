# ZeroChaos - Gestor de Proyectos

Una plataforma moderna de gestión de proyectos con análisis de tareas impulsado por IA.

## 🚀 Características

- 📊 Gestión de proyectos y tareas
- 🤖 Análisis automático de dificultad de tareas con IA (Hugging Face)
- 💼 Interfaz moderna con Bootstrap 5
- 🎨 Iconos con Lucide
- ⚡ Construido con Vite

## 📦 Instalación

```bash
npm install
```

## 🔧 Configuración

1. Crea un archivo `.env` en la raíz del proyecto:
```bash
cp .env.example .env
```

2. Obtén tu token de Hugging Face en: https://huggingface.co/settings/tokens

3. Agrega tu token al archivo `.env`:
```
HF_TOKEN=tu_token_aqui
```

## 💻 Desarrollo Local

```bash
npm run dev
```

## 🌐 Despliegue en Vercel

### Opción 1: Desde la CLI de Vercel

```bash
npm install -g vercel
vercel
```

### Opción 2: Desde el Dashboard de Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio de GitHub
3. Vercel detectará automáticamente que es un proyecto Vite
4. **IMPORTANTE**: Agrega la variable de entorno `HF_TOKEN` en:
   - Settings → Environment Variables
   - Nombre: `HF_TOKEN`
   - Valor: Tu token de Hugging Face
5. Deploy

### Variables de Entorno en Vercel

Asegúrate de configurar estas variables de entorno en tu proyecto de Vercel:

| Variable | Descripción |
|----------|-------------|
| `HF_TOKEN` | Token de API de Hugging Face |

## 📁 Estructura del Proyecto

```
zerochaos/
├── api/                    # Serverless Functions para Vercel
│   └── analyze-tasks.js    # Endpoint de análisis de IA
├── src/
│   ├── main.js            # Aplicación principal
│   ├── style.css          # Estilos
│   └── api/               # (Antigua ubicación - puede eliminarse)
├── public/
├── index.html
├── package.json
├── vercel.json            # Configuración de Vercel
└── .env.example           # Plantilla de variables de entorno
```

## 🛠️ Tecnologías

- **Frontend**: Vite + Vanilla JavaScript
- **UI**: Bootstrap 5.3.8
- **Iconos**: Lucide
- **IA**: Hugging Face Inference API
- **Deploy**: Vercel

## 📝 Notas

- Las funciones API en Vercel deben estar en la carpeta `/api` en la raíz
- El token de Hugging Face se maneja de forma segura mediante variables de entorno
- No subas el archivo `.env` a GitHub (ya está en `.gitignore`)
