// crear un getData con algun fetch
document.addEventListener("DOMContentLoaded", (event) => {

})


let inputBuscador = document.getElementById('inputBuscar');
let botonBuscar = document.getElementById('btnBuscar')
let contenedorLista = document.getElementById('lista')
let mostrarMasInfo = document.getElementById('mostrarMasInfo')
let URL = 'https://japceibal.github.io/japflix_api/movies-data.json';

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        buscarPeli(data)
        
    })



function buscarPeli(array) {

    botonBuscar.addEventListener('click', () => {
        let peliBuscada = inputBuscador.value.toLowerCase();
        console.log(peliBuscada)

        if (peliBuscada.length > 0) {
            let resultadoFiltro = array.filter(elemnt => elemnt.title.toLowerCase().includes(peliBuscada) ||
                elemnt.tagline.toLowerCase().includes(peliBuscada) ||
                elemnt.overview.toLowerCase().includes(peliBuscada) ||
                elemnt.genres.some((genre) => genre.name.toLowerCase().includes(peliBuscada))
            )
            console.log(resultadoFiltro)
            mostrarBusqueda(resultadoFiltro)
        }

        else {
            alert("Ingrese una pelicula")
        }
    })

}

function mostrarBusqueda(array) {

    array.forEach(element => {

        let title = element.title;
        let tagline = element.tagline;
        let calificacion = element.vote_average;
        let overview = element.overview
        let stars = '';


        for (let i = 1; i <= calificacion; i++) {
            stars += `<i class="fa fa-star checked"></i>`;
        }
    
        for (let j = 1; j <= (5 - calificacion); j++) {
            stars += `<i class="fa fa-star"></i>`;
        }

        let listItem = document.createElement('li');
        listItem.innerHTML = `<a class="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" href="#"> <span>${title}</span> <span>${tagline} </span> <strong> ${stars} </strong> </a> `

        contenedorLista.appendChild(listItem)

        
    });
    
}



function modificarInfoTop(){
    let titlePelicula = document.getElementById("titlePelicula")
    let desciptionPelicula = document.getElementById("desciptionPelicula")
    let genero = document.getElementById('genero')
}