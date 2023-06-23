# Vue 3 Ecommerce

## Introducción

Este repositorio se corresponde con el curso titulado "Aprende Vue 3, Vite, VueRouter, Vuetify, Pinia y TypeScript".

Haz clic en la imagen siguiente ver una presentación *en formato de video* de lo que aprenderás en el curso.

[![Curso de Vue 3](https://res.cloudinary.com/pym/image/upload/c_scale,f_auto,q_auto:best,w_420/v1684815583/series/vue-3-vuetify-pinia-typescript-vite-router.png)](https://www.youtube.com/watch?v=2qis3L4Sn9M)

## Cómo acceder al curso

Tienes 2 opciones:
- Adquirirlo [a través de Udemy](https://www.udemy.com/course/vue-3-vite-vuetify-pinia-typescript-router/?referralCode=05F9DE05F8A8DE0AC017)
- Conseguir una suscripción a [TODOS los cursos](https://programacionymas.com/planes?coupon=TRY_1_DOLLAR_MONTH) (desde 1$)


## Entidades / Modelos

### Product

- id
- name
- description
- price
- image

### Category

- id
- name
- description

### Cart

- products: `[{productId: 1, quantity: 3},{productId: 7, quantity: 5}]`

## Componentes

### ProductCard

## Pages

- / -> Todos los productos
- /category/5 -> Productos sólo de la categoría 5
- /cart -> Ver el carrito de compras

## Instalación

```sh
npm install
```

### Compile + Hot-Reload (Desarrollo)

```sh
npm run dev
```

### Type-Check, Compile and Minify (Producción)

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
