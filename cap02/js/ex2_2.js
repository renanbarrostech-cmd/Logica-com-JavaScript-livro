// cria referencia ao form e aos elementos h3 e h4 (Resposta)
const frm = document.querySelector('form');
const resp1 = document.querySelector('h3');
const resp2 = document.querySelector('h4');


// cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value; // obtém o valor do campo inTitulo
    const duracao = Number(frm.inDuracao.value); // obtém o valor do campo inDuracao

    const horas = Math.floor(duracao / 60); // arredonda para baixo o resultado da divisão, ou seja, as horas
    const minutos = duracao % 60; // obtém o resto da divisão, ou seja, os minutos

    resp1.innerText = titulo; // exibe o título do filme
    resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`; // exibe a duração do filme

    e.preventDefault(); // evita envio do form

    
})
