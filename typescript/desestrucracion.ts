(()=>{
    const avenger ={
        nombre: 'Tony Starks',
        clave: 'IRON-MAN',
        poder: 'Inteligencia'
    }
    
    const extraer =({nombre,clave}:any)=>{
        //const {nombre,clave} = avenger;
        console.log(nombre);
        console.log(clave);


    }
    //extraer(avenger);

    const avengers:string[]=['Thor','ironMan','Spiderman'];
    // para destructuracion de objetos se utiliza llaves
    const [diosDelTrueno,hombreDeAcero,hombreAraña] = avengers;
    /* console.log(diosDelTrueno);
    console.log(hombreDeAcero);
    console.log(hombreDeAcero); */

    const extraerArreglo =([diosDelTrueno,hombreDeAcero,hombreAraña]: string[])=>{
        //const {nombre,clave} = avenger;
        console.log(diosDelTrueno);
        console.log(hombreDeAcero);
        console.log(hombreAraña);
    }
    extraerArreglo(avengers);

    



})();


