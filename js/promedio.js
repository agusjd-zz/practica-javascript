// Lista de numeros
let list = []
// Funciones para calcular promedio, mediana y moda

function calcularPromedio(lista){
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
        
    }
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista;        
}

function calcularMediana(lista){
    const mitadLista = parseInt(lista.length / 2);
    let mediana;
    function esPar(number){
        if (number % 2 === 0) {
            return true;
        } else{
            return false;
        }
    }
        
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista-1];
        const elemento2 = lista[mitadLista];
        const promedio = calcularPromedio([elemento1,elemento2]);
        mediana = promedio
        
    }else{
        mediana = lista[mitadLista];
    }
    return mediana
}


function calcularModa(lista){
    const listaCount = {}
    lista.map(
        function (elemento){
            if (listaCount[elemento]) {
                listaCount[elemento] += 1;
                
            }else{
                listaCount[elemento] = 1;
            }
            
    
        }
    );
    const listArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1]
        }
    );
    
    const moda = listArray[listArray.length-1]

    return moda

}
// Funciones para agregar y eliminar elementos de nuestra lista

function addNumber(){
    let listOfNumber = document.getElementById("listOfNumbers") 
    const number = document.getElementById("inputNumber");
    const numberValue = parseInt(number.value);
    if (numberValue >= 1) {
        list.push(parseInt(numberValue));
    }
    listOfNumber.innerText = "Tu lista de numeros es: " + list;
    return list
}
function removeNumber(){
    let listOfNumber = document.getElementById("listOfNumbers");
    let nRemove = document.getElementById("nRemove");
    let nRemoveValue = parseInt(nRemove.value)

    for (let i = 0; i < list.length; i++) {
        if (nRemoveValue === list[i]) {
            list.splice(i,1);
            break;     
        }
        
    }
    listOfNumber.innerText = "Tu lista de numeros es: " + list;
}

function calculateProm (){
    const result = document.getElementById("result")
    let promedio = calcularPromedio(list);
    if (list.length === 0) {
        result.innerText = "Tu lista esta vacia";
    }else{
        result.innerText = "El promedio de tu lista es: " + promedio;
    }   

}

function calculateMedi(){
    const result = document.getElementById("result");
    let mediana = calcularMediana(list)
    if (list.length === 0) {
        result.innerText = "Tu lista esta vacia";
    }else{
        result.innerText = "La mediana de tu lista es: " + mediana;
    }   

}

function calculateModa(){
    const result = document.getElementById("result");
    let moda = calcularModa(list)
    if (list.length === 0) {
        result.innerText = "Tu lista esta vacia";
    }else{
        result.innerText = "La moda de tu lista es: " + moda;
    }   

}
