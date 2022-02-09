function calcularMediaAritmetica (lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }

    ); 

    const promediolista = sumaLista / lista.length;

    return promediolista; 
}

function calcularMediana(){
    const entradaMediana = document.getElementById("inputMediana");
    const medianaValue = entradaMediana.value; // Al ser un String los valores capturados, se procede a convertir el formato a Number 
    let arrayMediana = Array.from(medianaValue.split(","), Number); // Esto debo verificarlo, pero mi intuición me dice que con ese método volví en array los valores. 
    const listaOrdenada = arrayMediana.sort((numMenor, numMayor) => numMenor - numMayor); // se ordena el array 

    const mitadListaOrdenada = parseInt(listaOrdenada.length / 2); // se continua con el código que vimos en clase 

    function esPar(numerito){
        if(numerito % 2 === 0){
            return true;
        } else {
            return false;
        }
    }
    let mediana; 
    if (esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadListaOrdenada - 1];
        const elemento2 = listaOrdenada[mitadListaOrdenada];

        const promedioElemento1y2 = calcularMediaAritmetica([
            elemento1,
            elemento2,
        ]);

        mediana = promedioElemento1y2;


    } else {
        mediana = listaOrdenada[mitadListaOrdenada];
    }

    const mostrarResultado = document.getElementById("resultadoMediana");
    mostrarResultado.innerText = "La mediana es de: " + mediana;
}







