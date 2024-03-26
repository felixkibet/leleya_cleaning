import { createRouter, createWebHistory } from "vue-router";

import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Gallery from "./components/Gallery.vue";
import Services from "./components/Services.vue";

const routes = [
  { path: "/", component: About, name: "home" },
  { path: "/about", component: About, name: "about" },
  { path: "/contact", component: Contact, name: "contact" },
  { path: "/services", component: Services, name: "services" },
  { path: "/gallery", component: Gallery, name: "gallery" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
