/*
  On page load I clone the header and create a sticky header that
  renders when you scroll past a certain point in the website.
*/
document.addEventListener('DOMContentLoaded', () => {
  const section = document.querySelector('section');
  const header = document.querySelector('header');
  const clonedHeader = header.cloneNode(true);

  section.insertBefore(clonedHeader, header);

  const stickyHeader = document.querySelector('header');
  stickyHeader.classList.add('sticky');

  window.addEventListener('scroll', () => {
    const scrollFromTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    document.querySelector('body').classList.toggle('scroll', scrollFromTop > 500);
  });

  /*
    Smooth Scrolling Functionality
  */
  function smoothScrollEffect(selector) {
    const links = document.querySelectorAll(selector);

    links.forEach((anchor) => {
      anchor.addEventListener('click', function scroll(el) {
        el.preventDefault();
        const hashValue = $(this.hash);

        if (hashValue.length) {
          $('html, body')
            .stop()
            .animate(
              {
                scrollTop: hashValue.offset().top - 80,
              },
              1000,
            );
        }
      });
    });
  }
  /*
    Enable smooth scrolling for navbar & both the buttons in the hero banner
  */
  smoothScrollEffect('.menu li a');
  smoothScrollEffect('.wrapper li a');

  /*
    Parallax Scene in hero banner
  */
  const scene = document.getElementById('scene');
  const parallax = new Parallax(scene);

  /*
    Masonry Grid for image showcase
  */
  const grid = document.querySelector('.grid');
  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: 120,
    fitWidth: true,
    gutter: 2,
  });

  /*
    Slider js for library showcase
  */
  $('.slider').slick({
    lazyLoad: 'ondemand',
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    centerMode: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: false,
    pauseOnHover: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Mext</button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  /*
    Responsive Navbar Menu
  */
  const body = document.querySelector('body');

  function addOverlay(element) {
    element.addEventListener('click', () => {
      body.classList.add('menu-active');
    });
  }

  function removeOverlay(element) {
    element.addEventListener('click', () => {
      body.classList.remove('menu-active');
    });
  }

  const menuTrigger = document.querySelectorAll('.js-menu-trigger');
  const mainOverlay = document.querySelectorAll('.js-main-overlay');
  const anchorsClicked = document.querySelectorAll('.menu li a');

  menuTrigger.forEach((el) => {
    addOverlay(el);
  });

  mainOverlay.forEach((el) => {
    removeOverlay(el);
  });

  anchorsClicked.forEach((el) => {
    removeOverlay(el);
  });
});
