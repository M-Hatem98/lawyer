// import image from '../img/2024-07-08_12-13.png';
//
// // let myFunc = () => {
// //   let x = 55
// //   let y = 45
// //
// //   console.log(x + y)
// //   console.log('Hello from app.js');
// //
// //   return image;
// // }
//
//

// document.querySelector('body').innerHTML = `<img src="${image}}">`;


// console.log(process.env.NODE_ENV);


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
