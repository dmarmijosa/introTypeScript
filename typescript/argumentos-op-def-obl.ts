(function(){

//parametros obligatorios
function activar(quien:string){

}
//parametros opcional
function activar2(quien:string, objeto: string ="Batoiseñal"){
    console.log(`${quien} activo ${objeto}`);
}
//parametros por defecto y opcion
function activar3(  quien:string, 
                    momento?: string,
                    objeto: string ="Batoiseñal"){
    if(momento){
        console.log(`${quien} activo la ${objeto} ${momento}`);
    }else{
        console.log(`${quien} activo la ${objeto}`);
    }

}

activar3("Danny","batiseñal","tarde");

})();


