



function loadDoc(fichero, tipo) {

    //Declaramos objeto tipo XMLHttpRequest
    let PeticionServidor = new XMLHttpRequest();
    //hacemos el GET para indicar que vamos a recibir datos
    PeticionServidor.open("get", fichero, true);
    //Ejecutamos la llamada
   
 
   
    PeticionServidor.send(null);

   //Creamos un evento para indicar que cuando la llamada termine y devuelva resultado ejecutemos el código de dentro 
    PeticionServidor.addEventListener('load', (event) => {
        if (PeticionServidor.status === 200) {
            if (tipo == "txt") {
                leerFicheroTxt(PeticionServidor.responseText)
            }else{
                //leerFicheroXmlAutomatico(PeticionServidor.responseXML.documentElement)
                leerFicheroXml(PeticionServidor.responseXML.documentElement);
            }

        }
    })
}


    function leerFicheroXml(xmlDoc) {
        var rowData = xmlDoc.getElementsByTagName("libreria");

        var tabla1 = document.getElementById("tablamanual1");
        var tabla2 = document.getElementById("tablamanual2");
        var tabla3 = document.getElementById("tablamanual3");
        
        construirtablaXml(rowData[0].childNodes,tabla1);
        construirtablaXml(rowData[1].childNodes,tabla2);
        construirtablaXml(rowData[2].childNodes,tabla3);
    }

    


    function construirtablaXml(xmlNodes,tablamanual) {

        var tabla='<tbody>';
        var fila='';
       
        for (i=0; i<xmlNodes.length; i++) {
          
            if (xmlNodes[i].childNodes.length>0){

                fila= fila + '<tr>';
                //dentro de cada fila recorremos sus campos y valores
                for (j=0; j<xmlNodes[i].childNodes.length; j++) {
                            
                    //Dentro de cada elemento xml selecciona su primer elemento aunque al final solo existe uno 
                    if (xmlNodes[i].childNodes[j].firstChild) {
                        if (xmlNodes[i].childNodes[j].firstChild.nodeValue!=""){
                            fila=fila +'<td>' + xmlNodes[i].childNodes[j].firstChild.nodeValue +'</td>';   
                        }                              
                    }
                
                }
                fila= fila + '</tr>'
            }
           
           }
           var tabla=tabla + fila + '</tbody>';
          
          //tablamanual.innerHTML = tablamanual.innerHTML + tabla;
          tablamanual.insertAdjacentHTML('afterbegin', tabla);
    }

    function leerFicheroXmlAutomatico(xmlDoc) {
        
        //removeWhitespace(xmlDoc);
        var objGrupoFilas1 = document.getElementById("grupofilas1");
        var objGrupoFilas2 = document.getElementById("grupofilas2");
      
        var rowData = xmlDoc.getElementsByTagName("libreria");

        agregarFilasXmlTabla(rowData[0].childNodes,objGrupoFilas1,'Tabla 1');
        agregarFilasXmlTabla(rowData[1].childNodes,objGrupoFilas2,'Tabla 2');
       

    }    

    function agregarFilasXmlTabla(xmlNodes,objGrupoFilas,nombreTabla) {

        //Obtenemos el elemento primario en el DOM del objeto objGrupoFilas (objeto tipo Tbody eb el html)
        var theTable = objGrupoFilas.parentNode;
        //Declaramos variables
        var newRow, newCell, i;
        //Recorremos cada una de las filas del objeto Xml recibido (xmlNodes)
        for (i=0; i<xmlNodes.length; i++) {
            //Los objetos de tipo Tbody tienen un metodo insertRow, que agrega una fila de tipo tabla
            newRow = objGrupoFilas.insertRow(i);
            //Aqui solo mira si i es para o impar para usar luego una clase u otra en la fila 
            //como vemos la fila creada tiene una propiedad classname 
            newRow.className = (i%2) ? "OddRow" : "EvenRow";
            //dentro de cada fila recorremos sus campos y valores
            for (j=0; j<xmlNodes[i].childNodes.length; j++) {
                //creamos una celda en la tabla con la propiedad insertCell
                newCell = newRow.insertCell(newRow.cells.length);
                //Dentro de cada elemento xml selecciona su primer elemento aunque al final solo existe uno 
                if (xmlNodes[i].childNodes[j].firstChild) {
                    newCell.innerHTML = xmlNodes[i].childNodes[j].firstChild.nodeValue;
                } else {
                   // newCell.innerHTML = nombreTabla;
                }
                console.log("cell: " + newCell);
            }
           }
           //Cuando ha terminado de insertar todas las filas en el objeto objGrupoFilas lo agrega a theTable para que se aparezca
            theTable.appendChild(objGrupoFilas);
    }


    
function leerFicheroTxt(ficTxt) {

    //Las lineas del fichero de texto recibido las dividimos en un array dividiendo por el caracter intro que es \r\n
    var lineasTxt = ficTxt.split('\r\n');

    var tablaHtml='<tbody>';
    var filaHtml='';

    //Seleccinamos el objeto DIV al que asignaremos el texto leido 
    let capaVacia = document.querySelector('#ficheroTxt')
    //recorremos el array de lineas del fichero de texto 
    for (var i = 0; i <= lineasTxt.length - 1; i++) {
        //Cojemos la primera letra en el ejemplo de emisor receptor para saber su tipo
        //en otros ejemplos esto no es necesario
        var EmisorReceptor = lineasTxt[i].substring(0, 1);

        filaHtml= filaHtml + '<tr>';
        
        //Para saber que numero de linea llevamos leido se defini en el Html un DIV de id "linea"
        //en el que acumularemos el nº de linea, la primera vez su valor es undefined por eso se le asigna "0"
        let linea = document.getElementById("linea")
        if (linea.value==undefined){linea.value='0'}

        let nlinea=0;
        // !isNaN si es cierto el valor es numérico
        if (!isNaN(linea.value)){
          nlinea=  parseInt(linea.value);
        }

        var arrLinea = lineasTxt[i].split('|');
        for (var j = 0; j <= arrLinea.length - 1; j++) {
            filaHtml= filaHtml + '<td>' + arrLinea[j]+ '</td>';
        }

        filaHtml= filaHtml + '</tr>';


        /*
      
        //aqui simplemente se mira si el nº de linea leida es superior a la acumulada y si es asi es que es nueva
        if (i > nlinea) {
            //Segun tipo asignamos el texto con una clase u otra
            if (EmisorReceptor == 'E')

                capaVacia.innerHTML = capaVacia.innerHTML + "<p class='emisor'>" + lineasTxt[i] + "</p>"

            else {
                capaVacia.innerHTML = capaVacia.innerHTML + "<p class='receptor'>" + lineasTxt[i] + "</p>"
            }
            nlinea=i;
        }
        */
        
        linea.value=nlinea.toString();
    }

    tablaHtml = tablaHtml + filaHtml + '</tbody>';

    var tabla1 = document.getElementById("tablamanual1");

    tabla1.insertAdjacentHTML('afterbegin', tablaHtml);

}


function cargarTablas(){
    loadDoc("libros.txt","txt")
}

window.addEventListener("load", function() {
    loadDoc("libros.txt","txt")
   // loadDoc("libros.xml","xml")
});




