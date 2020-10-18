(()=>{
    //l;as interfaces permiten saber el tipo 
    //de datos que deberan ir obliatoriamente
    interface Xmen{
        nombre: string,
        edad:number,
        poder?:string
    }
    const enviarMision=(xmen:Xmen)=>{
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    }
    const enviarCuartel=(xmen:Xmen)=>{
        console.log(`Enviando a ${xmen.nombre} a la mision`);
    }

    const wolverine: Xmen = {
        nombre: 'Logan',
        edad: 60
    }
    enviarMision(wolverine);
    enviarCuartel(wolverine);










    
})();


