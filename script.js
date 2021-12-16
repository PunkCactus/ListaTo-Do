var contar= 1;
document.getElementById('btn-añadir').onclick= function () {AñadirElemento()};
function AñadirElemento(){
    var ContenidoLista= document.getElementById('Lista').value;
    if(ContenidoLista!="" && ContenidoLista!=" "){
        //Crear lista
        var nuevoelemento= document.createElement('li')
        nuevoelemento.className= 'item-lista';
        nuevoelemento.id='item-lista';
        var ListaCompleta= document.getElementById('ItemsLista');
        ListaCompleta.appendChild(nuevoelemento);
    }
}
