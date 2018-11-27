export interface IUsuario {
    nombre: String;
    email: string;
    pass: string;
    otroMetodo: Function;
    unMetodo(): string;
}

export class Usuario implements IUsuario {
    constructor(
        public nombre: String,
        public email: string,
        public pass: string,
        public unaPropia: string) {}
    public otroMetodo() {
        console.log(this.unMetodo());
    }
    public unMetodo(): string {
        return `Hola Mundo! Me llamo ${this.nombre}`;
    }
}

const usuario = new Usuario('', '', '', '');
usuario.otroMetodo();
