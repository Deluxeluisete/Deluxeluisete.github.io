var numeroFila = 0;

function loadDocA(fichero, tipo) {

    let PeticionServidor = new XMLHttpRequest();
    PeticionServidor.open("GET", fichero, true);
    PeticionServidor.send();
    PeticionServidor.addEventListener('load', (event) => {
        if (PeticionServidor.status === 200) {
            if (tipo == "txt") {
                gestionarFicheroXML(PeticionServidor.responseText)
            }

        }
    })

}

function gestionarFicheroXML(ficTxt) {

    var lineasTxt = ficTxt.split('\r\n');
    let capaVacia = document.querySelector('#ficheroXML')
    for (var i = 0; i <= lineasTxt.length - 1; i++) {
        var EmisorReceptor = lineasTxt[i].substring(0, 1);

        let linea = document.getElementById("linea")
        if (linea.value==undefined){linea.value='0'}

        let nlinea=0;
        if (!isNaN(linea.value)){
          nlinea=  parseInt(linea.value);
        }


        

        if (i > nlinea) {
            if (EmisorReceptor == 'E')

                capaVacia.innerHTML = capaVacia.innerHTML + "<p class='emisor'>" + lineasTxt[i] + "</p>"

            else {
                capaVacia.innerHTML = capaVacia.innerHTML + "<p class='receptor'>" + lineasTxt[i] + "</p>"
            }
            nlinea=i;
        }
        
        linea.value=nlinea.toString();
    }

}



function CargarFichero() {
    loadDocA("ej2.txt", "txt")

}

document.addEventListener('readystatechange', event => {

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {
        CargarFichero();
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {

    }
});

setInterval(CargarFichero, 10000);