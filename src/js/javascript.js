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
    document.querySelector('body').classList.toggle('scroll', scrollFromTop > 350);
  });
});

/*
 Parallax Scene
*/
const scene = document.getElementById('scene');
const parallax = new Parallax(scene);
