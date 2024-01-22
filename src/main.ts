import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';

// CSS styles
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";
import './assets/styles/custom.scss'
import './assets/styles/globals.scss'

const app = createApp(App)

// Mount App
app
.use(router)
.use(PrimeVue)
.mount('#app')