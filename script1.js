document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const slider = document.querySelector('.slider');
  const prevCursor = document.querySelector('.cursor.prev');
  const nextCursor = document.querySelector('.cursor.next');
  let currentIndex = 0;
  const slideWidth = slides[0].offsetWidth;
  let autoSlideInterval;

  function updateSlider() {
    slider.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  }

  prevCursor.addEventListener('click', function() {
    showPrevSlide();
    resetAutoSlide();
  });

  nextCursor.addEventListener('click', function() {
    showNextSlide();
    resetAutoSlide();
  });

  function startAutoSlide() {
    autoSlideInterval = setInterval(showNextSlide, 3000); // Cambia cada 3 segundos
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Inicializa el slider
  startAutoSlide();

  // Maneja el cambio de tamaño de la ventana para ajustar el ancho del slide
  window.addEventListener('resize', function() {
    const newSlideWidth = slides[0].offsetWidth;
    slider.style.transform = `translateX(-${newSlideWidth * currentIndex}px)`;
  });
});

 
/*carrusel*/

  $(document).ready(function(){
    $('.slick-carousel').slick({
      dots: true, 
      arrows: true, 
      infinite: true, 
      speed: 300, 
      slidesToShow: 4, 
      slidesToScroll: 4, 
      responsive: [
        {
          breakpoint: 3000, 
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 868, 
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

/*separador*/
jQuery(document).ready(function($){
  setTimeout(function(){
      $('.trans--grow').addClass('grow');
  }, 275);
});


/*botones contenedor*/
document.querySelectorAll('.slide-btn').forEach(button => {
  button.addEventListener('click', function() {
    const pageUrl = this.closest('a').getAttribute('href');
  });
});

if ( ! Modernizr.adownload ) { var $link = $('a'); $link.each(function() { var $download = $(this).attr('download'); if (typeof $download !== typeof undefined && $download !== false) { var $el = $('<div>').addClass('download-instruction').text('Right-click and select "Download Linked File"'); $el.insertAfter($(this)); } }); }
  
/*carrusel maquinas*/

document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.carousel-slide');
  let currentIndex = 0;

  function updateCarousel() {
      const slideWidth = slides[0].offsetWidth + 10; // Incluye el espacio entre slides
      carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      updateCarousel();
  }

  function prevSlide() {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      updateCarousel();
  }

  // Cambia la diapositiva automáticamente cada 5 segundos
  setInterval(nextSlide, 5000);

  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
});


document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButton = document.getElementById('scrollToTop');
  
  // Mostrar el botón al hacer scroll
  window.addEventListener('scroll', () => {
      if (window.scrollY > 200) { // Muestra el botón después de 200px de desplazamiento
          document.body.classList.add('scrolled');
      } else {
          document.body.classList.remove('scrolled');
      }
  });
  
  // Desplazar hacia arriba al hacer clic en el botón
  scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth' // Desplazamiento suave
      });
  });
});

