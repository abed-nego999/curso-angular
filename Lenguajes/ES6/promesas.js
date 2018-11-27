getAsyncPromise = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let n = parseInt(Math.random()*10);
            if (n < 8) {
                // Proceso OK
                const o = {name: 'Carlos', edad: 25};
                resolve(o);
            } else {
                // Proceso ERROR
                reject({reason: 'Error de conexión, por ejemplo'});
            }
        }, 1000);
    });
}


getAsyncPromise().then((datos) => console.log(datos)).catch((datos) => console.log(datos));