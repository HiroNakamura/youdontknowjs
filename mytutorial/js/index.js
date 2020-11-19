document.addEventListener("DOMContentLoaded", function(event) {
    console.log('You do not know Javascript !!');

    const TAM = 100;

    
    const btn1 = document.getElementById('muestra1');
    const btn2 = document.getElementById('muestra2');
    const btn3 = document.getElementById('muestra3');
    const btn4 = document.getElementById('muestra4');
    const btn5 = document.getElementById('muestra5');
    const btn6 = document.getElementById('muestra6');
    const btn7 = document.getElementById('muestra7');
    const my_datos = document.getElementById('datos')
    const my_divs = document.getElementsByTagName("div");
    const rest = document.getElementById('rest');
    const datosPublic = document.getElementById('datosPublic');


    function getSuperHeroes(){
        fetch('https://gateway.marvel.com/v1/public/comics?ts=1&apikey=e0ff822bf9a2b56f671ebdbd594d426b&hash=e7b1633389293ca17ddf4c25e983a508')
        .then(response => response.json())
        .then(data =>{
            //console.log('Datos:',data)
            //console.log(JSON.stringify(data));
            console.log('Recorremos:')
            for(let dato of Object.keys(data)){
                var contenido = data[dato];
                console.log(contenido);
            }

        })
        .catch(error=>{
            console.error(`Ha ocurrido una excepcion: ${error}`)
        });
    }



    document.querySelector("h1").addEventListener("mouseover",()=>{
        document.querySelector("h1").setAttribute("class", "iluminar");
        document.querySelector("body").setAttribute("class","fondo");
    });

    document.querySelector("h1").addEventListener("mouseout",()=>{
        document.querySelector("h1").setAttribute("class", "desiluminar");
        document.querySelector("body").removeAttribute("class");
    });

    document.querySelector("h1").addEventListener("click",()=>{
        document.querySelector("h1").textContent="Debes aprender JS!!";
    });

    document.querySelector("h1").addEventListener("dblclick",()=>{
        document.querySelector("h1").textContent="¿Realmente crees que sabes JS?";
    });


    btn1.addEventListener('click',()=>{
        if(btn1.textContent == 'Mostrar'){
            document.getElementById("code1").removeAttribute("style");
            btn1.textContent = 'Ocultar'
        }else{
            document.getElementById("code1").setAttribute("style","display: none;");
            btn1.textContent = 'Mostrar'
        }
    });

    btn2.addEventListener('click',()=>{
        if(btn2.textContent == 'Mostrar'){
            document.getElementById("code2").removeAttribute("style");
            btn2.textContent = 'Ocultar'
        }
        else{
            document.getElementById("code2").setAttribute("style","display: none;");
            btn2.textContent = 'Mostrar'
        }
    });

    btn3.addEventListener('click',()=>{
        if(btn3.textContent == 'Mostrar'){
            document.getElementById("code3").removeAttribute("style");
            btn3.textContent = 'Ocultar'
        }
        else{
            document.getElementById("code3").setAttribute("style","display: none;");
            btn3.textContent = 'Mostrar'
        }
    });

    btn4.addEventListener('click', ()=>{
        if(btn4.textContent == 'Mostrar'){
            document.getElementById("code4").removeAttribute("style");
            btn4.textContent = 'Ocultar'
        }
        else{
            document.getElementById("code4").setAttribute("style","display: none;");
            btn4.textContent = 'Mostrar'
        }
    });

    let mostrar = ()=>{
        let todo;
        for(let div of my_divs){
            todo +='<br/>Id: '+div.id
        }
        todo+="<br/>Cant. de divs: "+my_divs.length;
        return todo;
    };

    btn5.addEventListener('click', ()=>{
        if(btn5.textContent == 'Mostrar'){
            document.getElementById("code5").removeAttribute("style");
            btn5.textContent = 'Ocultar';
            my_datos.innerHTML= 'Etiquetas div:<br/>'+mostrar();          
        }
        else{
            document.getElementById("code5").setAttribute("style","display: none;");
            btn5.textContent = 'Mostrar';
            my_datos.innerHTML=''
        }
    });

    btn6.addEventListener('click', ()=>{
        if(btn6.textContent == 'Mostrar'){
            document.getElementById("code6").removeAttribute("style");
            btn6.textContent = 'Ocultar';    

            var resultado ='';
            rest.innerHTML = 'Datos obtenidos desde API REST (Spring Boot):<br/>'

            fetch('http://localhost:8090/chilaquilsys/libros')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                
                for(let datos in data){
                    resultado = 'Id: '+data[datos].id;
                    resultado += '<br/>Titulo: '+data[datos].titulo;
                    resultado += '<br/>Autor: '+data[datos].autor;
                    resultado += '<br/>Editorial: '+data[datos].editorial;
                    resultado += '<br/>Isbn: '+data[datos].isbn;
                    resultado += '<br/>Paginas: '+data[datos].paginas+"<br/>";
                    console.log('Id:',data[datos].id)
                    console.log('Todo:',resultado)
                    rest.innerHTML += resultado;
                }
                
            });
            
        }
        else{
            document.getElementById("code6").setAttribute("style","display: none;");
            btn6.textContent = 'Mostrar';
        }
    });



    btn7.addEventListener('click', ()=>{
        if(btn7.textContent == 'Mostrar'){
            document.getElementById("code7").removeAttribute("style");
            btn7.textContent = 'Ocultar';   
            getSuperHeroes();       
        }
        else{
            document.getElementById("code7").setAttribute("style","display: none;");
            btn7.textContent = 'Mostrar';
        }
    });
    
    
    
});
