class Animal{
    constructor(nombre,edad, img, comentarios,sonido){
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;

        this.getNombre = ()=> _nombre;
        this.getEdad = ()=> _edad;
        this.getImg = () => _img;
        this.getComentarios = () => _comentarios;
        this.getSonido = () => _sonido;
    }

    get _nombre (){
        return this.getNombre();
    }
    get _edad (){
        return this.getEdad();
    }
    get _img(){
        return this.getImg();
    }
    get _sonido(){
        return this.getSonido();
    }
    set _comentarios(comentarios) {
        return this.getComentarios(comentarios);
    }

}

export default Animal;