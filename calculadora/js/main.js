function criaCalculadora (){    
    this.display = document.querySelector('.display'), 
              
    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };
    
    this.pressionaEnter = ()=> {
        document.addEventListener('keyup', (e) =>{
            if(e.keyCode === 13){
                this.realizaConta();
            }
        });
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const elemento = e.target;    
            if (elemento.classList.contains('btn-num')){
                this.btnParaDisplay(elemento);
            }    
            if(elemento.classList.contains('btn-clear')){
                this.clearDisplay();
            }
            if(elemento.classList.contains('btn-del')){
                this.apagaUm();
            }
            if(elemento.classList.contains('btn-eq')){
                this.realizaConta();
            }    
        });    
    };
    
    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);
            
                if(!conta){
                    alert("conta inválida");
                    return;
                }
                this.display.value = conta;
                
            }catch(e){
                alert("conta inválida");
                return;
            }
        };

        this.btnParaDisplay = (elemento) => {
            this.display.value += elemento.innerText;
            this.display.focus();
        };

        this.clearDisplay = () => {
            this.display.value = '';
        }
        this.apagaUm = () => {
            this.display.value = this.display.value.slice(0,-1);

        }    
}
const calculadora =  new criaCalculadora();
calculadora.inicia();