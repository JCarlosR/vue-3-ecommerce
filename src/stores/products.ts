import { defineStore } from 'pinia'
import type { Product } from '@/model/types';

export const useProductsStore = defineStore('products', {
    state: () => ({
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
            if (!state.categoryId) {
                return state._products;
            }

            return state._products
                .filter(p => p.categoryId === state.categoryId);
        }
    },
    actions: {
        selectCategory(categoryId: number) {
            this.categoryId = categoryId;
        }
    },
})