const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

class OperacionesBasicas{
    static calcular(a, b){
        let op = new OperacionesBasicas()
        op.suma = a+b;
        op.restaA = a-b;
        op.restaB = b-a;
        op.multiplicacion = a*b;
        op.divisionA = a/b;
        op.divisionB = b/a;
        return op;
    }
}

function ask(){
    readline.question('Introduzca un número: ', num1 => {
        if (Number.isNaN(Number(num1))) {
            console.log("No se ha introducido un número. Repita el proceso.\n")
            ask();
        }else{
            readline.question('Introduzca otro número: ', num2 => {
                if (Number.isNaN(Number(num2))) {
                    console.log("No se ha introducido un número. Repita el proceso.\n")
                    ask();
                }else{
                    readline.close();
                    let op = OperacionesBasicas.calcular(Number(num1), Number(num2));
                    console.log(op.toString())
                }
            });
        }
    });
}
OperacionesBasicas.prototype.toString = function opString(){
    let resultado = "\nsuma = " + this.suma + "\n"; 
    resultado += "restaA = " + this.restaA + "\n"; 
    resultado += "restaB = " + this.restaB + "\n"; 
    resultado += "multiplicacion = " + this.multiplicacion + "\n"; 
    resultado += "divisionA = " + this.divisionA + "\n"; 
    resultado += "divisionB = " + this.divisionB;
    return resultado 
}

ask()