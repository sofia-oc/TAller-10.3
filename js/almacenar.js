const itemParaAgregar = document.getElementById("item");
const btnAgregar = document.getElementById("agregar");
const btnLimpiar = document.getElementById("limpiar");
const contenedor = document.getElementById("contenedor");
let listaDeItems = JSON.parse(localStorage.getItem("ListaItems")) || []; 


// Función que actualiza el contenido de la lista
function actualizar() {
    contenedor.innerHTML = ""; 
    
    // Recorre la lista de items y los agrega al contenedor como elementos 'li'
    listaDeItems.forEach(element => {
        const li = document.createElement("li");

        li.textContent = element;
        contenedor.appendChild(li);
    });
}

// Función para agregar un nuevo item a la lista
function agregar() {
    const nuevoItem = itemParaAgregar.value;
    
    // Agrega el nuevo item a la lista y actualiza el localStorage
    listaDeItems.push(nuevoItem);
    localStorage.setItem("ListaItems", JSON.stringify(listaDeItems));
        
    actualizar();
    
    // Limpia el input después de agregar el item
    itemParaAgregar.value = "";
}

// Función para limpiar la lista
function limpiar() {

    localStorage.removeItem("ListaItems"); // Elimina la lista del localStorage
    listaDeItems = []; // Vacia la lista en memoria
    
    actualizar(); 
}

document.addEventListener("DOMContentLoaded", function(){
    
    btnAgregar.addEventListener("click", agregar);
    btnLimpiar.addEventListener("click", limpiar);
    actualizar();

});