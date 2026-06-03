import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Services from '../views/Services.vue';
import Contacts from '../views/Contacts.vue';
import Gallery from '../views/Gallery.vue';
import Rubavu from '../views/Rubavu.vue';
import Karongi from '../views/Karongi.vue';
import Kigali from '../views/Kigali.vue';
import Musanze from '../views/Musanze.vue';

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/About", name: "About", component: About },
  { path: "/Services", name: "Services", component: Services },
  { path: "/Contacts", name: "Contacts", component: Contacts },
  { path: "/gallery/images", name: "Gallery", component: Gallery },
  
  // 2. Add your clean destination paths
  { path: "/destinations/kigali", name: "Kigali", component: Kigali },
  { path: "/destinations/musanze", name: "Musanze", component: Musanze },
  { path: "/destinations/rubavu", name: "Rubavu", component: Rubavu },
  { path: "/destinations/karongi", name: "Karongi", component: Karongi },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router