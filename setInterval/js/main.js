/**transforma os segundos em time
 * 
 * @param {*} segundos 
 * @returns 
 */
function getTimeFromSecond(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR',{
         hour12:false,
         timeZone: 'UTC'
    });
}

const relogio = document.querySelector('.relogio');
const btnIniciar = document.querySelector('.iniciar');
const btnPausar = document.querySelector('.pausar');
const btnReiniciar = document.querySelector('.reiniciar');
let segundos = 0; 
let timer;

/**
 * inicia o contador  usando setInterval formatando com getTimeFronsecond()
 */
function iniciaRelogio(){
     timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeFromSecond( segundos);
    },1000);
    
}
// captura qualquer coisa que for clicada no documento
document.addEventListener('click', function(e){
    const elemento = e.target;

    //se o elemento capturado tiver a classe reiniciar
    if(elemento.classList.contains('reiniciar')){
        clearInterval(timer); // limpa a função setInterval com clearInterval
        relogio.classList.remove('pausado'); //remove classe do css
        relogio.innerHTML= '00:00:00'; // formata o html
        segundos = 0; // zera varialvel de controle do tempo em segundos
    }

    //se o elemento capturado tiver a classe iniciar
    if(elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado'); 
        clearInterval(timer);
        iniciaRelogio(); // iniciar relogio chamando iniciaRelogio
    }

    //se o elemento capturado tiver a classe pausar
    if(elemento.classList.contains('pausar')){
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
})