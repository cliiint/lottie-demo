import * as lottie from 'lottie-web';
import dogJson from '../assets/dog-contour.json';

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('animation-container');
  lottie.loadAnimation({
    container: container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: dogJson
  });
});
