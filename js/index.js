document.addEventListener("DOMContentLoaded", () => {
    let URL = 'https://japceibal.github.io/japflix_api/movies-data.json';

    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            buscarPeli(data);
        });
});

let inputBuscador = document.getElementById('inputBuscar');
let botonBuscar = document.getElementById('btnBuscar');
let contenedorLista = document.getElementById('lista');
let mostrarMasInfo = document.getElementById('mostrarMasInfo');

function buscarPeli(array) {
    botonBuscar.addEventListener('click', () => {
        let peliBuscada = inputBuscador.value.toLowerCase();
        console.log(peliBuscada);

        if (peliBuscada.length > 0) {
            let resultadoFiltro = array.filter(element => element.title.toLowerCase().includes(peliBuscada) ||
                element.tagline.toLowerCase().includes(peliBuscada) ||
                element.overview.toLowerCase().includes(peliBuscada) ||
                element.genres.some((genre) => genre.name.toLowerCase().includes(peliBuscada))
            );
            console.log(resultadoFiltro);
            mostrarBusqueda(resultadoFiltro);
        } else {
            alert("Ingrese una película");
        }
    });
}

function mostrarBusqueda(array) {
    array.forEach(element => {
        let title = element.title;
        let tagline = element.tagline;
        let calificacion = element.vote_average;
        let overview = element.overview;
        let stars = '';

        for (let i = 1; i <= calificacion; i++) {
            stars += `<i class="fa fa-star checked"></i>`;
        }

        for (let j = 1; j <= (5 - calificacion); j++) {
            stars += `<i class="fa fa-star"></i>`;
        }

        let listItem = document.createElement('li');
        listItem.innerHTML = `<a class="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" href="#"> <span>${title}</span> <span>${tagline} </span> <strong> ${stars} </strong> </a> `;

        listItem.addEventListener('click', () => {
            cambiarPelicula(element);
        });

        contenedorLista.appendChild(listItem);
    });
}





function cambiarPelicula(pelicula) {
    let titlePelicula = document.getElementById("titlePelicula");
    let generoPelicula = document.getElementById("genero");
    let descriptionPelicula = document.getElementById("desciptionPelicula");

    titlePelicula.textContent = pelicula.title;

    let generos = pelicula.genres.map(genre => genre.name);
    let generoTexto = '';
    generoTexto = generos[0];

    for (let i = 1; i < generos.length; i++) {
        generoTexto += ', ' + generos[i];
    }


    generoPelicula.textContent = generoTexto;
    descriptionPelicula.textContent = pelicula.overview;
}

