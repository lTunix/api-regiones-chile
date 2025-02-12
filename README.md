# 🌎 API Regiones y Comunas de Chile

Entra al sitio [https://api-regiones-chile.vercel.app](https://api-regiones-chile.vercel.app)

Esta API permite obtener información sobre regiones y comunas de Chile.

## 📌 Endpoints Disponibles

- **`https://api-regiones-chile.vercel.app/api/regiones`** - Retorna todas las regiones.
- **`https://api-regiones-chile.vercel.app/api/regiones?numero=I`** - Retorna región y comunas.
- **`https://api-regiones-chile.vercel.app/api/comunas`** - Retorna todas las comunas.
- **`https://api-regiones-chile.vercel.app/api/comunas?postal_code=1100000`** - Filtra por comuna exacta.

## 📊 Ejemplo de Respuesta

```json
[
  {
    "nombre": "Tarapacá",
    "numero": "I",
    "comunas": [
      {
        "nombre": "Iquique",
        "codigo_postal": "1100000"
      }
    ]
  }
]
