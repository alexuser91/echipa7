    // JS FOR REVIEWS

    window.addEventListener('DOMContentLoaded', () => {
      const slides = document.querySelectorAll('.customer-wrapper__header');
      const prev = document.querySelector('.prev');
      const next = document.querySelector('.next');
    
      let slideIndex = 1;
    
      showSlides();
    
      function showSlides() {
        if (slideIndex > slides.length) {
          slideIndex = 1;
        }
    
        if (slideIndex < 1) {
          slideIndex = slides.length;
        }
    
        slides.forEach(item => {
          item.style.display = 'none';
        });
    
        slides[slideIndex - 1].style.display = 'block';
      }
    
      function plusSlides(n) {
        showSlides((slideIndex += n));
      }
    
      prev.addEventListener('click', () => {
        plusSlides(-1);
      });
    
      next.addEventListener('click', () => {
        plusSlides(1);
      });
    });
    
  
  