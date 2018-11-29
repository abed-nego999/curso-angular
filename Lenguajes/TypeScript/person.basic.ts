class PersonBasic {
    name;
    edad;
    constructor (name, edad) {
        this.name = name;
        this.edad = edad;
    }

    saludar () {
        console.log(`Hola soy ${this.name} y tengo ${this.edad} años`);
    }
}

let o1 = new PersonBasic('Pepe', 35);
o1.saludar();


class AlumnoBasic extends PersonBasic {
    curso;
    constructor(name, edad, curso) {
        super(name, edad);
        this.curso = curso;
    }

    saludar () {
        super.saludar();
        console.log(`Estudio ${this.curso}`);
    }
}

o1 = new AlumnoBasic('Luis', 26, 'Angularismo');
o1.saludar();
