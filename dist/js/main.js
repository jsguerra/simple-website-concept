/*!
 * guerra-family v0.0.1
 * A description for your project.
 * (c) 2019 Jose Guerra
 * MIT License
 * https://github.com/jsguerra/simple-website-concept.git
 */

var burger = document.querySelector('.burger'),
    body = document.querySelector('body');
  
burger.addEventListener('click', (function() {
  body.classList.toggle('is-active');
}));