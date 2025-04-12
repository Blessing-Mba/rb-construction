<template>
    <section id="about" class="about animate-section">
      <div class="container">
        <h2>Building Landmarks</h2>
        <div class="about-content">
          <div class="about-text">
            <p>With over 6 years of experience, Rods & Bars has been at the forefront of delivering exceptional construction services. Our commitment to quality, safety, and customer satisfaction sets us apart in the industry.</p>
          </div>
          
         
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutSection'
  }
  </script>

  <style scoped>
  .about-text {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
  }

  .about-text p {
    font-size: 20px;
    line-height: 1.6;
    color: #333;
    font-family: 'General Sans', sans-serif;
  }

  .about h2 {
    text-align: center;
    margin-bottom: 30px;
    text-decoration: none;
    border-bottom: none;
    position: relative;
  }
  
  /* This will override any other styles that might be adding the red underline */
  .about h2::after {
    display: none;
  }
  </style>