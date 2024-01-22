# Vue 3 + TypeScript + Vite
CINEMA-FILMS
- Web application that allows visualization of data movies to cinema customers.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Preguntas
Como has visto, la llamada que has implementado para obtener las películas que están en cartelera puede recibir un parámetro “page”. No es objeto de esta prueba implementar paginación, pero si tuvieses que hacerlo, ¿puedes explicar cómo lo harías en la aplicación y en el backend?

- En el backend trabajaríamos con el parámetro “total_pages” de la primera llamada, simplemente montaríamos un endpoint para recibir el número total de páginas y de registros que sería los que consumiría el front. En la aplicación llamaríamos al endpoint del númoro total de páginas y resgistros, sabiendo que recibimos 20 registros por pagína ya tendríamos la paginación montada.

Si tuvieses que manejar un Array con 7 millones de películas, y necesitas eliminar aquellas en las que el atributo vote_average no supera el valor 6, ¿cómo lo harías? Justifica tu respuesta teniendo en cuenta el rendimiento.

- Si el endpoint devuelve directamente los 7 millones de registros habría que montar un servicio para trabajar con paginación y pasarle un parámetro page y así decidir los registros que se van a enviar por página puediendo también pasarle el parámetro vote_average para filtrar por el valor indicado. Em otro caso, si los registros los podemos manejar desde la BD, crearíamos una consulta en BD para poder filtrar por el parámetro indicado.

## Common Setup

1. Clone the repo and install dependencies

```bash
git clone https://github.com/enrysix/cinema-films.git
cd cinema-films
```

2. Install dependecies

```bash
npm i
```
or 
```bash
pnpm i
```

### Compiles and hot-reloads for development

```
npm run dev
```
or
```
pnpm dev
```

Web serviced on http://localhost:8080