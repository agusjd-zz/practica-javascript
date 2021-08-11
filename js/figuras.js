// Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado) {
    return lado * 4;

}
function areaCuadrado (lado){
    return lado*lado;
} 

console.groupEnd(0);
// Codigo del cuadrado

// Codigo del triangulo
console.group("Triangulos");

function perimetroTriangulo (lado1,lado2,base){
    return lado1+lado2+base;

} 
 

function areaTriangulo(base,altura){
    return (base * altura) /2;
} 

console.groupEnd();

// Circulo
console.group("Circulo")

//Diametro
function diametroCirculo(radio){
    return radio * 2;
} 

//PI 
const PI = Math.PI;
console.log("El valor de Pi es " + PI)
//Perimetro
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 
console.log("El perimetro del circulo es " + perimetroCirculo + "cm")
//Area
function areaCirculo(radio){
    return(radio*radio) * PI;
} 
console.log("El area del circulo es " + areaCirculo + "cm2")



console.groupEnd()
//Triangulo

// Aqui interactuamos con el HTML

//Funciones Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro)

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area)

}
// Funciones Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const input2 = document.getElementById("inputTrianguloLado2");
    const input3 = document.getElementById("inputTrianguloBase");
    const valueSide1 = parseInt(input1.value);
    const valueSide2 = parseInt(input2.value);
    const valueSide3 = parseInt(input3.value);

    const perimetro = perimetroTriangulo(valueSide1,valueSide2,valueSide3);
    alert(perimetro)

}
function calcularAreaTriangulo(){
    const input = document.getElementById("inputTrianguloBase");
    const value = parseInt(input.value);

    const area = areaTriangulo(value,altura);
    alert(area)

}

//Funciones Circulo

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value)

    alert(area)

}

function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const diametro = diametroCirculo(value)

    alert(diametro)

}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);

    const perimetro = perimetroCirculo(value)

    alert(perimetro)

}