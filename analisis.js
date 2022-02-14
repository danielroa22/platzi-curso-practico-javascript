// Helpers, son las fórmulas que no son parte del negocio pero
// son importantes para el cálculo

function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica (lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }

    ); 

    const promediolista = sumaLista / lista.length;

    return promediolista; 
}

// Calculadora de madiana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if  (esPar(lista.length)){
        const personitaMitad1 = lista[mitad -1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana; 
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Calculando mediana general

const salariosCol = colombia.map(
    function (persona){
        return persona.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function (salaryA, salaryB){
         return salaryA - salaryB; 
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart; 

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

// el metodo splice recibe 2 argumentos, 1 donde se quiere hacer el corte y desde ese corte se coge esa información.
// el segundo argumento es decir cuántas tajadas va a sacar después para sacarlo. Y lo que saca, lo guarda.

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});