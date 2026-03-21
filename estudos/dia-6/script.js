let frutas = ["Maçã", "Banana", "Uva"];
console.log(frutas[0]);

for (let i = 0; i < frutas.length; i++) {
  console.log(i);
}

let produtos = ["Açaí", "Cupuaçu", "Morango", "Brigadeiro", "Lacta"];

for (let i = 0; i < produtos.length; i++) {
  console.log(produtos[i]);
}

let precos = [10, 15, 20, 5];
let total = 0;

for (let i = 0; i < precos.length; i++) {
  total += precos[i];
}
console.log(`Total: ${total}`);

let busca = "Açaí";
let encontrado = false;

for (let i = 0; i < produtos.length; i++) {
  if (produtos[i] === busca) {
    encontrado = true;
  }
}

if (encontrado === true) {
  console.log("produto encontrado.");
} else {
  console.log("produto não encontrado.");
}

let carrinho = [];
carrinho.push("Açaí");
carrinho.push("Cupuaçu");
carrinho.push("Morango");

for (let i = 0; i < carrinho.length; i++) {
  console.log(carrinho[i]);
}

let contador = 0;

for (let i = 0; i < precos.length; i++) {
  if (precos[i] > 10) {
    contador++;
  }
}

console.log(contador);
