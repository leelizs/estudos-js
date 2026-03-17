let produto = "Açaí";

switch (produto) {
  case "Açaí":
    console.log("R$ 12");
    break;

  case "Cupuaçu":
    console.log("R$ 10");
    break;

  case "Milk Shake":
    console.log("R$ 15");
    break;

  default:
    console.log("produto não existe.");
}

let dia = 1;

switch (dia) {
  case 1:
    console.log("domingo.");
    break;

  case 2:
    console.log("segunda.");
    break;

  case 3:
    console.log("terça.");
    break;

  case 4:
    console.log("quarta.");
    break;

  case 5:
    console.log("quinta.");
    break;

  case 6:
    console.log("sexta.");
    break;

  case 7:
    console.log("sábado.");
    break;

  default:
    console.log("dia inválido.");
}

let tamanho = "M";

console.log(`Produto escolhido: ${produto}`);

switch (produto) {
  case "Açaí":
    switch (tamanho) {
      case "P":
        console.log("Total: R$10");
        break;
      case "M":
        console.log("Total: R$12");
        break;
      case "G":
        console.log("Total: R$15");
        break;
      default:
        console.log("Tamanho inválido.");
    }
    break;

  case "Milk Shake":
    switch (tamanho) {
      case "P":
        console.log("Total: R$8");
        break;
      case "M":
        console.log("Total: R$10");
        break;
      case "G":
        console.log("Total: R$12");
        break;
      default:
        console.log("Tamanho inválido.");
    }
    break;

  default:
    console.log("Produto inválido.");
}
