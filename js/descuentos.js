function descuento(price,discount){
    const porcentajePrecioConDescuento = 100 - discount;
    const precioConDescuento = (price * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function buttonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const inputDiscount = document.getElementById("inputDiscount");
    const resultPrice = document.getElementById("resultPrice")

    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;

    const precioConDescuento = descuento(priceValue,discountValue);

    resultPrice.innerText = "El Precio con descuento es: $" + precioConDescuento;

}