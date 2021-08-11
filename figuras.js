// Codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado+"cm")

function perimetroCuadrado(lado) {
    return lado * 4;

}
console.log("El perimetro del cuadrado es de: " + perimetroCuadrado+"cm")

function areaCuadrado (lado){
    return lado*lado;
} 
console.log("El area del cuadrado es de: " + areaCuadrado+"cm2")
console.groupEnd(0);
// Codigo del cuadrado

// Codigo del triangulo
console.group("Triangulos");


const alturaTriangulo = 5.5;
console.log("La altura del triangulo es de: " + alturaTriangulo +"cm")

function perimetroTriangulo (lado1,lado2,base){
    return lado1+lado2+base;

} 
console.log("El perimetro del triangulo es :" + perimetroTriangulo +"cm")

function areaTriangulo(base,altura){
    return (base * altura) /2;
} 
console.log("El area del triangulo es:" + areaTriangulo + "cm2")
console.groupEnd();

// Circulo
console.group("Circulo")
//Radio
const radioCirculo = 4;
console.log ("El radio del circulo es " + radioCirculo + "cm")
//Diametro
function diametroCirculo(radio){
    return radio * 2;
} 
console.log("El diametro del circulo es " + diametroCirculo + "cm")
//PI 
const PI = Math.PI;
console.log("El valor de Pi es " + PI)
//Circunferencia
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