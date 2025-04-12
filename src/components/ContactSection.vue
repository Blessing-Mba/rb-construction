<template>
  <section id="contact" class="contact animate-section">
    <div class="container">
      <div class="contact-container">
        <div class="contact-wrapper">
          <h2 class="animate-item">Ready to Start Your Project?</h2>
      
          <a href="mailto:rodsnbars@gmail.com" class="work-with-us-btn animate-item">
            <i class="fas fa-envelope"></i>
            Email Us
          </a>
        </div>
       
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection'
}
</script>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.contact-wrapper {
  max-width: 600px;
  margin: 0 auto;
}

.contact-wrapper h2 {
  margin-bottom: 30px;
  position: relative;
}

/* Remove red underline */
.contact-wrapper h2::after {
  display: none;
}

.work-with-us-btn {
  display: inline-block;
  margin-top: 20px;
}
</style>