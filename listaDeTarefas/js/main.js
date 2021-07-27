//captura o primeiro elemento  do html que tem a classe input-tarefas
const inputTarefa = document.querySelector('.input-tarefa'); 
//captura o primeiro elemento  do html que tem a classe btn-tarefas
const btnTarefa = document.querySelector('.btn-tarefa');
//captura o primeiro elemento  do html que tem a classe tarefas
const tarefas = document.querySelector('.tarefas');

/** cria um elemento html <li>
 * 
 * @returns  retorna o elemento criado
 */
function createLi(){
    const li = document.createElement('li');
    return li;
}
// chama a funçao createTarefa quando a tecla enter (keycode 13) e precionada
inputTarefa.addEventListener('keypress', (e) => {
    if (e.keyCode === 13){ //verifica se enter foi precionada
        if (!inputTarefa.value) return; // verifica se o input esta vazio
        createTarefa(inputTarefa.value);
    }
});
/**limpa o input e coloca em em focus 
 * 
 */
function limpaInput(){
    inputTarefa.value=''; 
    inputTarefa.focus();
}
/**
 * cria um button dentro do li 
 * @param {*} li 
 */
function createBtnApagar(li){
    li.innerHTML += ''; //concatena com oq ja existe dentro do li
    const btnApagar = document.createElement('button'); // cria o elemnto html para variavel
    btnApagar.innerText = 'Delete'; // leva o elemento criado para html
    btnApagar.setAttribute('class','apagar'); 
    btnApagar.setAttribute('title','apagar essa tarefa');
    li.appendChild(btnApagar); // crescenta o botton como um filho  dentro do li
}
/**
 * cria nova tarefa
 * 
 * @param {*} textoInput 
 */
function createTarefa(textoInput){    
    const li = createLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    createBtnApagar(li);
    salvarTarefas();// a
} 
// chama a funçao createTarefa quando clicar no inputTarefa
btnTarefa.addEventListener('click', function(e) {
    if (!inputTarefa.value) return;
    createTarefa(inputTarefa.value);
});

//deleta tarefa criada
document.addEventListener('click', function(e){
    const elemento = e.target;

    if (elemento.classList.contains('apagar')){
        elemento.parentElement.remove();
        salvarTarefas();
    }
});
/**salva tarefa dentro do armazenamento local do navegador
 * 
 */
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const  listaDeTarefas = [];
    
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerHTML;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    // converte o array para string json
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
    

}
/**retorna para array o json
 * 
 */
function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas){
        createTarefa(tarefa);
    }
}


adicionaTarefasSalvas();
