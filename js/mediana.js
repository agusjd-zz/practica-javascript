const lista = [100,200,600,400000000];
const mitadLista = parseInt(lista.length / 2);


function calcularPromedio(lista){
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
        
    }
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista
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

