import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'
import App from './App.vue'
import fadeSlide from './directives/fade-slide'
import './assets/animations.css'

const app = createApp(App)
app.directive('fade-slide', fadeSlide)
app.mount('#app')
