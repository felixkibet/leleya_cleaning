<template>
  <footer class="footer py-3 bg-dark text-light">
    <div class="container">
      <div class="row">
        <div class="col-md-6 mb-3">
          <h2>Leleya Cleaning</h2>
          <p>
            We are a team of dedicated and professional cleaners committed to
            providing exceptional cleaning services to both residential and
            commercial clients.
          </p>
        </div>
        <div class="col-md-6 d-flex justify-content-end mb-3">
          <a href="#" class="text-light mx-2 fs-4">
            <i class="fab fa-facebook"></i>
          </a>
          <a href="#" class="text-light mx-2 fs-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-light mx-2 fs-4">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col text-center">
          &copy; {{ new Date().getFullYear() }} Leleya Cleaning. All Rights
          Reserved.
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
