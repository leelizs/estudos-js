function saudacao(nome) {
  console.log(`olá, ${nome}. seja bem vindo.`);
}

saudacao("Leonardo");

function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);
console.log(resultado);

function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}

let total = calcularTotal(12, 4);
console.log(`Total: R$ ${total}`);

function cardapio(produto, preco, quantidade) {
  let total = preco * quantidade;
  return `Produto: ${produto} | Total: ${total}`;
}

let mostrarTotal = cardapio("Açaí", 10, 4);
console.log(mostrarTotal);

function pagamentoCardapio(total, dinheiro) {
  if (dinheiro > total) {
    return `Troco: ${dinheiro - total}`;
  } else if (dinheiro === total) {
    return "pagamento realizado. sem troco.";
  } else {
    return "dinheiro insuficiente";
  }
}

console.log(pagamentoCardapio(40, 50));
