# 🌎 API Regiones y Comunas de Chile

Esta API permite obtener información sobre regiones y comunas de Chile.

## 📌 Endpoints Disponibles

- **`/api/regiones`** - Retorna todas las regiones.
- **`/api/regiones?numero=I`** - Retorna región y comunas.
- **`/api/comunas`** - Retorna todas las comunas.
- **`/api/comunas?codigo_postal=1100000`** - Filtra por comuna exacta.

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
