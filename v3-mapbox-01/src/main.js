import './assets/main.css'

import { createApp } from 'vue'
// FormKit UI
import { plugin, defaultConfig } from '@formkit/vue'
import "@formkit/themes/genesis";
import App from './App.vue'
import { StreamBarcodeReader } from "vue-barcode-reader";

createApp(App).use(plugin, defaultConfig).mount('#app')
// remember, each Vue plugin needs its own .use()
// .use(router).use(plugin2)




