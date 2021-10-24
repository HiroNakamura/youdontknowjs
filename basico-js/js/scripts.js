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

    /** Instanciamos **/
    let myFecha = new Fecha();
    prrf1.innerText = "Hoy es "+myFecha.getDia();



});
