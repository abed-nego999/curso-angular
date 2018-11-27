//import suma, {resta, mod} from './operaciones.js'
import * as ops from './operaciones.js'
let x = 23;
let y = 34;
console.log(`La suma entre ${x} y ${y} es ${ops.suma(x, y)}`);
console.log(`La diferencia entre ${x} y ${y} es ${ops.mod(ops.resta(x, y))}`);