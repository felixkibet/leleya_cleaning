<template>
  <div class="container contact-section py-5">
    <h2 class="text-center mb-4">Contact Us</h2>
    <p>
      Let us know how we can help you achieve a clean and healthy environment.
    </p>
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" id="name" required />
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email Address</label>
        <input type="email" class="form-control" id="email" required />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea class="form-control" id="message" rows="5" required></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send Message</button>
    </form>
  </div>
</template>

<script setup>
const handleSubmit = (event) => {
  // Implement form submission logic here
  console.log("Form submitted:", event.target.elements);
};
</script>
