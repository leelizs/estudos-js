/*let idade = 16;

if(idade >= 18) {
    console.log("bem vindo.");
} else{
    console.log("não autorizado.");
}*/

/*let nota = 1;

if(nota >= 9) {
    console.log("aprovado. você foi muito bem!");
} else if(nota >= 6) {
    console.log("aprovado.");
} else {
    console.log("reprovado.");
}*/

let dinheiro = 50;

if (dinheiro >= 50) {
  console.log("pode comprar.");
} else {
  console.log("dinheiro insuficiente.");
}

let produto = "Açaí";
let preco = 12;
let quantidade = 4;
let dinheiroCliente = 48;

let total = preco * quantidade;

if (dinheiroCliente > total) {
  let troco = dinheiroCliente - total;
  console.log("compra realizada!");
  console.log(`troco: ${troco}`);
} else if (dinheiroCliente === total) {
  console.log("compra realizada. sem troco.");
} else {
  console.log("dinheiro insuficiente.");
}
