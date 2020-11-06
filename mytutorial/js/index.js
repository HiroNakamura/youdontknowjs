document.addEventListener("DOMContentLoaded", function(event) {
    console.log('You do not know Javascript !!');

    const TAM = 100;

    
    const btn1 = document.getElementById('muestra1');
    const btn2 = document.getElementById('muestra2');
    const btn3 = document.getElementById('muestra3');
    const btn4 = document.getElementById('muestra4');
    const btn5 = document.getElementById('muestra5');
    const my_datos = document.getElementById('datos')
    const my_divs = document.getElementsByTagName("div");

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

    
    
    
});
