"use strict";
(function () {
    var avenger = {
        nombre: 'Tony Starks',
        clave: 'IRON-MAN',
        poder: 'Inteligencia'
    };
    var extraer = function (_a) {
        var nombre = _a.nombre, clave = _a.clave;
        //const {nombre,clave} = avenger;
        console.log(nombre);
        console.log(clave);
    };
    //extraer(avenger);
    var avengers = ['Thor', 'ironMan', 'Spiderman'];
    // para destructuracion de objetos se utiliza llaves
    var diosDelTrueno = avengers[0], hombreDeAcero = avengers[1], hombreAraña = avengers[2];
    /* console.log(diosDelTrueno);
    console.log(hombreDeAcero);
    console.log(hombreDeAcero); */
    var extraerArreglo = function (_a) {
        var diosDelTrueno = _a[0], hombreDeAcero = _a[1], hombreAraña = _a[2];
        //const {nombre,clave} = avenger;
        console.log(diosDelTrueno);
        console.log(hombreDeAcero);
        console.log(hombreAraña);
    };
    extraerArreglo(avengers);
})();
