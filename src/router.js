import { createRouter, createWebHistory } from "vue-router";

import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Gallery from "./components/Gallery.vue";
import Navigation from "./components/Navigation.vue";
import Services from "./components/Services.vue";

const routes = [
  { path: "/", Component: Navigation },
  { path: "/about", component: About },
  { path: "/contact", component: Contact },
  { path: "/services", component: Services },
  { path: "/gallery", component: Gallery },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
