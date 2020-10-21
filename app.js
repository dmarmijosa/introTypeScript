"use strict";
(() => {
    /* class Avenger{
        
        nombre:string;
        equipo: string;
        nombreReal:string;
        
        puedePelear:Boolean;
        peleasGanadas:number
        
        constructor(nombr: string,e:string,equipo:string,nombreReal:string,puedePelear:boolean,peleasGanadas:number){
            this.nombre = nombre
            
        }
    } */
    class Avenger {
        /* nombre:string;
        equipo: string;
        nombreReal:string;
        
        puedePelear:Boolean;
        peleasGanadas:number */
        constructor(nombre, equipo, nombreReal, puedePelear = true, peleasGanadas = 0) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = puedePelear;
            this.peleasGanadas = peleasGanadas;
        }
    }
    //objeto
    const antman = new Avenger('Ant-man', 'Capi');
    console.log(antman);
})();
