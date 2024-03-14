<template>
  <div class="container services-section py-5">
    <h2 class="text-center mb-4">Our Services</h2>
    <div class="row">
      <div class="col-md-4 mb-4" v-for="service in services" :key="service.id">
        <div class="card h-100 shadow">
          <div class="card-body d-flex flex-column justify-content-between">
            <div class="mb-3">
              <i :class="`fas fa-${service.icon} text-primary fs-2`"></i>
              <h5 class="card-title mt-2">{{ service.title }}</h5>
            </div>
            <p class="card-text">{{ service.description }}</p>
            <a :href="service.link" class="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    id: 1,
    icon: "home", // Replace with appropriate icon name
    title: "Deep Cleaning",
    description:
      "Thorough cleaning from top to bottom, including kitchens, bathrooms, and living areas.",
    link: "#",
  },
  {
    id: 2,
    icon: "dolly", // Replace with appropriate icon name
    title: "Move-In/Move-Out Cleaning",
    description:
      "Professional cleaning to ensure a spotless start or finish for your move.",
    link: "#",
  },
  {
    id: 3,
    icon: "calendar-alt", // Replace with appropriate icon name
    title: "Recurring Cleaning",
    description:
      "Maintain a clean and healthy environment with regular cleaning visits.",
    link: "#",
  },
]);
</script>
