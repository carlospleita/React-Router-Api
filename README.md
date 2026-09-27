# Catálogo de Pokémon — TP React Router + Api

Aplicación hecha con React, React Router, Ant Design y Axios que muestra un catálogo de Pokémon con buscador por nombre y una página de detalle para cada uno.

## Alumno

**Nombre:** Carlos Daniel Pleitavino

## Cómo correr el proyecto

Requisitos: Node.js y npm instalados.

```bash
npm install
npm run dev
```

Después abrí en el navegador la URL que muestra Vite (por defecto `http://localhost:5173`).

## API pública utilizada

**PokeAPI** — API REST gratuita con información de Pokémon. No requiere autenticación.

- Documentación: https://pokeapi.co/docs/v2
- URL base: `https://pokeapi.co/api/v2`

## Endpoints consumidos

| Endpoint | Uso en la app |
| --- | --- |
| `GET /pokemon?limit=24` | Listado inicial del catálogo (sin búsqueda). |
| `GET /pokemon?limit=100000` | Lista completa de nombres para filtrar la búsqueda por nombre en el cliente (PokeAPI no tiene búsqueda parcial). |
| `GET /pokemon/{id}` | Detalle de un Pokémon: tipos, habilidades, altura, peso, experiencia base y estadísticas. |

Las imágenes del listado se obtienen del repositorio de sprites de PokeAPI:
`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png`

Las llamadas están en [src/services/api.js](src/services/api.js).

## Rutas de la aplicación

| Ruta | Página |
| --- | --- |
| `/` | Inicio |
| `/catalogo` | Catálogo con buscador |
| `/catalogo/:id` | Detalle de un Pokémon |
| `*` | Página no encontrada |
