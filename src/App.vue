<template>
  <div class="app">
    <header>
      <NavBar />
    </header>
    
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ProjectSection />
      <CEOMessageSection />
      <ContactSection />
    </main>
    
    <FooterSection />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServiceSection from './components/ServiceSection.vue'
import ProjectSection from './components/ProjectSection.vue'
import CEOMessageSection from './components/CEOMessageSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSection,
    AboutSection,
    ServiceSection,
    ProjectSection,
    CEOMessageSection,
    ContactSection,
    FooterSection
  },
  mounted() {
    console.log('App mounted');
    
    // Add animation for sections when they come into view
    const observeElements = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      }, { threshold: 0.1 });
      
      document.querySelectorAll('.animate-section').forEach(section => {
        observer.observe(section);
      });
      
      document.querySelectorAll('.animate-item').forEach(item => {
        observer.observe(item);
      });
    };
    
    // Call the function after a short delay to ensure DOM is fully loaded
    setTimeout(observeElements, 100);
  }
}
</script>