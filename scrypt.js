// Script per il menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav').querySelector('ul');

  navToggle.addEventListener('click', function() {
    mainNav.classList.toggle('open');
  });
});

// Eventuale script extra per animazioni leggere
// Puoi aggiungere effetti di fade-in, scroll, ecc. qui