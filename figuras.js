// Código del cuadrado

console.group("Cuadrados");
// const  ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado (lado){
    return lado * lado;
}
// console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");
console.groupEnd();


// Código del triángulo

console.group("Triangulos");
// const  ladoTriangulo1 = 6;
// const  ladoTriangulo2 = 6;
// const  baseTriangulo = 4;


// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura){
   return (base * altura)/2;
}
console.groupEnd();


//Código del círculo

console.group("Circulos");

// Radio
// const radioCirculo = 4; 
// console.log("El radio del circulo es: " + radioCirculo + "cm");


//Diámetro
function diametroCirculo(radio){
    return radio *2;
}

//PI
const PI = Math.PI; 

//Circunferencia
function circunferenciaCirculo (radio){
    const diametro = diametroCirculo (radio)
    return diametro * PI;
}

//Área
function areaCirculo (radio){
    return (radio * radio) * PI;
}
console.groupEnd();

// Aquì interactuamos con el HTML del Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value; // con value estoy obteniendo el valor que se puso en el input el usuario
    
    const perimetro = perimetroCuadrado(value);
    alert (perimetro); 
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value; // con value estoy obteniendo el valor que se puso en el input el usuario
    
    const area = areaCuadrado(value);
    alert (area); 
}

//Aquí interactuamos con el HTML del Triángulo
function calcularPerimetroTriangulo() {
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const inputBase = document.getElementById("inputTrianguloBase");

    const valueLado1 = parseInt(inputLado1.value); // con value estoy obteniendo el valor que se puso en el input el usuario
    const valueLado2 = parseInt(inputLado2.value);
    const valueBase = parseInt(inputBase.value);

    const perimetro = perimetroTriangulo(valueLado1,valueLado2,valueBase);
    alert (perimetro); 
}

function calcularAreaTriangulo(){
    const inputLado = document.getElementById("inputTrianguloLadoArea");
    const inputBase = document.getElementById("inputTrianguloBaseArea");

    const valueLado = parseInt(inputLado.value); // con value estoy obteniendo el valor que se puso en el input el usuario
    const valueBase = parseInt(inputBase.value);

    const area = areaTriangulo(valueLado, valueBase);
    alert (area); 
}

//Aqui interactuamos con el HTML del círculo

function calcularDiametroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value; // con value estoy obteniendo el valor que se puso en el input el usuario
    
    const diametro = diametroCirculo(value);
    alert (diametro); 
}
function calcularCircunferenciaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value; // con value estoy obteniendo el valor que se puso en el input el usuario
    
    const circunferencia = circunferenciaCirculo(value);
    alert (circunferencia); 
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value; // con value estoy obteniendo el valor que se puso en el input el usuario
    
    const area = areaCirculo(value);
    alert (area); 
}

//Aqui vamos a obtener la altura de un triángulo isósceles 

function calcularAlturaTrianguloIsosceles() {
    const inputLado1 = document.getElementById("inputTrianguloLado1");
    const inputLado2 = document.getElementById("inputTrianguloLado2");
    const inputBase = document.getElementById("inputTrianguloBase");

    const valueLado1 = parseInt(inputLado1.value);
    const valueLado2 = parseInt(inputLado2.value);
    const valueBase = parseInt(inputBase.value);

    function alturaTrianguloIsosceles (trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
        if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
            alert("Los lados a y b no son iguales");
        } else {
            const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
            const trianguloPequenoLadoBase = trianguloGrandeLadoA;

            const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
            const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

            const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

            const trianguloGrandeAltura = trianguloPequenoLadoA;
            return trianguloGrandeAltura; 
        }
    }
    
    const alturaFinal = alturaTrianguloIsosceles(valueLado1, valueLado2, valueBase);
    alert (alturaFinal);
}
