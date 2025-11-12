
// Componente mejorado

const productos = [
    {nombre:"escudo", precio:20, img:"https://upload.wikimedia.org/wikipedia/commons/4/48/Pumas_de_la_UNAM.png"},
    {nombre:"escudo", precio:20, img:"https://upload.wikimedia.org/wikipedia/commons/4/48/Pumas_de_la_UNAM.png"},
    {nombre:"escudo", precio:20, img:"https://upload.wikimedia.org/wikipedia/commons/4/48/Pumas_de_la_UNAM.png"},
    {nombre:"escudo", precio:20, img:"https://upload.wikimedia.org/wikipedia/commons/4/48/Pumas_de_la_UNAM.png"},
    {nombre:"playera", precio:2000, img:"https://assets.ejecentral.com.mx/dims4/default/15946ee/2147483647/strip/true/crop/990x1079+0+0/resize/1321x1440!/format/webp/quality/90/?url=https%3A%2F%2Fk3-prod-ejecentral.s3.us-west-2.amazonaws.com%2Fbrightspot%2F47%2Fd1%2F5fdefc024460883494670c7a41a0%2F4ed07e97-6a3e-43af-b846-c87e5ad96661.jpeg"}
];

const contenedor = document.getElementById("contenedor");

productos.forEach( prod =>{
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
        <img src="${prod.img}" alt="${prod.nombre}">
        <h3>${prod.nombre}</h3>
        <p>${prod.precio}</p>
        <button>Agregar</button>
    `;

    contenedor.appendChild(card);
});


