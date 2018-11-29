export interface ICurso {
    id: string | number;
    nombre: string;
    descripcion: string;
}

export interface ITurno {
    id: string | number;
    nombre: string;
    horario: string;
}

export class Alumno {
    constructor(
        public nombre: string = '',
        public apellidos: string = '',
        public email: string = '',
        public isOk: boolean = false,
        public turno: ITurno = {id: '', nombre: '', horario: ''},
        public curso: ICurso = {id: '', nombre: '', descripcion: ''}) {
    }
}
