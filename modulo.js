
// const numero = 2; 

// module.exports = 2;

// console.log('Hola Mundo');

// const ocho  = 8

// function saludar () {
//     console.log('hola amigue')
    
// }

// module.exports = saludar;

//Puedo hacerlo de manera anónima module.exports = function(){console.log('hola perro')}

// module.exports  =  {
//     nombre: 'Pepa',
//     edad:27,
//     direccion: 'pepe'

// };


module.exports = {
    saludar (nombre) {
      console.log  (`hola ${nombre}`) ; 
    },
    despedir: () => {
        console.log('ádios mundo')
    }
}

//puedo eviar poner los numeros yy poner function saludar(nombre){console.log (`hola ${nombre`})}