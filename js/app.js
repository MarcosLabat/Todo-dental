const iconoMenu = document.querySelector('#icono-menu'),
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    // document.body.classList.toggle('opacity')
});

 const btnMenu = document.querySelector('#flecha-abajo'),
    Tratamientos = document.querySelector('#sub-lista');

   btnMenu.addEventListener('click', (e) => {
       Tratamientos.classList.toggle('sub')
  });
