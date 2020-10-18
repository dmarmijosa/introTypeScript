(()=>{
    

    console.log('Inicio');

    const prom1 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject('Se termino el timeout');
        }, 1000);

    });
    //then ejecutara cuando todo sale bien
    //catch si todo sale mal y no para el codigo
    prom1
        .then(mensaje=>{console.log(mensaje);})
        .catch(err=>{console.warn(err);})
    

    console.log('Final');
})();


