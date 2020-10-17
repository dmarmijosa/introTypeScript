const miFuncion = function (a:string) {
    return a;
    

}

const miFuncionF = (a:string)=>{
    return a.toUpperCase();

}
const sumarN=function(a:number,b:number){
    return a+b;
}
const sumarN2=(a:number,b:number)=> a+b;

/* console.log(miFuncion('normal'));
console.log(miFuncionF('normal'));
console.log(sumarN2(2,6)); */
const hulk={
    nombre: 'hulk',
    smash(){
        setTimeout(function(){

        },1000);
        
        console.log(`${this.nombre} smash!!`);
    }
}
hulk.smash();