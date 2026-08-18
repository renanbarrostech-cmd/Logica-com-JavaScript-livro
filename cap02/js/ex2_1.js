// cria referencia ao form e ao elemento h3 (onde será exibido a respota)
const frm = document.querySelector("form");
const resp = document.querySelector("h3");

// cria um ouvinte de evento para o evento submit do form
frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value; // obtém o nome digitado no form
    resp.innerText = `Olá ${nome}, seja bem-vindo(a)!`; // exibe a resposta no h3
    e.preventDefault(); // evita o envio do form
})