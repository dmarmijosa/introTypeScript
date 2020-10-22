(()=>{

    const sumar=(a:number,b:number):number=>a+b;

    const nomnre=():string=>'Hola Danny';


    const obtenerSalario=():Promise<String>=>{
        return new Promise ((res,rej)=>{
            res('Then es para ejecutar cuando todo esta bien');
;
        });
        
    }
    obtenerSalario()
                    .then(a=>console.log(a.toLowerCase()));




    
})();


