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

OperacionesBasicas.prototype.toString = function opString(){
    let resultado = "suma = " + this.suma + "\n"; 
    resultado += "restaA = " + this.restaA + "\n"; 
    resultado += "restaB = " + this.restaB + "\n"; 
    resultado += "multiplicacion = " + this.multiplicacion + "\n"; 
    resultado += "divisionA = " + this.divisionA + "\n"; 
    resultado += "divisionB = " + this.divisionB + "\n";
    return resultado 
}

let op = OperacionesBasicas.calcular(2, 4);
console.log(op.toString())