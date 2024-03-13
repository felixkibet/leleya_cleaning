<template>
  <div class="container gallery py-5">
    <h2 class="text-center mb-4">Our Amazing Work</h2>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="image in images" :key="image.id">
        <div class="card h-100 shadow">
          <img :src="image.src" :alt="image.alt" class="card-img-top img-fluid" />
          <div class="card-body">
            <h5 class="card-title">{{ image.title }}</h5>
            <p class="card-text">{{ image.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
console.log("Images");
const images = ref([
  {
    id: 1,
    src: "../assets/image1.jpg",
    alt: "Image 1 description",
    title: "Cleaning Kitchen",
    description:
      "Sparkling clean kitchen after our professional cleaning service.",
  },
  {
    id: 2,
    src: "../assets/image1.jpg",
    alt: "Image 2 description",
    title: "Tidy Living Room",
    description:
      "A fresh and organized living room after our meticulous cleaning.",
  },
  {
    id: 3,
    src: "../assets/image1.jpg",
    alt: "Image 2 description",
    title: "Tidy Living Room",
    description:
      "A fresh and organized living room after our meticulous cleaning.",
  },
  {
    id: 4,
    src: "../assets/image1.jpg",
    alt: "Image 6 description",
    title: "Sparkling Bathroom",
    description: "A spotless bathroom after our deep cleaning service.",
  },
  {
    id: 5,
    src: "../assets/image1.jpg",
    alt: "Image 6 description",
    title: "Sparkling Bathroom",
    description: "A spotless bathroom after our deep cleaning service.",
  },
  {
    id: 6,
    src: "../assets/image1.jpg",
    alt: "Image 6 description",
    title: "Sparkling Bathroom",
    description: "A spotless bathroom after our deep cleaning service.",
  },
]);
</script>

<!--<style scoped>-->
<!--.gallery-section {-->
<!--  height: calc(100vh - 76px); /* Subtract navbar height */-->
<!--}-->
<!--</style>-->
