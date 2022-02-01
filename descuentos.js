//const precioOriginal = 120;
//const descuento = 18;

const coupons = [
    "Daniel_Roa",
    "DaniRo",
    "Influencer"
];


function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento; 
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/100;

    return precioConDescuento;
}


function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value; 


    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value; 

    let descuento;

    switch(couponValue) {
        case coupons[0]: // "Daniel_Roa"
        descuento = 15;
        break;
        case coupons[1]: // "DaniRo"
        descuento = 30;
        break;
        case coupons[2]: // "Influencer"
        descuento = 25;
        break;
    }  
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDescuento;

}



// console.log({ // con estas llaves le estoy enviando el objeto y dentro del 
//     //objeto puedo enviarle todas las varialbes que quiero imprimir en la consola.

//     precioOriginal,
//     descuento,
//     porcentajeDelPrecioConDescuento,
//     precioConDescuento
// });