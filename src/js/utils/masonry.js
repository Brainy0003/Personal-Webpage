import Masonry from 'masonry-layout';

/*
  Window.onload is used to initialize masonry only when all
  the images have been loaded. This helps to make sure the
  images load correctly and don't overlap.
*/
export default function masonryFunc() {
  const grid = document.querySelector('.grid');
  const masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: 80,
    fitWidth: true,
    gutter: 2,
  });
}
