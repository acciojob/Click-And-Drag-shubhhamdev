// Your code here.
const items = document.querySelector('.items');
let isDragging = false;
let startPosX = 0;
let scrollLeft = 0;

items.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosX = e.pageX - items.offsetLeft;
  scrollLeft = items.scrollLeft;
});

items.addEventListener('mouseleave', () => {
  isDragging = false;
});

items.addEventListener('mouseup', () => {
  isDragging = false;
});

items.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - items.offsetLeft;
  const walk = (x - startPosX) * 3; // Adjust the sliding speed
  items.scrollLeft = scrollLeft - walk;
});
