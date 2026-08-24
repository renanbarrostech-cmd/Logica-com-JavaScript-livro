// Cria referencia ao form e aos elementos de resposta (pelo seu id)

const frm = document.querySelector('form');
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');
const resp3 = document.querySelector('#outResp3');

// cria um "ouvinte" de evento, acionado quando o botão submit for clicado

frm.addEventListener("submit", (e) => {
   const veiculo = frm.inVeiculo.value; // obtém o valor do campo inVeiculo
   const preco = Number(frm.inPreco.value); // obtém o valor do campo inPreco

   const entrada = preco * 0.50; // calcula o valor da entrada
   const parcela = (preco * 0.50) / 12; // calcula o valor da parcela

   resp1.innerText = `Promoção: ${veiculo}`; // exibe o nome do veículo
    resp2.innerText = `Entrada de R$: ${entrada.toFixed(2)}`; // exibe o valor da entrada
    resp3.innerText = `+ 12x de R$: ${parcela.toFixed(2)}`; // exibe o valor da parcela

    e.preventDefault(); // evita envio do form
})
console.log("Exercício 2.3 - Formulário de Promoção de Veículo");