<template>
  <nav
    class="border navbar navbar-expand-sm bg-light navbar-light fixed-top"
    style="background-color: #2c365e"
  >
    <div class="container">
      <a class="navbar-brand" href="#">Leleya Cleaning</a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="mb-2 navbar-nav ms-auto mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/services">Services</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/gallery">Gallery</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<!--<style scoped>-->
<!--.custom-nav-bg {-->
<!--  background-color: #2C365E;-->
<!--}-->

<!--</style>-->
