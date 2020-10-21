(()=>{

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
    class Avenger{
        
        /* nombre:string;
        equipo: string;
        nombreReal:string;
        
        puedePelear:Boolean;
        peleasGanadas:number */
        
        constructor(public nombre:string,
                    public equipo: string,
                    public nombreReal?: string,
                    public puedePelear: boolean = true,
                    public peleasGanadas: number=0){}
    }

    //objeto
    const antman = new Avenger('Ant-man','Capi');
    console.log(antman);





    
})();


