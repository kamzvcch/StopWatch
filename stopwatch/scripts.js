hr = document.querySelector('#hour');
mt = document.querySelector('#minute');
sd = document.querySelector('#second');


let milisegundo = 0;
let segundo = 0;
let minuto = 0;
let hora = 0;



function timer (parar) { 
    
    for(let milisegundo = 0; milisegundo < 1000; milisegundo++) {
            setInterval(() => {

            ms = document.querySelector('#millisecond');
    
            milisegundo++;
                
            if (milisegundo >= 1000) {
                segundo++;
                sd.innerHTML = segundo;
                milisegundo = 0;
            }
            if (segundo >= 60) {
                minuto++;
                mt.innerHTML = minuto;
                segundo = 0;
            }
            if (minuto > 60) {
                hora++;
                hr.innerHTML = hora;
                minuto = 0;  
            }
            
            pause = document.querySelector('#stop');

            pause.addEventListener("click", function () {
                milisegundo = 0;
                segundo = 0;
                minuto = 0;
                hora = 0;                
            })

            reset = document.querySelector('#reset');

            reset.addEventListener("click", function () {
                milisegundo = 0;
                segundo = 0;
                minuto = 0;
                hora = 0;
                sd.innerHTML = segundo;
                mt.innerHTML = minuto;
                hr.innerHTML = hora;               
            })

        }, 1000);
    }
}

start = document.querySelector('#start');

start.addEventListener("click", function(){
    timer();
})
