import { createApp } from 'vue'
// import { createPinia } from 'pinia'

import Contador from './examples/ContadorOptions.vue'
// import router from './router'

// import './assets/main.css'

const app = createApp(Contador)

// app.use(createPinia())
// app.use(router)

app.mount('#app')
