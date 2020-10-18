"use strict";
(() => {
    //:Promise<tipo-de-dato-retorna>
    const retirarDinero = (montoRetirar) => {
        let dineroActual = 1000;
        return new Promise((res, rej) => {
            if (montoRetirar > dineroActual) {
                rej('No hay suficiente dinero');
            }
            else {
                dineroActual -= montoRetirar;
                res(dineroActual);
            }
        });
    };
    retirarDinero(500)
        .then(montoActual => { console.log(`Me queda ${montoActual}`); })
        .catch(err => { console.warn(err); });
})();
