class ProdObj {
    constructor(nombre, temporada, color, precio, id, imagen) {
        
        this.nombre=nombre;
        this.temporada=temporada;
        this.color=color;
        this.precio=precio;
        this.id=id;
        this.imagen=imagen;
    }
}

const pijama1 = new ProdObj("Pijama Dean", "invierno", "blanco", 18700, "1", "./imagen/beige.jpg");
const pijama2 = new ProdObj("Pijama Agnes", "invierno", "gris", 20900, "2", "./imagen/gris.jpg");
const pijama3 = new ProdObj("Pijama Cala", "invierno", "verde", 15400, "3", "./imagen/verde.jpg");
const pijama4 = new ProdObj("Pijama Rose", "verano", "blanco", 16300, "4", "./imagen/sombrero.jpg");
const pijama5 = new ProdObj("Pijama Runge", "verano", "beige", 15700, "5","./imagen/beige.jpg");
const pijama6 = new ProdObj("Pijama Dior", "invierno", "bordo", 21700, "6", "./imagen/bordo.jpg");
const pijama7 = new ProdObj("Pijama Rose", "invierno", "rosa", 14900, "7", "./imagen/rosa.jpg");
const pijama8 = new ProdObj("Pijama Runge", "invierno", "rojo", 20400, "8", "./imagen/bordo.jpg");
const pijama9 = new ProdObj("Pijama Baru", "verano", "blanco", 16300, "9", "./imagen/gris.jpg");
const pijama10 = new ProdObj("Pijama Dean", "verano", "azul", 22700, "10", "./imagen/verde.jpg");

const Productos = [pijama1,pijama2,pijama3,pijama4,pijama5,pijama6,pijama7,pijama8,pijama9,pijama10];


