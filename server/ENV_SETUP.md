# Configuración de Variables de Entorno

## Archivo .env

Crea un archivo `.env` en la carpeta `server/` con las siguientes variables:

```env
# Database Configuration
MONGODB_URI=your_mongodb_connection_string

# S3 Configuration (AWS)
S3_BUCKET_REGION=your_s3_bucket_region
S3_ACCESS_KEY_ID=your_s3_access_key_id
S3_SECRET_ACCESS_KEY=your_s3_secret_access_key
S3_BUCKET_NAME=your_s3_bucket_name

# Firebase Configuration
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email

# Server Configuration
PORT=3000
NODE_ENV=development

# JWT Secret
JWT_SECRET_KEY=your_jwt_secret_key

# Other Configuration
CORS_ORIGIN=http://localhost:3000
```

## Importante

- **NUNCA** commits el archivo `.env` al repositorio
- **NUNCA** compartas tus credenciales reales
- Usa credenciales diferentes para desarrollo y producción
- Regenera las credenciales si han sido expuestas

## Firebase Service Account

Para Firebase, necesitas descargar el archivo de credenciales de servicio desde la consola de Firebase y guardarlo como `firebase-adminsdk-*.json` en la carpeta `server/`. Este archivo también está en el `.gitignore`. 