<template>
  <Navigation />
  <RouterView></RouterView>
  <!-- <About /> -->
  <!-- <Gallery /> -->
  <!-- <Services /> -->
  <!-- <Contact /> -->
  <Footer />
</template>

<script setup>
import Navigation from "./components/Navigation.vue";
import About from "./components/About.vue";
import Gallery from "./components/Gallery.vue";
import Services from "./components/Services.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>
