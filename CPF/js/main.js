function ValidaCPF (cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable:true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');//uma expressão regular que remove caracteres
        }
    });
}


ValidaCPF.prototype.valida = function(){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.lenght !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0,-2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCPF = cpfParcial +digito1 +digito2 ;
    return novoCPF === this.cpfLimpo;

}

validaCPF.prototype.criaDigito = function(cpfParcial){
    const cpfArray = array.form(cpfParcial);
    const regressivo = cpfArray.lenght +1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo --;
        return ac;
    },0);

    const digito = 11 - (total %11); 
    return digito > 9 ? '0' : String(digito);
}


const cpf = new ValidaCPF('705.484.450-52');