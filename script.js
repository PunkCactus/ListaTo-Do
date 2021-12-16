var contador= 0;
document.getElementById('btn-añadir').onclick= function () {AñadirElemento()};
function AñadirElemento(){
    var ContenidoLista= document.getElementById('Input').value;
    if(ContenidoLista!=length && ContenidoLista!=" "){
        //Crear lista
        var nuevoelemento= document.createElement('li')
        nuevoelemento.className= 'item-lista';
        nuevoelemento.id='item-lista';
        var ListaCompleta= document.getElementById('ItemsLista');
        var nuevotexto= document.createTextNode(ContenidoLista);
        nuevoelemento.appendChild(nuevotexto);
        ListaCompleta.appendChild(nuevoelemento);
        Input.value='';
        contador++;
    }
}

