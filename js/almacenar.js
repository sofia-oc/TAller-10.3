var array = []

document.addEventListener('DOMContentLoaded', function(){
    let btn = document.getElementById("agregar");
    let contenedor = document.getElementById("contenedor");

        btn.addEventListener('click', function(){
            let item = document.getElementById("item").value;
    
            array.push(item);
            console.log(array);
    
            let lista = JSON.stringify(array);
            localStorage.setItem("TodaLista", lista);


            let htmlContentToAppend = "";
            array.forEach(element => {
        
                htmlContentToAppend += `
                <li>` + element + `</li>`

                contenedor.innerHTML = htmlContentToAppend;
            });
        });


    let limpiar = document.getElementById("limpiar");
    limpiar.addEventListener('click', function(){

    });

})
