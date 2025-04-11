<template>
  <nav class="navbar">
    <div class="logo">
      <img src='../assets/Rods-logo.png'
    </div>
    <div class="nav-links" :class="{ active: menuActive }">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </div>
    <button class="menu-toggle" @click="toggleMenu">
      <i class="fas fa-bars"></i>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      menuActive: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  },
  mounted() {
    // Add scroll event listener to change navbar style on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
      } else {
        document.querySelector('.navbar').classList.remove('scrolled');
      }
    });
  }
}
</script>