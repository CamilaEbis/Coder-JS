// funcion cantidad
function agregarProductos(precioUnitario, prod) {
    let cantidad = prompt(`Ingrese cuantos ${prod} quiere solicitar`);
    let tot = precioUnitario * cantidad;
    alert(`Agregaste ${cantidad} ${prod} al carrito`);
    return tot;
}

//ciclo por condicion
let total = 0;
let mensaje = prompt('Desea comprar un producto? (s-si / n-no)');
while(mensaje == 's' || mensaje=='S'){
    let producto = prompt('1-Pijama verano\n2-Pijama Invierno\n3-Camison\n4-Conjunto\n5-Lenceria');
    switch(producto){
        case '1':
            alert('Seleccionaste Pijama Verano ... $12000');
            total = agregarProductos(12000, 'Pijama de verano') + total;
            break;
        case '2':
            alert('Seleccionaste Pijama Invierno ... $15000');
            total = agregarProductos(15000, 'Pijama de invierno') + total;
            break;
        case '3':
            alert('Seleccionaste Camison ... $9000');
            total = agregarProductos(9000, 'Camison') + total;
            break;
        case '4':
            alert('Seleccionaste Conjunto al carrito ... $10000');
            total = agregarProductos(10000, 'Conjunto') + total;
            break;
        case '5':
            alert('Seleccionaste Lenceria al carrito ... $8000');
            total = agregarProductos(8000, 'Lenceria') + total;
            break;
        default:
            alert('Codigo Inexistente?');
            break;
    }
    mensaje = prompt('Desea agregar mas productos? (s-si / n-no)');
} 

alert('Total $'+total);