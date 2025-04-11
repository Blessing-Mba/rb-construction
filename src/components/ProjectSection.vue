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
          title: 'Modern Office Building',
          description: 'A state-of-the-art office complex with sustainable design features.',
          image: './assets/project1.jpg'
        },
        {
          title: 'Luxury Residential Complex',
          description: 'High-end residential apartments with premium amenities.',
          image: './assets/project2.jpg'
        },
        {
          title: 'Commercial Retail Center',
          description: 'A shopping center with innovative architecture and customer-friendly layout.',
          image: './assets/project3.jpg'
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
