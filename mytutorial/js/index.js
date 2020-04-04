document.addEventListener("DOMContentLoaded", function(event) {
    console.log('You do not know Javascript !!');

    const TAM = 100;
    
    const btn1 = document.getElementById('muestra1');
    const btn2 = document.getElementById('muestra2');

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


    
    
});
