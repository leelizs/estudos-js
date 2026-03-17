/*console.log("meu primeiro código.");

let nome = "Leonardo";
let idade = 20;
let estudando = true;

console.log(nome);
console.log(idade);
console.log(estudando);

let comida = "Macarrão com molho";
let cidade = "Itaquaquecetuba";
let anoNascimento = 2005;

console.log(comida);
console.log(cidade);
console.log(anoNascimento);*/

let produto = "Açaí";
let preco = 12;
let quantidade = 4;
let dinheiroCliente = 100;

let total = preco * quantidade;

let troco = dinheiroCliente - total;

/*console.log(`Produto: ${produto}`);
console.log(`Preço Unitário: ${preco}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Total: ${total}`);
console.log(`Cliente Pagou: R$ ${dinheiroCliente}`);*/

if(dinheiroCliente >= total) {
    console.log("Compra realizada!")
    console.log(`Troco: ${troco}`);
} else{
    let falta = total - dinheiroCliente;

    console.log(`Dinheiro insuficiente. Faltam R$ ${falta}`);
}