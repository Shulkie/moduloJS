

console.log(process.argv);

const calc= require('./moduloej.js');

const numero1 = parseInt (process.argv[3])
const numero2 = parseInt (process.argv[4])
switch(process.argv[2]){
case 'sumar':
console.log (calc.sumar(numero1,numero2));
break;
case 'restar':
     console.log( calc.restar (numero1,numero2))
break;  
case 'dividir':
     console.log( calc.dividir(numero1,numero2));
break;
case 'multiplicar':
    console.log( calc.multiplicar(numero1,numero2) ); // 6
// console.log( calc.dividir(4, 0) ); // no se puede dividir por cero

}
