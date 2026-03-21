let produto = {
  nome: "Açaí",
  preco: 12,
  quantidade: 3,
};

console.log(`Produto: ${produto.nome}`);
console.log(`Valor: ${produto.preco}`);

let produtos = [
  { nome: "Morango", preco: 12 },
  { nome: "Cupuaçu", preco: 10 },
  { nome: "Milk Shake", preco: 15 },
];

console.log(`Produto: ${produtos[1].nome}`);

let cliente = {
  nome: "Leonardo",
  idade: 20,
  saldo: 200,
};

console.log(`Nome: ${cliente.nome}`);
console.log(`Saldo: ${cliente.saldo}`);

let pedido = {
  produto: "Brigadeiro",
  preco: 12,
  quantidade: 3,

  calcularTotal: function () {
    return this.preco * this.quantidade;
  },
};

console.log(`Produto: ${pedido.produto} | Total: ${pedido.calcularTotal()}`);

for (let i = 0; i < produtos.length; i++) {
  console.log(`Produto: ${produtos[i].nome}`);
  console.log(`Valor: ${produtos[i].preco}`);
}

let total = 0;

let carrinho = [
  { nome: "Morango", preco: 12, quantidade: 2 },
  { nome: "Cupuaçu", preco: 10, quantidade: 2 },
  { nome: "Milk Shake", preco: 15, quantidade: 2 },
  { nome: "Açaí", preco: 13, quantidade: 2 },
  { nome: "Brigadeiro", preco: 9, quantidade: 2 },
];

for (let i = 0; i < carrinho.length; i++) {
  let item = carrinho[i].nome;
  let preco = carrinho[i].preco;
  let quantidade = carrinho[i].quantidade;
  let subtotal = preco * quantidade;

  total += preco * quantidade;

  console.log(`${item} - ${quantidade}x - R$ ${subtotal}`);
}

console.log(`Total: ${total}`);
