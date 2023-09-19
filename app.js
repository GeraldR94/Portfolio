let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
            });
        }
    })
}

window.addEventListener('scroll', () => {
    estaEnLaSeccion(); // Verifica si estamos en la sección en cada evento de scroll
});

function contadorUP() {
    let valueDisplays = document.querySelectorAll('.services-number');
    let interval = 1000;
    
    valueDisplays.forEach((valueDisplay)=> {
        let starValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute('data-val'));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            starValue += 1;
            valueDisplay.textContent = starValue;
            if(starValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
    
}
// Función para verificar si se ha llegado a la sección
function estaEnLaSeccion() {
    const seccion = document.querySelector('.services');
    const rect = seccion.getBoundingClientRect(); // Obtiene las coordenadas de la sección

    // Verifica si la parte superior de la sección está visible en la ventana
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        contadorUP();
        // Aquí puedes ejecutar la función que desees cuando llegues a la sección
    }
}