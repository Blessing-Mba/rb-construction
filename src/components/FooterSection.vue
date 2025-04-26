<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-info">
          <h4>Rods & Bars Ltd</h4>
          <p>Building excellence since 2019.</p>
          
          <div class="social-icons">
            <a href="https://www.facebook.com/people/Rods-Bars-Ltd/100067205208828/" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://x.com/rodsnbars?s=21" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/rodsnbars?igsh=MW8wbTN6Y2prcDUwZg==" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/chinweotito-obi-contractor/" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="footer-contact">
          <h4>Contact Us</h4>
          <p><i class="fas fa-map-marker-alt"></i> Gwarinpa, Abuja, Nigeria</p>
          <br>
          <p><i class="fas fa-phone"></i> +234 901 458 1204</p>
          <br>
          <p><i class="fas fa-envelope"></i> rodsnbars@gmail.com</p>
        </div>
       
      </div>
      <div class="footer-bottom">
        <p>&copy;  2025 Rods & Bars Ltd. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>
<style scoped>
ul{
  list-style: none;
}
.social-icons{
  margin-top: 1rem;
}

/* Add General Sans font to footer */
.footer {
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

/* Add spacing between social icons */
.social-icons a {
  margin-right: 15px;
  font-size: 18px;
}

/* Remove underline from Quick Links heading */
.footer-links h4::after,
.footer-info h4::after,
.footer-contact h4::after {
  display: none !important;
}

/* Remove underline from footer links */
.footer-links a {
  text-decoration: none;
  color: inherit;
}

.footer-links li {
  margin-bottom: 8px;
}
</style>