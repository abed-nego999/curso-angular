export function  suma (a, b) {
    return a + b;
}

export function resta (a, b) {
    return a - b;
}

export function mod (a) {
    if (a<0) {
        a = a * -1;
    }
    return a;
}

function interna (z) {
    console.log(z);
}