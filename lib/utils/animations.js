import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Fonction générique pour animer un élément
const animateElement = (element, animation, options) => {
  const defaults = {
    duration: 1,   // Durée de l'animation en secondes
    delay: 0,      // Délai avant le début de l'animation
    repeat: 0,     // Nombre de répétitions, -1 pour infini
    scrollTrigger: null // Configuration de ScrollTrigger, null pour aucune activation par défilement
  };

  const settings = { ...defaults, ...options };

  const animations = {
    fadeIn: { opacity: 1, from: { opacity: 0 } },
    fadeOut: { opacity: 0, from: { opacity: 1 } },
    slideUp: { y: 0, from: { y: 100 } },
    slideDown: { y: 0, from: { y: -100 } }
  };

  if (settings.scrollTrigger) {
    settings.scrollTrigger = { trigger: element, ...settings.scrollTrigger };
  }

  gsap.fromTo(element, animations[animation].from, {
    ...animations[animation],
    delay: settings.delay,
    duration: settings.duration,
    repeat: settings.repeat,
    scrollTrigger: settings.scrollTrigger
  });
};

export default animateElement;
