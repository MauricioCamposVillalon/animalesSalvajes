import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/Razas.js";
import Animales from "./Consulta.js"


let animalesSeleccion = [];

document.getElementById("btnRegistrar").addEventListener("click", async (e) => {
    e.preventDefault();
    const { animales } = await Animales.getData();
    let nombre = document.getElementById("animal");
    let edad = document.getElementById("edad");
    let comentario = document.getElementById("comentarios");
    let nuevoAnimal;
    if (nombre.value == "Leon") {
        let multimedia = animales.filter(function (animal) {
            return animal.name === "Leon";
        });
        let imgSrc = multimedia[0].imagen;
        let audSrc = multimedia[0].sonido;
        nuevoAnimal = new Leon(
            nombre.value,
            edad.value,
            imgSrc,
            comentario.value,
            audSrc
        );
        multimedia = [];
    } else if (nombre.value == "Lobo") {
        let multimedia = animales.filter(function (animal) {
            return animal.name === "Lobo";
        });
        let imgSrc = multimedia[0].imagen;
        let audSrc = multimedia[0].sonido;
        nuevoAnimal = new Lobo(
            nombre.value,
            edad.value,
            imgSrc,
            comentario.value,
            audSrc
        );
        multimedia = [];
    } else if (nombre.value == "Oso") {
        let multimedia = animales.filter(function (animal) {
            return animal.name === "Oso";
        });
        let imgSrc = multimedia[0].imagen;
        let audSrc = multimedia[0].sonido;
        nuevoAnimal = new Oso(
            nombre.value,
            edad.value,
            imgSrc,
            comentario.value,
            audSrc
        );
        multimedia = [];
    } else if (nombre.value == "Serpiente") {
        let multimedia = animales.filter(function (animal) {
            return animal.name === "Serpiente";
        });
        let imgSrc = multimedia[0].imagen;
        let audSrc = multimedia[0].sonido;
        nuevoAnimal = new Serpiente(
            nombre.value,
            edad.value,
            imgSrc,
            comentario.value,
            audSrc
        );
        multimedia = [];
    } else if (nombre.value == "Aguila") {
        let multimedia = animales.filter(function (animal) {
            return animal.name === "Aguila";
        });
        let imgSrc = multimedia[0].imagen;
        let audSrc = multimedia[0].sonido;
        nuevoAnimal = new Aguila(
            nombre.value,
            edad.value,
            imgSrc,
            comentario.value,
            audSrc
        );
        multimedia = [];
    }

    console.log(animalesSeleccion);
    if (nombre.value && edad.value && comentario.value) {
        animalesSeleccion.push(nuevoAnimal);
        reloadTable();
        nombre.selectedIndex = 0;
        edad.selectedIndex = 0;
        comentario.value = "";;
        let imagenSrc = ``;
        let formato = document.querySelector('#preview');
        formato.innerHTML = imagenSrc;

    } else {
        alert("Faltan datos por llenar");
    }





});

const reloadTable = () => {
    const animalesTemplate = document.getElementById("Animales");
    // const animalesModal = document.getElementById("exampleModal");
    animalesTemplate.innerHTML = "";
    //  animalesModal.innerHTML = "";
    let arreg = [];

    animalesSeleccion.forEach((p, i) => {
        animalesTemplate.innerHTML += `
        <div class = "px-3 pb-2 participante" data-fighter="${p.getNombre()}" >
            <div class = "card">
            <input id="numeroId" name="numeroId" type="hidden" value="${i}">
                <img  type="button" id="infoAni" onclick="modal('${i}')"  class="imagenan card-img-top tamimg" src="/assets/imgs/${p.getImg()}" data-target="#exampleModal"/>
               
                <div type="button" id="btnsonido" onclick="playAudio('${p.getSonido()}')" class="card-body bg-info border-primary"><i class="fa-solid fa-volume-high"></i>
                 </div>
            </div>
         </div> `;
    });

};






window.playAudio = (audio) => {

    const sonido2 = `<audio id="player" class="d-none" src="/assets/sounds/${audio}" autoplay></audio>`;
    let audio2 = document.querySelector('#player');
    audio2.innerHTML = sonido2;

    reloadTable();
}

window.modal = (indice) => {
    console.log(indice);
    let nomb = animalesSeleccion[indice];
    console.log(nomb);
    const imagenSrc = ` 
    <div class="modal-dialog modal-dialog-centered w-25" >
        <div class="modal-content bg-dark">
            <div class="modal-header">
                <button type="button" class="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body ">
                <div class="card border-dark" style="width: 20rem;">
                    <img  class="imagenan p-1" src="/assets/imgs/${nomb.getImg()}"/>
                    <div class="card-body bg-dark border-dark">
                        <h6 class="font-weight-bold text-center text-white p-1">${nomb.getEdad()}</h6>
                        <h6 class="font-weight-bolder text-center text-white font-weight-bold">Comentarios</h6><hr>
                        <p class="card-text text-white">${nomb.getComentarios()}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    $("#exampleModal").modal("toggle");
    let formato = document.querySelector('#exampleModal');
    formato.innerHTML = imagenSrc;
    reloadTable();
}



