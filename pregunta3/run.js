function combinaciones(palabra){
    let resultado = []
    let length = palabra.length
    for (let size = 1; size < length; size++) {
        for (let index = 0; index < length; index++) {
            let word = "";
            for (let i = 0; i < size; i++) {
                word += palabra[index + i]
                    if(index+i == length){
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
let entrada = "Entrada"
let salida = combinaciones(entrada)
console.log("- Cadena de entrada: " + entrada);
salidaStr = "- Resultados: ";
salida.forEach(element => {
    salidaStr = salidaStr.concat(element+", ")
});
console.log(salidaStr.substring(0,salidaStr.length -2))