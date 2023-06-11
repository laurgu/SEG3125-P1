const marqueeContainer = document.querySelector('.marquee');

marqueeContainer.addEventListener('animationiteration', () => {
  const firstSpan = marqueeContainer.querySelector('span');
  marqueeContainer.appendChild(firstSpan);
});