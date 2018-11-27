/*class Person {
    private name: string;
    private edad: number;
    constructor (name: string, edad: number) {
        this.name = name;
        this.edad = edad;
    }

    saludar () {
        console.log(`Hola soy ${this.name} y tengo ${this.edad} años`);
    }
}*/

// Lo de arriba equivale a esto:
class Person {
    constructor (private name: string, private edad: number) {
    }

    saludar () {
        console.log(`Hola soy ${this.name} y tengo ${this.edad} años`);
    }
}

const o = new Person('Pepe', 35);
o.saludar();


class Alumno extends Person {
    constructor(name: string, edad: number, private curso: string) {
        super(name, edad);
    }

    saludar () {
        super.saludar();
        console.log(`Estudio ${this.curso}`);
    }
}

o = new Alumno('Luis', 26, 'Angularismo');
o.saludar();
