var burger = document.querySelector('.burger'),
    body = document.querySelector('body');
  
burger.addEventListener('click', function() {
  body.classList.toggle('is-active');
});