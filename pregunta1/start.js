class Fecha{
    static diasHastaNavidad(dia, mes){
        let año = 2020
        if(dia > 25 && mes == 12)
            año = 2021
        let str_dia = dia < 10 ? dia.toString().padStart(2, "0") : dia.toString() 
        let str_mes = mes < 10 ? mes.toString().padStart(2, "0") : mes.toString() 
        let str_año = año.toString()
        let navidad = new Date(str_año.concat("-12-25"));
        let argumentos = new Date("2020-".concat(str_mes, "-", str_dia))
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


let dias = Fecha.diasHastaNavidad(24,11); 
console.log(dias.toString())