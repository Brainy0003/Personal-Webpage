import $ from 'jquery';
import slick from 'slick-carousel';

/* Slider js for library showcase */
export default $('.slider').slick({
  lazyLoad: 'ondemand',
  autoplay: true,
  autoplaySpeed: 1500,
  dots: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  adaptiveHeight: false,
  pauseOnHover: false,
  pauseOnFocus: false,
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
