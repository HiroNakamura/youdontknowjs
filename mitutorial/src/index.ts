/*
compilar: tsc --watch
ejecutar: node dist/
*/

class Objeto<T>{
    constructor(public valor: T){
        this.valor = valor;
    }
}

function main(){
    var obj:Objeto<number> = new Objeto<number>(45);
    console.log(`Valor: ${obj.valor}, Tipo: ${typeof(obj.valor)}`)
}
main()