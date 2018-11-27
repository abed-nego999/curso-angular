class Person {
    constructor (name, edad) {
        this.name = name;
        this.edad = edad;
    }

    saludar () {
        console.log(`Hola soy ${this.name} y tengo ${this.edad} años`);
    }
}

var o = new Person('Pepe', 35);
o.saludar();


class Alumno extends Person {
    constructor(name, edad, curso) {
        super(name, edad);
        this.curso = curso;
    }

    saludar () {
        super.saludar();
        console.log(`Estudio ${this.curso}`);
    }
}

o = new Alumno('Luis', 26, 'Angularismo');
o.saludar();