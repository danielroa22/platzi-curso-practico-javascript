

function calcularMediaAritmetica (lista){

    // let sumaLista = 0; 
    // for (let i = 0; i < lista.length; i++) {
    //     //sumaLista 1 es 0, + la posición 0 en la lista, entonces es 100.
    //     //La primera posición es 0.
    //     sumaLista = sumaLista + lista[i]; 
    // }

    const sumaLista = lista.reduce(// va a recibir una función y este metodo va a sumar todos los elementos. 
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }

    ); 

    const promediolista = sumaLista / lista.length;

    return promediolista; // return es para que siempre arroje el valor en una función.
}


// Cuando tenemos listas no solo tenemos que usar un ciclo for para
// poder iterar con esa lista. Hay métodos dentro de todos los array
// con los que se puede iterar con todos los elementos. 
// por eso se comentó el ciclo for. 