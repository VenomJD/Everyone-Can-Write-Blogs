# Despliegue en Vercel

## Configuración del Proyecto

Este proyecto está configurado para desplegarse en Vercel con las siguientes optimizaciones:

### Archivos de Configuración

- `vercel.json` - Configuración específica para Vercel
- `package.json` - Scripts optimizados para producción

### Variables de Entorno Requeridas

Configura las siguientes variables de entorno en el dashboard de Vercel:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET_KEY=your_jwt_secret

# S3 (AWS)
S3_BUCKET_REGION=your_s3_bucket_region
S3_ACCESS_KEY_ID=your_s3_access_key_id
S3_SECRET_ACCESS_KEY=your_s3_secret_access_key
S3_BUCKET_NAME=your_s3_bucket_name

# Firebase (opcional si usas archivo JSON)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_PRIVATE_KEY=your_firebase_private_key
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
```

## Pasos para Desplegar

1. **Conecta tu repositorio** a Vercel
2. **Configura las variables de entorno** en el dashboard de Vercel
3. **Selecciona la carpeta `server`** como directorio raíz
4. **Deploy automático** se ejecutará en cada push

## Optimizaciones Incluidas

- ✅ **Rutas específicas** para cada endpoint
- ✅ **Timeout extendido** (30 segundos) para operaciones pesadas
- ✅ **Build optimizado** para Node.js
- ✅ **Variables de entorno** configuradas
- ✅ **Scripts de producción** optimizados

## Notas Importantes

- El archivo `blogsv2-e07f9-firebase-adminsdk-3j0f9-aeae55afec.json` debe estar en la raíz del servidor
- Asegúrate de que todas las variables de entorno estén configuradas
- El puerto se configura automáticamente en Vercel 