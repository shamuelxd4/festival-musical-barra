/* document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});


window.onscroll = function (e) {
    let scroll = window.scrollY;

    const headerScroll = document.querySelector('#navegacion-principal');
    if(scroll > 300) {
        headerScroll.classList.add('bg-success');
    } else {
        headerScroll.classList.remove('bg-success');
    }
};

$('#fecha').countdown('2018/08/23', function(event) {
    $(this).html(event.strftime('<p><span> %D </span> dias <span> %H </span> horas <span> %M </span> minutos  <span> %S </span> Segundos </p>'));
  });
*/


// Cambia de color el fondo al hacer scroll deslizando  ABAJO
window.onscroll = (e) => {
    const scroll = window.scrollY;
    
    const header = document.querySelector('#navegacion-principal');
    if (scroll > 300 ) {
        header.classList.add('bg-success');
    }else{
        header.classList.add('bg-success');
    }

}


// Jquery Countdown
$(document).ready(function() {
   $('#fecha').countdown('2021/06/18', function(evento) {
      $(this).html(evento.strftime('<span> %D </span> Dias <span> %H </span> Horas <span> %M </span> Minutos <span> %S </span> Segundos')); 
   });
});