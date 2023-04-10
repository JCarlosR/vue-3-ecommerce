import { defineStore } from 'pinia'
import type { Product } from '@/model/types';

export const useProductsStore = defineStore('products', {
    state: () => ({
        order: '' as string,
        categoryId: null as number|null,
        _products: [
            {
                name: 'Silla', 
                price: 56, id: 1, 
                image: '/products/silla.webp',
                categoryId: 1
            },
            {
                name: 'Monitor', 
                price: 450, 
                id: 2, 
                image: '/products/monitor.jpg',
                categoryId: 1
            },
            {
                name: 'Micrófono', 
                price: 20, 
                id: 3, 
                image: '/products/microfono.jpg',
                categoryId: 2
            },
            {
                name: 'Parlantes', 
                price: 56, 
                id: 4,
                image: '/products/parlantes.jpg',
                categoryId: 1
            },
            {
                name: 'Audífonos', 
                price: 450, 
                id: 5,
                image: '/products/headphones.jpg',
                categoryId: 2
            },
            {
                name: 'Mouse Gamer', 
                price: 20, 
                id: 6,
                image: '/products/mouse.jpg',
                categoryId: 2
            }
        ] as Product[]
    }),
    getters: {
        products(state) {
            let products = null;

            // Filter
            if (state.categoryId) {
                products = state._products
                    .filter(p => p.categoryId === state.categoryId);    
            } else {
                products = state._products;
            }

            // Order
            if (state.order === '') {
                return products;
            }

            if (state.order === 'price') {
                return products.sort((a, b) => a.price - b.price);
            }

            if (state.order === 'name') {
                return products.sort((a, b) => a.name.localeCompare(b.name));
            }
        }
    },
    actions: {
        selectCategory(categoryId: number) {
            this.categoryId = categoryId;
        },
        orderByPrice() {
            this.order = 'price';
        },
        orderByName() {
            this.order = 'name';
        }
    },
})