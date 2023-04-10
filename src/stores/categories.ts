import { defineStore } from 'pinia'
import type { Category } from '@/model/types';

export const useCategoriesStore = defineStore('categories', {
    state: () => ({
        categories: [{
            id: 1,
            name: 'Oficina',
            description: 'Productos para tu oficina.'
        }, {
            id: 2,
            name: 'Computadora',
            description: 'Accesorios para computadora.'
        }] as Category[]
    }),
    getters: {
        
    },
    actions: {

    },
})