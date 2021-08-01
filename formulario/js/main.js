class ValidaFormulario{
  constructor(){
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }
  eventos(){
    this.formulario.addEventListener('submit', e =>{
      this.handleSubmit(e);
    });
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('formulario nao enviado');
    const camposValidos = this.camposSaoValidos();
    const senhasVAlidas = this.senhasSaoValidas();

    if (camposValidos && senhasVAlidas){
      alert('Formulario enviado');
      this.formulario.submit();
    }
  }
  senhasSaoValidas(){
    let valid = true;

    const senha = this.formulario.querySelectorAll('.senha');
    const repetirsenha = this.formulario.querySelectorAll('.repetir-senha');

    if(senha.value !== repetirsenha.value){
      valid = false;

      this.criaErro(senha,'Compos senha e repetir senha precisar ser iguais.');
      this.criaErro(repetirsenha,'Compos senha e repetir senha precisar ser iguais.');
    }

    if(senha.value.length < 6 || senha.value.value > 12){
      valid = false;

      this.criaErro(senha,'Senha precisa conter entre 6 e 12 caracteres.');
    }

    return valid;
  }

  camposSaoValidos(){
    let valid = true;
    for(let errorText of this.formulario.querySelectorAll('.error-text')){
      errorText.remove();
    }    

    for (let campo of this.formulario.querySelectorAll('.validar')){
      const label = campo.previousElementSibling.innerHTML;
      if(!campo.value){
        this.criaErro(campo,`Campo "${label} nao pode estar em branco."`)
        valid = false;
      }

      if (campo.classList.contains('cpf')){
        if(!this.validaCPF(campo)) valid =false;
      }

      if (campo.classList.contains('usuario')){
        if(!this.validaUsuario(campo)) valid =false;
      }
    }
    return valid;
  }

  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;
    if(usuario.length >12 || usuario.length<3){
      this.criaErro(campo,'usuario precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
      this.criaErro(campo,'Nome de usuario precisa conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  validaCPF(campo){
    const cpf = new ValidaCPF(campo.value)
    if (!cpf.valida()){
      this.criaErro(campo, ' CPF inválido')
      return false;
    }

    return true;
  }

  criaErro(campo,msg){
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
    
  }
}

const valida = new ValidaFormulario();