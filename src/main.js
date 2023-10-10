import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiFileCodeFill, MdDeleteforever   } from "oh-vue-icons/icons";

addIcons(BiFileCodeFill, MdDeleteforever );

createApp(App).use(store).use(router).component("v-icon", OhVueIcon).mount('#app')
