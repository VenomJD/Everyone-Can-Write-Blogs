# Configuración de Firebase - Frontend

## Variables de Entorno

Crea un archivo `.env` en la carpeta `blogging website - frontend/` con las siguientes variables:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## Importante

- **NUNCA** commits el archivo `.env` al repositorio
- Las variables deben empezar con `VITE_` para que Vite las reconozca
- Obtén estas credenciales desde la consola de Firebase
- Usa credenciales diferentes para desarrollo y producción 