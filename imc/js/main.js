// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

/** previne default do submit para nao dar reload 
 * na pagina quando clicar no botao enviar
 * 
 */
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);
    //
  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResultado(msg, true);
});


/**cria um lista com paramentros do imc e verifica o nivel do imc
 * 
 * @param {*} imc 
 * @returns 
 */
function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}
/**calcula o imc baseado no peso e altura 
 * 
 * @param {*} peso 
 * @param {*} altura 
 * @returns 
 */
function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

/**cria um elemento <p> no html
 * 
 * @returns p
 */
function criaP () {
  const p = document.createElement('p');
  return p;
}

/**seta o resultado e verifica se é valido 
 * 
 * @param {*} msg 
 * @param {*} isValid 
 */
function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}
