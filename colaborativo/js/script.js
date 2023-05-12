function procesarrespuestas() {
    let total =5
    let puntos =0;
    
    let myForm = document.forms["formulario"];
    let respuesrascorrectas= ["a","d","a","b","c"];
    
    for (let i =1; i <= total; i++) {
        if (myForm["r"+ i].value == null ||
            myForm["r" +i].value == ''){
            alert('Tienes que responder todas las preguntas');
            return false;
            } else {
             if (myForm["r" + i].value === respuesrascorrectas[i - 1])
             puntos++;  
             
            }    
            
            
    
    }
    let resultado = document.getElementById('resultado')
    resultado.innerHTML='Obtuviste  ' +puntos+ ' puntos de  ' + total + '  posibles ';
    return false;
    
    }
    function procesarRespuestas(){
        let total = 5;
        let puntos = 0;
    
        let myForm = document.forms["formulario"];
        let respuestasCorrectas = ["c", "a", "d", "b", "c"];
    
        for(let i = 1; i<= total; i++){
            if(myForm["r"+i].value == null || myForm["r"+i].value == ''){
                alert('Favor responder todas las pregutas');
                window.location.reload()
                return false;
            }else{
                if(myForm["r"+i].value === respuestasCorrectas[i - 1]){
                    puntos++;
                }
            }
        }
    
        let resultado = document.getElementById('resultado');
    
        resultado.innerHTML = 'Obtuviste ' + puntos + ' puntos de ' + total + ' posibles ';
        return false;
    }