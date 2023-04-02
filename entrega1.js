// funcion cantidad
function agregarProductos(precioUnitario, prod) {
    let cantidad = prompt(`Ingrese cuantos ${prod} quiere solicitar`);
    let tot = precioUnitario * cantidad;
    alert(`Agregaste ${cantidad} ${prod} al carrito`);
    return tot;
}

class ProdObj {
    constructor(nombre, temporada, color, precio, id) {
        
        this.nombre=nombre;
        this.temporada=temporada;
        this.color=color;
        this.precio=precio;
        this.id=id
    }
}

const pijama1 = new ProdObj("Pijama Dean", "invierno", "blanco", 18700, "1");
const pijama2 = new ProdObj("Pijama Agnes", "invierno", "gris", 20900, "2");
const pijama3 = new ProdObj("Pijama Cala", "invierno", "verde", 15400, "3");
const pijama4 = new ProdObj("Pijama Rose", "verano", "blanco", 16300, "4");
const pijama5 = new ProdObj("Pijama Runge", "verano", "beige", 15700, "5");
const pijama6 = new ProdObj("Pijama Dior", "invierno", "amarillo", 21700, "6");
const pijama7 = new ProdObj("Pijama Rose", "invierno", "rosa", 14900, "7");
const pijama8 = new ProdObj("Pijama Runge", "invierno", "rojo", 20400, "8");
const pijama9 = new ProdObj("Pijama Baru", "verano", "blanco", 16300, "9");
const pijama10 = new ProdObj("Pijama Dean", "verano", "azul", 22700, "10");

// En el futuro se va a crear un metodo para dar de alta nuevos productos
const Productos = [pijama1,pijama2,pijama3,pijama4,pijama5,pijama6,pijama7,pijama8,pijama9,pijama10];
const temporadas = ['todos', 'verano', 'invierno'];


//ciclo por condicion
let total = 0;
let mensaje = prompt('Desea comprar un producto? (s-si / n-no)');
while(mensaje == 's' || mensaje=='S'){
    let filtrado = prompt('Ver todos [1]\nTemporada verano [2]\nTemporada invierno [3]');
    let productosTemporada = [];
    if(filtrado > 1 && filtrado < 4) {
        productosTemporada = Productos.filter(pijama => pijama.temporada == temporadas[filtrado-1]);
    } else {
        productosTemporada = Productos;
    }

    let producto = '';
    for(i = 0; i < productosTemporada.length; i++) {
       producto = producto + `${i+1} - ${productosTemporada[i].nombre} - Precio por unidad: $${productosTemporada[i].precio} \n`;
    } 
    let opcion = prompt(producto);

    if (productosTemporada.length >= opcion && opcion > 0) {
        alert('Seleccionaste ' + productosTemporada[opcion-1].nombre);
        total = agregarProductos(productosTemporada[opcion-1].precio, productosTemporada[opcion-1].nombre) + total;
    } else {
        alert('Codigo Inexistente?');
    }
    mensaje = prompt('Desea agregar mas productos? (s-si / n-no)');
} 

alert('Total $'+total);