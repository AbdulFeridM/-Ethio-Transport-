   // Language Toggle Functionality
   const languageToggle = document.getElementById('languageToggle');
   const amElements = document.querySelectorAll('.am');
   const enElements = document.querySelectorAll('.en');
   
   languageToggle.addEventListener('click', () => {
       amElements.forEach(el => {
           el.style.display = el.style.display === 'none' ? 'block' : 'none';
       });
       
       enElements.forEach(el => {
           el.style.display = el.style.display === 'none' ? 'block' : 'none';
       });
       
       // Update button text
       const amSpans = document.querySelectorAll('#languageToggle .am');
       const enSpans = document.querySelectorAll('#languageToggle .en');
       
       amSpans.forEach(span => {
           span.style.display = span.style.display === 'none' ? 'inline' : 'none';
       });
       
       enSpans.forEach(span => {
           span.style.display = span.style.display === 'none' ? 'inline' : 'none';
       });
   });

   // Dark Mode Toggle
   const themeToggle = document.getElementById('themeToggle');
   
   themeToggle.addEventListener('click', () => {
       document.body.classList.toggle('dark-mode');
       
       // Update icon and text
       const icon = themeToggle.querySelector('i');
       const amSpans = document.querySelectorAll('#themeToggle .am');
       const enSpans = document.querySelectorAll('#themeToggle .en');
       
       if (document.body.classList.contains('dark-mode')) {
           icon.classList.remove('fa-moon');
           icon.classList.add('fa-sun');
           
           enSpans.forEach(span => {
               if (span.textContent === 'Dark') {
                   span.textContent = 'Light';
               }
           });
           
           amSpans.forEach(span => {
               if (span.textContent === 'ጨለማ') {
                   span.textContent = 'ብርሃን';
               }
           });
       } else {
           icon.classList.remove('fa-sun');
           icon.classList.add('fa-moon');
           
           enSpans.forEach(span => {
               if (span.textContent === 'Light') {
                   span.textContent = 'Dark';
               }
           });
           
           amSpans.forEach(span => {
               if (span.textContent === 'ብርሃን') {
                   span.textContent = 'ጨለማ';
               }
           });
       }
   });

   // Mobile Menu Toggle
   const menuToggle = document.querySelector('.menu-toggle');
   const navbar = document.querySelector('.navbar');
   
   menuToggle.addEventListener('click', () => {
       navbar.classList.toggle('active');
       menuToggle.querySelector('i').classList.toggle('fa-times');
       menuToggle.querySelector('i').classList.toggle('fa-bars');
   });

   // Close mobile menu when clicking on a link
   document.querySelectorAll('.navbar a').forEach(link => {
       link.addEventListener('click', () => {
           navbar.classList.remove('active');
           menuToggle.querySelector('i').classList.remove('fa-times');
           menuToggle.querySelector('i').classList.add('fa-bars');
       });
   });

   // Smooth scrolling for anchor links
   document.querySelectorAll('a[href^="#"]').forEach(anchor => {
       anchor.addEventListener('click', function(e) {
           e.preventDefault();
           
           const targetId = this.getAttribute('href');
           const targetElement = document.querySelector(targetId);
           
           if (targetElement) {
               window.scrollTo({
                   top: targetElement.offsetTop - 80,
                   behavior: 'smooth'
               });
           }
       });
   });

   // Scroll reveal animation
   window.addEventListener('scroll', reveal);
   
   function reveal() {
       const reveals = document.querySelectorAll('.reveal');
       
       for (let i = 0; i < reveals.length; i++) {
           const windowHeight = window.innerHeight;
           const revealTop = reveals[i].getBoundingClientRect().top;
           const revealPoint = 150;
           
           if (revealTop < windowHeight - revealPoint) {
               reveals[i].classList.add('active');
           } else {
               reveals[i].classList.remove('active');
           }
       }
   }

   // Initialize reveal on page load
   reveal();

   // Form submission
   const contactForm = document.getElementById('contactForm');
   
   contactForm.addEventListener('submit', function(e) {
       e.preventDefault();
       
       const name = document.getElementById('name').value;
       const email = document.getElementById('email').value;
       const subject = document.getElementById('subject').value;
       const message = document.getElementById('message').value;
       
       // Here you would typically send the form data to a server
       // For this example, we'll just show an alert
       if (document.querySelector('.en').style.display !== 'none') {
           alert(`Thank you, ${name}! Your message has been sent. We'll contact you soon.`);
       } else {
           alert(`አመሰግናለሁ፣ ${name}! መልእክትዎ ተልኳል። በቅርብ ጊዜ እንገናኝዎታለን።`);
       }
       
       contactForm.reset();
   });