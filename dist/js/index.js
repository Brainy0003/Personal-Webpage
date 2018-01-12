/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  NodeList forEach polyfill for Internet Explorer.
*/
(function () {
  if (typeof NodeList.prototype.forEach === 'function') return false;
  NodeList.prototype.forEach = Array.prototype.forEach;
})();

/*
  On page load this clones the header and creates a sticky header that
  renders when you scroll past a certain point in the website.
*/
document.addEventListener('DOMContentLoaded', function () {
  var section = document.querySelector('section');
  var header = document.querySelector('header');
  var clonedHeader = header.cloneNode(true);

  section.insertBefore(clonedHeader, header);

  var stickyHeader = document.querySelector('header');
  stickyHeader.classList.add('sticky');

  window.addEventListener('scroll', function () {
    var scrollFromTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    document.querySelector('body').classList.toggle('scroll', scrollFromTop > 500);
  });

  /*
    Smooth Scrolling Functionality
  */
  function smoothScrollEffect(selector) {
    var links = document.querySelectorAll(selector);

    links.forEach(function (anchor) {
      anchor.addEventListener('click', function scroll(el) {
        el.preventDefault();
        var hashValue = $(this.hash);

        if (hashValue.length) {
          $('html, body').stop().animate({
            scrollTop: hashValue.offset().top - 80
          }, 1000);
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
  var scene = document.getElementById('scene');
  var parallax = new Parallax(scene);

  /*
    Responsive Navbar Menu
  */
  var body = document.querySelector('body');

  function addOverlay(element) {
    element.addEventListener('click', function () {
      body.classList.add('menu-active');
    });
  }

  function removeOverlay(element) {
    element.addEventListener('click', function () {
      body.classList.remove('menu-active');
    });
  }

  var menuTrigger = document.querySelectorAll('.js-menu-trigger');
  var mainOverlay = document.querySelectorAll('.js-main-overlay');
  var anchorsClicked = document.querySelectorAll('.menu li a');

  menuTrigger.forEach(function (el) {
    addOverlay(el);
  });

  mainOverlay.forEach(function (el) {
    removeOverlay(el);
  });

  anchorsClicked.forEach(function (el) {
    removeOverlay(el);
  });
});

/*
  Window.onload is used to initialize masonry and slick slider only
  when all the images have been loaded. This helps to make sure the
  images load correctly and don't overlap esp. in the masonry grid.
*/
window.onload = function masonryFunc() {
  /*
    Masonry Grid for image showcase
  */
  var grid = document.querySelector('.grid');
  var masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: 80,
    fitWidth: true,
    gutter: 2
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
    pauseOnFocus: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Mext</button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 625,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
};

/*
  Async loading google web fonts
*/
WebFont.load({
  google: {
    families: ['Playfair Display:400', 'Montserrat:400']
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);