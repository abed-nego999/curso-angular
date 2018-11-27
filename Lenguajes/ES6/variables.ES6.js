let x = 14;
console.log(x);

(function algo() {
    let z = 30;
    let z2 = 30;
    {
        console.log('En la funcion, z2 vale ', z2);
        console.log('En la funcion, z vale ', z);
        let z = 23;
        console.log('En la funcion, z vale ', z);
    }
    console.log('En la funcion, z2 vale ', z2);
    console.log(x);
})();