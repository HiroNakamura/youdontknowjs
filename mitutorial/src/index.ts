/*
compilar: tsc --watch
ejecutar: node dist/
*/

import {Objeto} from './objeto'

function testA(){
    var obj:Objeto<number> = new Objeto<number>(45);
    console.log('**** Clases ****')
    console.log(`Valor: ${obj.valor}, Tipo: ${typeof(obj.valor)}`)
}

function main() {
	testA()
}

main()