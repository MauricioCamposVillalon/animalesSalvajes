import Animal from "./Animal.js";

class Leon extends Animal{
    constructor(nombre,edad, img, comentarios,sonido){
        super(nombre,edad, img, comentarios,sonido)
    }
    Rugir (){
        let sonido = this.getSonido();
        this.sonido(sonido);
    }
}
class Lobo extends Animal{
    constructor(nombre,edad, img, comentarios,sonido){
        super(nombre,edad, img, comentarios,sonido)
    }
    Aullar (){
        let sonido = this.getSonido();
        this.sonido(sonido);
    }
}
class Oso extends Animal{
    constructor(nombre,edad, img, comentarios,sonido){
        super(nombre,edad, img, comentarios,sonido)
    }
    Grunir (){
        let sonido = this.getSonido();
        this.sonido(sonido);
    }
}
class Serpiente extends Animal{
    constructor(nombre,edad, img, comentarios,sonido){
        super(nombre,edad, img, comentarios,sonido)
    }
    Sisear (){
        let sonido = this.getSonido();
        this.sonido(sonido);
    }
}
class Aguila extends Animal{
    constructor(nombre,edad, img, comentarios,sonido){
        super(nombre,edad, img, comentarios,sonido)
    }
    Chillar (){
        let sonido = this.getSonido();
        this.sonido(sonido);
    }
}
export{Leon,Lobo,Oso,Serpiente,Aguila};