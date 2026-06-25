# RecTP2

# Dragon Ball API

API REST que permite autenticarse con JWT, obtener personajes desde la [Dragon Ball API].


## Variables de entorno


| Variable | Descripción | Ejemplo |
|---|---|---|
| `PORT` | Puerto del servidor | `3000` |
| `JWT_SECRET` | Clave secreta para firmar el JWT | `clave` |
| `JWT_EXPIRES_IN` | Tiempo de expiración del JWT | `2h` |
| `DRAGONBALL_URL` | URL base de la API externa | `https://dragonball-api.com/api` |


## Ejecutar la app

```
npm run start
```

Si todo está bien configurado vas a ver:

```
Servidor corriendo en http://localhost:3000
```

## Usuario de prueba

No hay base de datos. El único usuario válido es:

```json
{
  "username": "prueba",
  "password": "1234"
}
```

# Estructura del proyecto

```
src/
    ├── app.js
    ├── data/
    │   ├── users.js
    │   └── favorites.js
    ├── middlewares/
    │   └── authMiddleware.js
    ├── services/
    │   └── dragonBallService.js
    ├── controllers/
    │   ├── authController.js
    │   └── charactersController.js
    └── routes/
        ├── authRoutes.js
        └── charactersRoutes.js
```
