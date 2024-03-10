document.addEventListener('mousemove', function(e) {
  const parallaxImage = document.querySelector('.parallax-image');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const imageCenterX = parallaxImage.offsetLeft + parallaxImage.offsetWidth / 2;
  const imageCenterY = parallaxImage.offsetTop + parallaxImage.offsetHeight / 2;
  const moveX = (mouseX - imageCenterX) / windowWidth * 20;
  const moveY = (mouseY - imageCenterY) / windowHeight * 20;
  parallaxImage.style.transform = `translate(${moveX}px, ${moveY}px) scale(2)`;
});