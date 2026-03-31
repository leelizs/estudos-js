let produtos = [
  { nome: "Açaí", preco: 12 },
  { nome: "Cupuaçu", preco: 10 },
  { nome: "Brigadeiro", preco: 10 },
];

let total = 0;

for (let i = 0; i < produtos.length; i++) {
  console.log(`Produto: ${produtos[i].nome} - R$ ${produtos[i].preco}`);
  total += produtos[i].preco;
}

console.log(`Total: R$ ${total}`);

let carrinho = [
  { nome: "Morango", preco: 9, quantidade: 2 },
  { nome: "Maracujá", preco: 8, quantidade: 2 },
  { nome: "Chocolate", preco: 8, quantidade: 2 },
];

let totalCarrinho = 0;
let maior = 0;
let nomeMaior = "";

for (let i = 0; i < carrinho.length; i++) {
  totalCarrinho += carrinho[i].preco * carrinho[i].quantidade;

  if (carrinho[i].preco > maior) {
    maior = carrinho[i].preco;
    nomeMaior = carrinho[i].nome;
  }
}

console.log(`Produto mais caro: ${nomeMaior} - R$ ${maior} `);
console.log(`Total: ${totalCarrinho}`);

function calcularTotal(compras) {
  let soma = 0;
  for (let i = 0; i < compras.length; i++) {
    soma += compras[i].preco;
  }
  return soma;
}

let compra = [
  { nome: "Óleo 20w50", preco: 46 },
  { nome: "Óleo 10w40", preco: 42 },
  { nome: "Óleo de Corrente", preco: 10 },
];

let totalCompra = calcularTotal(compra);
console.log(`Total: ${totalCompra}`);

let totalSistema = 0;

for (let i = 0; i < carrinho.length; i++) {
  console.log(
    `Item: ${carrinho[i].nome} - Preço: ${carrinho[i].preco} - Qtd: ${carrinho[i].quantidade}`,
  );
  totalSistema += carrinho[i].preco * carrinho[i].quantidade;
}

console.log(`Total: ${totalSistema}`);
