const x = 10;
// 
const o = {user: 'pepe', edad: 23};

// Esto vale porque NO varias el puntero de "o"
o.puesto = 'Jefe';
console.log(o);

// Esto no vale, porque SI modificas el puntero de "o"
o = {user: 'pepe', edad: 23, puesto: 'Jefe'};