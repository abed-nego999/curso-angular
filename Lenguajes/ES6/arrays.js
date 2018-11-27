const aDatos = [6, 7, 8, 34, 76, 4];
//console.log(aDatos);
aDatos.push(1);
//console.log(aDatos);

for (let i = 0; i < aDatos.length; i++) {
    const item = aDatos[i];
    //console.log(`El elemento ${i} del array vale ${item}`);
}
aDatos.forEach((item, i) => console.log(`El elemento ${i} del array vale ${item}`));


//const aDatosC = aDatos.map((item) => { return item * item});
const aDatosC = aDatos.map(item => item * item);
console.log(aDatosC);

const aDatosImpares = aDatos.filter(item => item%2);
console.log(aDatosImpares);
const aDatosPares = aDatos.filter(item => !(item%2));
console.log(aDatosPares);

const aDatosR = aDatos.reduce((previous, current) => previous + current);
console.log(aDatosR);