// *** para dark-mode ***
const check = document.getElementById('mode');

// solo agrega el estilo a la etiqueta body para
// que se apliquen los estilos del 'modo-oscuro'
check.addEventListener('change', () => {
    document.body.classList.toggle('black');
});

// *** para validacion de formularios ***

const inputs = document.querySelectorAll("input");

// funcion para validar el contenido de los inputs
// si el contenido no corresponde con su formato cambia el color a error
// y hace visible el mensaje de error de la etiqueta span
function validar(input) {

    let span = input.parentElement.querySelector(".input-message-error");

    if (input.checkValidity()) {
        input.classList.remove("error");  
        span.style.visibility = "hidden";     
    } else {
        input.classList.add("error");  
        span.style.visibility = "visible";    
    }
}

// revisa cada input cuando se selecciona y se sale
// y llama la funcion para verificar que su contenido sea correcto o no
// poniendo los estilos de error cuando sea incorrecto el contenido
inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    })
})

// *** para el scroll de la pagina ***

// al hacer click en mi nombre del nav
// va hacia arriba del todo de la pagina, al inicio
const nombre = document.querySelector('.name');

nombre.addEventListener('click', () => {
    window.scrollTo(0, 0);
})
const nav = document.querySelectorAll('a.nav_item_a');

// se fija que ningun link del nav tenga el borde activado
// y solo activa al que clickeemos 
const marcar = (link) => {
    nav.forEach((item) => {
        item.style.borderBottom = 'none';
    });

    link.style.borderBottom = '3px solid #037f8c';
};

// agarra el tamaño del nav cada vez que se hace click en un link del mismo
// y ajusta el scroll para que vaya de forma correcta a la seccion
nav.forEach(link => {
    link.addEventListener('click', (link) => {
        let navHeigth = document.querySelector('.header_conteiner').clientHeight;
        const tagStyle = document.querySelector("style.nav");
        let textStyle = `*{scroll-margin-block-start: ${navHeigth + 'px'}; scroll-behavior: smooth;}`;
        
        if (tagStyle.innerHTML = '') {
            tagStyle.appendChild(textStyle);
        } else {
            tagStyle.innerHTML = textStyle;
        }

        marcar(link.target);
    });
});


