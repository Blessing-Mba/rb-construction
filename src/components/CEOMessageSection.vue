<template>
  <section id="ceo-message" class="ceo-message animate-section">
    <div class="container">
      <h2 class="animate-item">A Message From Our CEO</h2>
      <div class="ceo-container">
        <div class="ceo-content">
          <div class="ceo-quote animate-item">
            <div class="quote-icon">
              <i class="fas fa-quote-left"></i>
            </div>
            <p>
              At Rods & Bars, we believe in building more than just structures – we're building lasting relationships and communities. Our team spirit, dream-delivery synchronization
               and prompt conveyance make us stand out in the frontlines;
            </p>
            <br>
            <p>Truly <b>giving strength to your will !</b></p>
            <div class="ceo-signature">
              <h4>Obi C.E</h4>
              <p>Chief Executive Officer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CEOMessageSection'
}
</script>

<style scoped>
.ceo-message h2 {
  position: relative;
}

.ceo-message h2::after {
  display: none !important;
}
</style>