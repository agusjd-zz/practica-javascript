function esPar (num){
    return(num % 2 === 0)
}
function calcularPromedio(lista){
    let sumaLista = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]
        
    }
    const promedioLista = sumaLista / lista.length;
    
    return promedioLista
}

const salariosArg = argentina.map(function(persona){
    return persona.salario;
}
);

const salariosArgSorted = salariosArg.sort(
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);


function medianaSalariosArg(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad];
        const personaMitad2 = lista[mitad-1];
        const personaMitad = calcularPromedio(personaMitad1,personaMitad2)
        return personaMitad
    }else{
        const personaMitad = lista[mitad];
        return personaMitad
    }   
}


const medianaGeneralArg = medianaSalariosArg(salariosArgSorted);

//Mediana Top 10

const spliceStart = (salariosArgSorted.length * 90)/100;
const spliceCount = salariosArgSorted.length - spliceStart;

const salarios10Arg = salariosArgSorted.splice(spliceStart,spliceCount)

const medianaTop10Arg = salarios10Arg;

console.log({
    medianaSalariosArg,
    medianaTop10Arg
})