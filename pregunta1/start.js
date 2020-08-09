const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
class Fecha{
    static diasHastaNavidad(dia, mes){
        let año = 2018
        if(dia > 25 && mes == 12)
            año = 2019
        let str_dia = dia < 10 ? dia.toString().padStart(2, "0") : dia.toString() 
        let str_mes = mes < 10 ? mes.toString().padStart(2, "0") : mes.toString() 
        let str_año = año.toString()
        let navidad = new Date(str_año.concat("-12-25"));
        let argumentos = new Date("2018-".concat(str_mes, "-", str_dia))
        let fecha = new Fecha()
        fecha.dias_totales = (navidad-argumentos)/ (1000*60*60*24);
        fecha.mes = Math.abs(12-mes);
        fecha.dia = Math.abs(dia - 25);
        if(dia > 25){
            fecha.dia = 31 - fecha.dia;
            fecha.mes --;
            if(fecha.mes < 0)
                fecha.mes += 12;
        }
        return fecha;
    }
}
Fecha.prototype.toString = function fechaToString() {
    let resultado = "Quedan un total de " + this.dias_totales + " días hasta el día de Navidad. \n";
    resultado += "Quedan " + this.mes + " meses y " + this.dia + " días hasta el día de Navidad.";
    return resultado;
}
function ask(){
    let cortos = [4, 6, 9, 10];
    readline.question('Introduzca un mes (1-12): ', num2 => {
        num2 = Number(num2);
        if (Number.isNaN(num2) || num2 > 12 || num2 < 1) {
            console.log("El número introducido no es valido o no es un número. Repita el proceso.")
            ask()
        }else{
            let texto = "Introduzca un día (1-31): ";
            let limite = 31
            if(num2 === 2){
                texto = "Introduzca un día (1-28) No incluye año bisiesto: "
                limite = 28;
            }else if (cortos.includes(num2) ){
                texto = "Introduzca un día (1-30): "
                limite = 30;
            }
            readline.question(texto, num1 => {
                num1 = Number(num1);
                if (Number.isNaN(num1) || num1 > limite || num1 < 1) {
                    console.log("El número introducido no es valido o no es un número. Repita el proceso.")
                    ask()
                }else{
                    readline.close();
                    let dias = Fecha.diasHastaNavidad(num1,num2); 
                    console.log(dias.toString())
                }
            });
        }
    });
}
ask()