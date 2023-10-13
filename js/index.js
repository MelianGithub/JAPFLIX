// crear un getData con algun fetch
document.addEventListener("DOMContentLoaded", (event) => {

})


let inputBuscador = document.getElementById('inputBuscar');
let botonBuscar = document.getElementById('btnBuscar')
let contenedorLista = document.getElementById('lista')
let URL = 'https://japceibal.github.io/japflix_api/movies-data.json';

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        buscarPeli(data)

    })



// crear una funcion mostrarBusqueda que filtre con el input y muestre los resulltados

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

        let listItem = document.createElement('li')
        listItem.innerHTML = `<span>${title}</span> <span>${tagline} </span> <strong>${calificacion} </strong> `

        contenedorLista.appendChild(listItem)

    });

}