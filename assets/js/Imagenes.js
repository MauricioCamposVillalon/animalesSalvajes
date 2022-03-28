import Animales from "./Consulta.js"


const seleccionAnimal = document.querySelector('#animal');
seleccionAnimal.addEventListener('click', async (event) => {
    event.preventDefault();
    const { animales } = await Animales.getData();
    const animal1 = document.getElementById("animal").value;
    if (animal1 !== "Seleccione un animal") {
        const imagenesTemplate = animales.filter(function (animal) {
            return animal.name === animal1;
        });
        const imagenSrc = `<img  class="imagenan" src="/assets/imgs/${imagenesTemplate[0].imagen}"/>`;
        const sonidoScr = `<audio id="player" class="d-none" src="/assets/sounds/${imagenesTemplate[0].sonido }" autoplay></audio>`;
        console.log(imagenesTemplate[0].sonido);
        console.log(imagenSrc);
        console.log(sonidoScr);
        let formato = document.querySelector('#preview');
        formato.innerHTML = imagenSrc;
        let audio = document.querySelector('#player');
        audio.innerHTML = sonidoScr;
    }
});

