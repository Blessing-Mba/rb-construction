<!-- eslint-disable -->
<template>
  <section id="home" class="hero">
    <div class="hero-content left">
      <h1>Expert Engineering and Innovative Solutions</h1>
      <p>We handle simple and complex contructions.
        <br>
         We pride ourselves with top notch aesthetic 
         <br>
        finishing that would stand the test of time</p>
      <a href="#contact" class="cta-button">Get Started</a>
    </div>
    <div class="hero-content right">
      <img src="../assets/hero.jpg" alt="Hero-Img" class="floating-image">
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.floating-image {
  animation: float-horizontal 3s ease-in-out infinite;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-content.left h1 {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.hero-content.left p {
  font-family: 'General Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  color: rgb(33, 37, 41);
  font-size: 18px;
  line-height: 27px;
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
  opacity: 0;
}

.hero-content.left .cta-button {
  animation: fadeInUp 0.8s ease-out 0.6s forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float-horizontal {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(15px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>