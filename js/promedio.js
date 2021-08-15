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



function addNumber(){
    let listOfNumber = document.getElementById("listOfNumbers") 
    const number = document.getElementById("inputNumber");
    const numberValue = number.value;
    if (numberValue >= 1) {
        list.push(parseInt(numberValue));
    }
    listOfNumber.innerText = "Tu lista de numeros es:" + list;
    return list
}
function removeNumber(lista,nRemoveValue){
    for (let i = 0; i < lista.length; i++) {
        if (nRemoveValue === lista[i]) {
            lista.splice(i,1);
            break;     
        }
        
    }
    
    return lista

}

function calculate (){
    const result = document.getElementById("result")
    let lista = list;
    let promedio = calcularPromedio(lista);
    if (lista.length === 0) {
        result.innerText = "Tu lista esta vacia";
    }else{
        result.innerText = "El promedio de tu lista es: " + promedio;
    }
    

}
function erase(){
    let listOfNumber = document.getElementById("listOfNumbers");
    let nRemove = document.getElementById("nRemove");
    let nRemoveNumber = parseInt(nRemove.value)
    let lista = list;
    removeNumber(lista,nRemoveNumber);
    listOfNumber.innerText = "Tu lista de numeros es:" + lista;
}


