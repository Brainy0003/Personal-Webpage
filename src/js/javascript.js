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
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Mext</button>',
  });
});
