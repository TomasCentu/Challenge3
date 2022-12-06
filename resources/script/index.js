// para dark-mode 

const check = document.getElementById('mode');

check.addEventListener('change', () => {
    document.body.classList.toggle('black');
});

// para validacion de formularios

const mensajeDeError = {
    nombre: {
        valueMissing: "este campo no puede estar vacio"
    },
    email: {
        valueMissing: "este campo no puede estar vacio",
        typeMismatch: "el correo no es valido"
    },
    asunto: {
        valueMissing: "este campo no puede estar vacio",
        patterMismatch: "la contraseña no es valida"
    }
}

const inputs = document.querySelectorAll("input");

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

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        validar(input.target);
    })
})