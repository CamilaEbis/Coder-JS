let carrito = [];
let articuloCartas = document.getElementById('cartas');
const temporadas = ['todos', 'verano', 'invierno'];
let finalizarBtn = document.getElementById("finalizar");
let anterioresBtn = document.getElementById("comprasanteriores");

obtenerUsuario();

function filtrarPorTemp(temporada) {
    if(temporada > 1 && temporada < 4) {
        return renderizarLista(Productos.filter(pijama => pijama.temporada == temporadas[temporada-1]));
    } else {
        return renderizarLista(Productos);
    }
}

function renderizarLista(productosFiltrados) {
    for(const producto of productosFiltrados){
        let carta = document.createElement('div');
        carta.className = 'card col-md-2';
        carta.innerHTML = `
            <img class="card-img-top" src=${producto.imagen} alt="img del pijama">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">$ ${producto.precio}</p>
                <button id='btn${producto.id}' class="btn btn-success">Agregar al carrito</button>
            </div>
        `;
    articuloCartas.append(carta);
    }
    
    productosFiltrados.forEach((producto)=>{
        document.getElementById(`btn${producto.id}`).addEventListener('click',()=>{
            agregarACarrito(producto);
        });
    });
}

function renderizarProductos(){
    
    document.getElementById(`option1`).addEventListener('click',()=>{
        articuloCartas.innerHTML = '';
        filtrarPorTemp(1);
    });

    document.getElementById(`option2`).addEventListener('click',()=>{
        articuloCartas.innerHTML = '';
        filtrarPorTemp(2);
    });

    document.getElementById(`option3`).addEventListener('click',()=>{
        articuloCartas.innerHTML = '';
        filtrarPorTemp(3);
    });
}
renderizarProductos();

function agregarACarrito(prodAAgregar){
    carrito.push(prodAAgregar);
    Toastify({
        text: `Agregaste ${prodAAgregar.nombre} al carrito!`,
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)'
        }
    }).showToast();

//    alert(`Agregaste ${prodAAgregar.nombre} al carrito!`);
    
    //tabla de carrito
    document.getElementById('tablabody').innerHTML += `
        <tr>
            <td>${prodAAgregar.nombre}</td>
            <td>${prodAAgregar.precio}</td>
        </tr>
    `;

    //total
    let totalCarrito = carrito.reduce((acumulador,producto)=>acumulador+producto.precio,0)
    document.getElementById('total').innerText='Total a pagar: $ '+totalCarrito;
    saveLocal();
}


//finalizar compra
finalizarBtn.onclick=()=>{
    carrito=[];
    document.getElementById('tablabody').innerHTML='';
    document.getElementById('total').innerText='Total a pagar: $ ';
    Toastify({
        text: "Gracias por tu compra!",
        duration: 3000,
        gravity: 'top',
        position: 'center',
        style: {
            background: 'linear-gradient(to right, #00b09b, #96c93d)'
        }
    }).showToast();
}

const saveLocal =()=>{
    localStorage.setItem("anteriores", JSON.stringify(carrito));
};

const recuperarCompras = JSON.parse(localStorage.getItem("anteriores"));
anterioresBtn.onclick=()=>{

    let tablaComprasAnteriores = document.getElementById('tablaCompraRecuperada');
    tablaComprasAnteriores.innerHTML = '';
    for(const producto of recuperarCompras){
        tablaComprasAnteriores.innerHTML += `
        <tr>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
        `;
    }
}
console.log(recuperarCompras);

//Api
function obtenerUsuario(){
    let userID = Math.floor((Math.random() * 10) + 1);
    let dameUsuario=`https://jsonplaceholder.typicode.com/users/${userID}`;
    fetch(dameUsuario)
        .then((respuesta) => respuesta.json())
        .then((userData) => {

            document.getElementById('MensajeUsuario').innerHTML+=`
                <p>Hola: ${userData.name}</p>
                <p>usuario: ${userData.username}</p>
                <p>mail: ${userData.email}</p>
            `;
        }) 
}


