//let produto = "Açaí";
let preco = 12;
let quantidade = 3;
let dinheiroCliente = 30;

let total = preco * quantidade;

if (quantidade === 0) {
  console.log("escolha uma quantidade.");
} else if (dinheiroCliente >= total) {
  console.log("compra OK.");
} else {
  console.log("dinheiro insuficiente.");
}

let produto = "Milk Shake";
let temComplemento = false;

if (produto === "Milk Shake" && temComplemento) {
  console.log("pedido completo.");
} else if (produto === "Milk Shake" && !temComplemento) {
  console.log("escolha um complemento.");
} else if (produto === "Açaí" || produto === "Cupuaçu") {
  console.log("pedido OK.");
} else {
  console.log("erro inesperado.");
}

let idade = 16;
let temAutorizacao = true;

if (idade >= 18 || temAutorizacao) {
  console.log("bem vindo.");
} else {
  console.log("entrada não permitida.");
}
