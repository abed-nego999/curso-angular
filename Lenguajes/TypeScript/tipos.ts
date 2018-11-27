import {IUsuario, Usuario} from './interfaces';

function tipos() {
    let nombre: string;
    let edad: number;
    let adulto: boolean;
    let id: any; // Es como tipo 'undefined'. Se usa para no dejar el tipo en blanco
    let id2: string | number; // Combinación de tipos!!!
    // let aDatosOld: [];
    let aDatosNew: Array<any>;
    // let aNumbersOld: [number];
    let aNumbersNew: Array<number>;
    let oDatos: IUsuario;

    nombre = '';
    edad = 25;
    adulto = this.edad > 17;
    id = 45;
    id2 = 'un valor';
    aDatosNew = [1, 'cadena', true, 56];
    aNumbersNew = [1, 2, 3, 4];

    // oDatos = new Usuario('Esteban', 'esteban@empresa.com', 'c0ntr4s3ñ4', 'Una propiedad propia');
    oDatos = {
        nombre: '',
        email: '',
        pass: '',
        otroMetodo: function () {},
        unMetodo: function () {
            return '';
        }
    }; // Como se ve, podemos asignar al tipo IUsuario, un objeto sin nombre que tenga las mismas propiedades
}
