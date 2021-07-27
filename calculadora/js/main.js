// criando claculadora  usando constructor function

function criaCalculadora (){    
    //captura os elementos do html q esta na com a classe display
    this.display = document.querySelector('.display'), 
    
    // inicia aplicação
    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };
    

    // quando apertar enter chama a função que realiza soma 
    this.pressionaEnter = ()=> {
        document.addEventListener('keyup', (e) =>{
            if(e.keyCode === 13){
                this.realizaConta();
            }
        });
    };

    
    // verifica quando o botao e clicado
    this.cliqueBotoes = () => {
        document.addEventListener('click', (e) => {
            const elemento = e.target;    
            // se for um numero leva o elemento para o display
            if (elemento.classList.contains('btn-num')){
                this.btnParaDisplay(elemento);
            }    
            // deleta todo input se clicar no C(tag da calculadora q apaga )
            if(elemento.classList.contains('btn-clear')){
                this.clearDisplay();
            }
            //deleta do input o ultimo caractere qnd precionado a tecla << da claculadora
            if(elemento.classList.contains('btn-del')){
                this.apagaUm();
            }
            // realizaConta quando aperta no botao = da calculadora    
            if(elemento.classList.contains('btn-eq')){
                this.realizaConta();
            }    
        });    
    };
    
    //realiza a conta com função nativa do java script eval
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

        //função que move botao precionado para input
        this.btnParaDisplay = (elemento) => {
            this.display.value += elemento.innerText;
            this.display.focus();
        };

        // função que deleta todo input
        this.clearDisplay = () => {
            this.display.value = '';
        }

        // função que apaga ultimo caractere do input
        this.apagaUm = () => {
            this.display.value = this.display.value.slice(0,-1);

        }    
}

// criando calculadora
const calculadora =  new criaCalculadora();
calculadora.inicia();