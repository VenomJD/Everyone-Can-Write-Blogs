# Configuración de Variables de Entorno

## Archivo .env

Crea un archivo `.env` en la carpeta `server/` con las siguientes variables:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=27017
DB_NAME=your_database_name
DB_USER=your_username
DB_PASSWORD=your_password

# AWS Configuration (if using AWS services)
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key
AWS_REGION=your_aws_region

# Firebase Configuration
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email

# Server Configuration
PORT=3000
NODE_ENV=development

# JWT Secret
JWT_SECRET=your_jwt_secret_key

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