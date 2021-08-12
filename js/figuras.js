// Codigo del cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}
function areaCuadrado (lado){
    return lado*lado;
} 

// Codigo del cuadrado

// Codigo del triangulo

function perimetroTriangulo (lado1,lado2,base){
    return lado1+lado2+base;

} 
function areaTriangulo(base,altura){
    return (base * altura) /2;
} 

// Circulo
//Diametro
function diametroCirculo(radio){
    return radio * 2;
} 

//PI 
const PI = Math.PI;
//Perimetro
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} 

//Area
function areaCirculo(radio){
    return(radio*radio) * PI;
} 


//Triangulo

// Aqui interactuamos con el HTML

//Funciones Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const resultSquare = document.getElementById("resultSquare")
    resultSquare.innerText = perimetro;

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resultSquare = document.getElementById("resultSquare")
    const area = areaCuadrado(value);
    resultSquare.innerText = area;

}
// Funciones Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTrianguloLado1");
    const input2 = document.getElementById("inputTrianguloLado2");
    const input3 = document.getElementById("inputTrianguloBase");
    const valueSide1 = parseInt(input1.value);
    const valueSide2 = parseInt(input2.value);
    const valueSide3 = parseInt(input3.value);
    const resultTriangle = document.getElementById("resultTriangle");
    const perimetro = perimetroTriangulo(valueSide1,valueSide2,valueSide3);

    resultTriangle.innerText = perimetro;
    

}
function calcularAreaTriangulo(){
    const input = document.getElementById("inputTrianguloBase");
    const inputAltura = document.getElementById("inputTrianguloAltura")
    const value = parseInt(input.value);
    const altura = parseInt(inputAltura.value);
    const resultTriangle = document.getElementById("resultTriangle");
    const area = areaTriangulo(value,altura);
   
    resultTriangle.innerText = area;
}

function alturaIsoceles(lado1,lado2,base){
    if (lado1 === lado2 && lado1 != base) {
        
        
    }

}

//Funciones Circulo

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value)
    const resultCircle = document.getElementById("resultCircle")

    resultCircle.innerText = area;

}

function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);
    const diametro = diametroCirculo(value);
    const resultCircle = document.getElementById("resultCircle");
    resultCircle.innerText = diametro;

}
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = parseInt(input.value);
    const perimetro = perimetroCirculo(value);
    const resultCircle = document.getElementById("resultCircle")
    resultCircle.innerText = perimetro;

}