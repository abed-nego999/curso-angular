getAsync = function (callback) {
    setTimeout(() => {
        const o = {name: 'Carlos', edad: 25};
        callback (o);
    }, 1000);
}

getAsync((datos) => {
    console.log(datos);
});
console.log('Leyendo datos del servidor');