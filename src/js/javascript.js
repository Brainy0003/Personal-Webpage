document.addEventListener("DOMContentLoaded", function() {
  var section = document.querySelector("section");
  var header = document.querySelector("header");
  var clonedHeader = header.cloneNode(true);

  section.insertBefore(clonedHeader, header);

  var stickyHeader = document.querySelector("header");
  stickyHeader.classList.add("sticky");

  window.addEventListener("scroll", function() {
    var scrollFromTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    document.querySelector("body").classList.toggle("scroll", (scrollFromTop > 350));
  });
  
});

