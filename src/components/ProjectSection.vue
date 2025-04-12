<template>
  <section id="projects" class="projects animate-section">
    <div class="container">
      <h2 class="animate-item">Our Projects</h2>
      <div class="carousel-container">
        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div class="carousel-slide" v-for="(project, index) in projects" :key="index">
            <img :src="project.image" :alt="project.title">
            <div class="carousel-caption">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </div>
        <button class="carousel-control carousel-prev" @click="prevSlide">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="carousel-control carousel-next" @click="nextSlide">
          <i class="fas fa-chevron-right"></i>
        </button>
        <div class="carousel-indicators">
          <button 
            v-for="(project, index) in projects" 
            :key="index" 
            class="carousel-indicator" 
            :class="{ active: currentSlide === index }"
            @click="goToSlide(index)">
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectSection',
  data() {
    return {
      currentSlide: 0,
      projects: [
        {
          title: 'Luxury Residential Home',
          description: 'A modern residential building featuring elegant brick facade and cream exterior finishes.',
          image: '../src/assets/residential-project.jpg'
        },
        {
          title: 'Community Water Project',
          description: 'Water borehole drilling project in Kufana, Kaduna, Nigeria providing essential water access to the local community.',
          image: '../src/assets/water-project.jpg'
        },
        
        {
          title: ' Residential Complex',
          description: 'High-end residential apartments with premium amenities.',
          image: '../src/assets/fact.jpg'
        }
      ]
    }
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.projects.length;
    },
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.projects.length) % this.projects.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  },
  mounted() {
    // Auto-rotate slides
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
}
</script>

<style scoped>
.projects h2 {
  position: relative;
}

.projects h2::after {
  display: none !important;
}

.carousel-container {
  max-width: 800px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.carousel-slide {
  background: linear-gradient(to bottom, #f8f9fa, #e9ecef);
  padding: 20px;
}

.carousel-slide img {
  width: 100%;
  height: 400px;
  object-fit: contain;
  border-radius: 8px;
}

.carousel-caption {
  background-color: bisque;
  padding: 15px;
  border-radius: 8px;
  margin-top: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
