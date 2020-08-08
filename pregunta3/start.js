const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function combinaciones(palabra){
    let resultado = []
    for (let size = 1; size <= palabra.length; size++) {
        for (let startIndex = 0; startIndex < palabra.length; startIndex++) {
            let word = "";
            for (let i = 0; i < size; i++) {
                word += palabra[startIndex + i]
                    if(startIndex + i == palabra.length){
                        word = "";
                        break;
                    }
            }
            if(word){
                resultado.push(word)
            }
        }   
    }
    return resultado
}

function combinacionesRec(palabra, lista){
    if(palabra.length > 1){
        lista = combinacionesRec(palabra.substring(1), lista)
    }
    let nueva = "";
    for (let i = 0; i < palabra.length; i++) {
        nueva += palabra[i];
        lista.push(nueva)
    }
    return lista
}
  
readline.question('Introduzca un string: ', input => {
    readline.close();
    let entrada = input
    let iterativo = combinaciones(entrada)
    let recursivo = combinacionesRec(entrada, [])
    console.log("- Cadena de entrada: " + entrada);
    salidaStr = "- Resultados: ";
    iterativo.forEach(element => {
        salidaStr = salidaStr.concat(element+", ")
    });
    console.log(salidaStr.substring(0,salidaStr.length -2))
    salidaStr = "- Resultados (recursivo): ";
    recursivo.forEach(element => {
        salidaStr = salidaStr.concat(element+", ")
    });
    console.log(salidaStr.substring(0,salidaStr.length -2)) 
});
