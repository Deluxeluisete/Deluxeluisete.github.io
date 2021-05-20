
let correo =document.getElementById('correo')
let contraseña =document.getElementById('contraseña')
let error = document.getElementById('error')
error.style.color='red';

function ValidarFormulario()
{
    let MensajeError =[]
    if (correo.value===null || correo.value==='')
     {
        MensajeError.push('ingresa tu correo ')
       
        let body =document.getElementById("correo")
        body.style.backgroundColor='red'
    }
    else{
        let body =document.getElementById("correo")
        body.style.backgroundColor='green' 
    }
    if (contraseña.value===null || contraseña.value==='')
     {
        MensajeError.push('ingresa tu contraseña ')
        let body =document.getElementById("contraseña")
        body.style.backgroundColor='red'
    }
    else {
        let body =document.getElementById("contraseña")
        body.style.backgroundColor='green'
    }
   error.innerHTML= MensajeError.join(',   ')
   return false;
}