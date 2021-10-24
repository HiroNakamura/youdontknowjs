document.addEventListener("DOMContentLoaded", function(event){
    console.log('Javascript funcionando');

    /** Declaramos variables **/
    const prrf1 = document.getElementById("prrf1");
    

    /** Declaramos clases **/
    class Fecha extends Date{
        getDia(){
            var dia = this.getDay();
            var result = "";
            switch(dia){
                case 0: result = "Domingo";break;
                case 6: result = "Sábado";break;
                case 5: result = "Viernes";break;
                case 4: result = "Jueves";break;
                case 3: result = "Miércoles";break;
                case 2: result = "Martes";break;
                case 1: result = "Lunes";break;
                default: result = "NO ESPECIFICADO";break;
            }
          return result;
        } 
    }
    
    class Producto{
        constructor(nombre) {
            this._nombre = nombre;
        }
        
        get nombre() {
            return this._nombre;
        }
        
        set nombre(value) {
            this._nombre = value;
        }
    }

    class ProductoX extends Producto{
        constructor(nombre, precio, marca){
            super(nombre);
            this._precio = precio;
            this._marca = marca;
        }

        get marca(){
            return this._marca;
        }
        
        set marca(value){
            this._marca = value;
        }

        get precio(){
            return this._precio;
        }
        
        set precio(value){
            this._precio = value;
        }

        get getInfo(){
            return `ProductoX{ nombre: ${this._nombre}, marca: ${this._marca} , precio: ${this._precio}  }`;
        }

    }

    /** Instanciamos **/
    let myFecha = new Fecha();
    prrf1.innerText = "Hoy es "+myFecha.getDia();

    let myProducto = new Producto('Arroz del monte');
    console.log(myProducto.nombre);
    myProducto.nombre = 'Mole Doña Maria';
    console.log(myProducto.nombre);
    myProducto._nombre = 'Jabon Zote';
    console.log(myProducto.nombre);

    let myProductoX = new ProductoX("Xbox",1000.0,"Microsoft");
    console.log(myProductoX.getInfo);
    

});