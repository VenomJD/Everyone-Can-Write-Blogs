# Actualización de Variables de Entorno

## Cambios Realizados

Se han actualizado los nombres de las variables de entorno para evitar conflictos con Vercel:

### Variables Actualizadas

| Variable Anterior | Variable Nueva | Descripción |
|------------------|----------------|-------------|
| `DB_LOCATION` | `MONGODB_URI` | Conexión a MongoDB |
| `SECRET_ACCESS_KEY` | `JWT_SECRET_KEY` | Clave secreta para JWT |
| `AWS_BUCKET_REGION` | `S3_BUCKET_REGION` | Región del bucket S3 |
| `AWS_ACCESS_KEY` | `S3_ACCESS_KEY_ID` | ID de acceso a S3 |
| `AWS_SECRET_ACCESS_KEY` | `S3_SECRET_ACCESS_KEY` | Clave secreta de S3 |
| `AWS_BUCKET_NAME` | `S3_BUCKET_NAME` | Nombre del bucket S3 |

### Archivo .env Actualizado

Crea un archivo `.env` en la carpeta `server/` con:

```env
# Database Configuration
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name

# S3 Configuration (AWS)
S3_BUCKET_REGION=us-east-1
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
JWT_SECRET_KEY=your_jwt_secret_key_here

# Other Configuration
CORS_ORIGIN=http://localhost:3000
```

### Configuración en Vercel

Actualiza las variables de entorno en el dashboard de Vercel con los nuevos nombres.

### Archivos Modificados

- ✅ `server.js` - Variables actualizadas
- ✅ `ENV_SETUP.md` - Documentación actualizada
- ✅ `DEPLOYMENT.md` - Documentación de despliegue actualizada 