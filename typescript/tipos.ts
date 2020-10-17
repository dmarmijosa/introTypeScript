(function(){
   
    let nombre:String = 'Danny';
    let edad: Number=28;
    let soltero:Boolean = false;

    let mensaje:string= 'Hola';
    let numero: number = 123;
    let booleano: boolean=true;
    let hoy: Date= new Date();

    let cualquierCosa;
    cualquierCosa=mensaje;
    cualquierCosa=numero;
    cualquierCosa=booleano;
    cualquierCosa:hoy;

    let persona={
        nombre:'Danny',
        mensaje:'Hola mundo'
        
    }
    persona={
        nombre: 'Tyler',
        mensaje: 'Hola papá'

    }
    console.log(persona);

    
    
    

    
    
    
    console.log(JSON.stringify({
        nombre,
        edad,
        soltero

    }));

    

})();


