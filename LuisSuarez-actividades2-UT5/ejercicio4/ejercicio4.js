
let correo = document.getElementById('correo')
let contraseña = document.getElementById('contraseña')
let error = document.getElementById('error')
let Usuario = document.getElementById('Usuario')
let contraseña2 = document.getElementById('contraseña2')
let Nombre = document.getElementById('Nombre')
let Apellidos = document.getElementById('Apellidos')
let Edad = document.getElementById('Edad')
let Telefono = document.getElementById('Telefono')

error.style.color = 'red';

function ValidarFormulario() {

    var usuarioValor =Usuario.value;
    var usuarioUltDig =usuarioValor.substr(usuarioValor.length-1,1);

    var telefonoValor =Telefono.value;

    var contraseñaValor =contraseña.value;

    var contraseña2Valor =contraseña2.value;

    var contraseñaUltDig =contraseñaValor.substr(contraseñaValor.length-1,1);
    var contraseña2UltDig =contraseña2Valor.substr(contraseña2Valor.length-1,1);

    let MensajeError = []
    if (Usuario.value === null || Usuario.value === '') {
        MensajeError.push('Usuario erroneo')

        let body = document.getElementById("Usuario")
        body.style.backgroundColor = 'red'
    }
    else if ( usuarioValor.substr(0,1) != usuarioValor.substr(0,1).toUpperCase()){
        let body = document.getElementById("Usuario")
        body.style.backgroundColor = 'red'
    }
    else if (isNaN(usuarioUltDig) ) {
        let body = document.getElementById("Usuario")
        body.style.backgroundColor = 'red'
    }
    else {
        let body = document.getElementById("Usuario")
        body.style.backgroundColor = 'green'
    }

    if (correo.value === null || correo.value === '') {
        MensajeError.push('Correo erroneo')

        let body = document.getElementById("correo")
        body.style.backgroundColor = 'red'
    }
    else {
        let body = document.getElementById("correo")
        body.style.backgroundColor = 'green'
    }
    
    if (contraseña.value === null || contraseña.value === '') {
        MensajeError.push('contraseña erronea')
        let body = document.getElementById("contraseña")
        body.style.backgroundColor = 'red'
    } 
    else if ( contraseñaUltDig != contraseñaUltDig.toUpperCase()){
        let body = document.getElementById("contraseña")
        body.style.backgroundColor = 'red'
    }
    else if(contraseñaValor.length<8){
        let body = document.getElementById("contraseña")
        body.style.backgroundColor = 'red'
    }
    else {
        let body = document.getElementById("contraseña")
        body.style.backgroundColor = 'green'
    }

    if (contraseña2.value === null || contraseña2.value === '') {
        MensajeError.push('verificacion de contraseña erronea')

        let body = document.getElementById("contraseña2")
        body.style.backgroundColor = 'red'
    }
    else if ( contraseña2UltDig != contraseña2UltDig.toUpperCase()){
        let body = document.getElementById("contraseña2")
        body.style.backgroundColor = 'red'
    }
    else if(contraseña2Valor.length<8){
        let body = document.getElementById("contraseña2")
        body.style.backgroundColor = 'red'
    }
    else {
        let body = document.getElementById("contraseña2")
        body.style.backgroundColor = 'green'
    }

    if (Nombre.value === null || Nombre.value === '') {
        MensajeError.push('verificacion de contraseña erronea')

        let body = document.getElementById("Nombre")
        body.style.backgroundColor = 'red'
    }
    else {
        let body = document.getElementById("Nombre")
        body.style.backgroundColor = 'green'
    }
    if (Apellidos.value === null || Apellidos.value === '') {
        MensajeError.push('verificacion de contraseña erronea')

        let body = document.getElementById("Apellidos")
        body.style.backgroundColor = 'red'
    }
    else {
        let body = document.getElementById("Apellidos")
        body.style.backgroundColor = 'green'
    }
    if (Edad.value === null || Edad.value === '' || Edad.value != Number) {
        MensajeError.push('verificacion de contraseña erronea')

        let body = document.getElementById("Edad")
        body.style.backgroundColor = 'red'
    }
    
    else {
        let body = document.getElementById("Edad")
        body.style.backgroundColor = 'green'
    }
    if (Telefono.value === null || Telefono.value === '') {
        MensajeError.push('verificacion de contraseña erronea')

        let body = document.getElementById("Telefono")
        body.style.backgroundColor = 'red'
    }
    else if ( !( telefonoValor.substr(0,1) =='7' || telefonoValor.substr(0,1) =='6' || telefonoValor.substr(0,1) =='7')){
        let body = document.getElementById("Telefono")
        body.style.backgroundColor = 'red'
    }
    else if (isNaN(telefonoValor) ) {
            let body = document.getElementById("Telefono")
            body.style.backgroundColor = 'red'
     }
    else {
        let body = document.getElementById("Telefono")
        body.style.backgroundColor = 'green'
    }
    error.innerHTML = MensajeError.join(',   ')
    return false;
}