
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        rtl: true, // Enable RTL for Arabic content
        on: {
            slideChangeTransitionStart: function() {
                animateSlide();
            }
        }
    }); 

    function animateSlide() {
        anime({
            targets: '.swiper-slide-active .hero-title',
            opacity: [0, 1],
            translateY: [-20, 0],
            easing: 'easeOutExpo',
            duration: 1000
        });

        anime({
            targets: '.swiper-slide-active .hero-subtitle',
            opacity: [0, 1],
            translateY: [-20, 0],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: 200
        });

        anime({
            targets: '.swiper-slide-active .hero-button',
            opacity: [0, 1],
            translateY: [-20, 0],
            easing: 'easeOutExpo',
            duration: 1400,
            delay: 400
        });
    }

    // Initial animation on page load
    animateSlide();
});


document.addEventListener('scroll', function() {
    const services = document.querySelectorAll('.service');
    let windowHeight = window.innerHeight;

    services.forEach((service, index) => {
        let rect = service.getBoundingClientRect();
        if (rect.top < windowHeight && !service.classList.contains('animated')) {
            anime({
                targets: service,
                translateY: [50, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: index * 200 // delay each column animation
            });
            service.classList.add('animated');
        }
    });
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: '2',
	// coverflowEffect: {
	//   rotate: 50,
	//   stretch: 0,
	//   depth: 100,
	//   modifier: 1,
	//   slideShadows : true,
	// },
	
	coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 50,
        modifier: 6,
        slideShadows : false,
	  },
	  
  });

var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 4000, 
      disableOnInteraction: false, 
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  

  /*********************************************************** */
  document.addEventListener('DOMContentLoaded', () => {
    anime({
      targets: '.overview-text p',
      translateY: [100, 0],
      opacity: [0, 1],
      delay: anime.stagger(100),
      duration: 1000,
      easing: 'easeOutQuad',
    });
  });

  /********************************************************** */
  document.addEventListener('DOMContentLoaded', () => {
    anime({
        targets: '.why-alaa-aljasmi-section .row',
        translateY: [100, 0],
        opacity: [0, 1],
        delay: anime.stagger(200),
        duration: 800,
        easing: 'easeOutExpo'
    });
});

/**************************************************** */
let team = document.getElementById('team');
if (team) {

    const swipers = new Swiper('.swiper-containers', {
        slidesPerView: 4,  // Default for large screens
        spaceBetween: 20,
        loop: true, // Enables infinite loop
        autoplay: {
            delay: 3000, // Delay between transitions in milliseconds (3 seconds)
            disableOnInteraction: false, // Continues autoplay after interaction
        },
    
        breakpoints: {
            1200: {
                slidesPerView: 4, // Large screens
            },
            768: {
                slidesPerView: 3, // Medium screens
            },
            400: {
                slidesPerView: 1, // Small screens
            },
            250: {
                slidesPerView: 1, // Small screens
            },
        },
    });
}

var swiper = new Swiper(".swiper-article-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        400: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    }
});