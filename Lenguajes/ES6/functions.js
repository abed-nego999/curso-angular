function algo () {
    console.log("Soy algo");
}

algo ();

const otro = function () {
    console.log("Soy otro");
}

otro();

const ver = function (o) {
    console.log(o);
}

ver({user: 'Esteban'});

function calcular (a, b, callback) {
    console.log(callback(a, b));
}

calcular (10, 5, function (a, b) {
    return a + b;
});

const saludar = function (name='amigo', ... otros) {
    console.log('Hola', name);
    console.log(otros);
}

saludar();
saludar('Pepe', 'Juan', 'Antxonio');

// Empezamos con ES6: arrow function

const saludarArrow1 = (name) => {console.log('Hola', name)}
saludarArrow1('Carlos');

const saludarArrow2 = name => console.log('Hola', name)
saludarArrow2('Jose Miguel');

calcular (10, 5, (a, b) => a + b);

const o = {
    name: 'Pepe',
    mostrar: function () {
        console.log(this);
    },
    mostrarArrow1: () => console.log(this)
}

o.mostrar();
const otroMostrar = o.mostrar;
otroMostrar();

o.mostrarArrow1();
const otroMostrarArrow = o.mostrarArrow1;
otroMostrarArrow();