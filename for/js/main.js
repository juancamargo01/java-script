const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

// seleciona primeira tag que tem essa class e captura para variavel container
const container = document.querySelector('.container');
// cria o elemento div sem colocar ela  no html 
 const div = document.createElement('div');

//percorro todos elementos 
 for (let i = 0 ; i < elementos.length; i++) {
   let {tag, texto} = elementos[i]; //descontrói o o
   let tagCriada = document.createElement(tag); // cria a tag 
   tagCriada.innerHTML = texto; //coloca texto dentro da taga criada
   div.appendChild(tagCriada); // joga a tag com texto dentro da div cirada na linha 11
 }

 container.appendChild(div);// joga  a div dentro do container capturado do html
