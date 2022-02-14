
listaArrayModa = [
    1,
    2,
    3,
    3,
    3,
    3,
    4,
    5,
    6,
];

const lista1Count = {};

listaArrayModa.map(
    function (elemento){
        if(lista1Count[elemento]){
            lista1Count[elemento] += 1;
        } else {
            lista1Count[elemento] = 1; 
        }
        
    }
);

const lista1Array = Object.entries(lista1Count).sort(// se puede usar Sort porque el objeto ya es array
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);
// a object.entries se le puede enviar un objeto que queremos convertir en array. 

const moda = lista1Array[lista1Array.length - 1];
