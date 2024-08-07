import { Purchase } from "./interfaces.js";

export default function getPayMethods(data: Purchase[]) {
  const creditCard = data
    ?.filter(
      (value: Purchase) => value["Forma de Pagamento"] === "Cartão de Crédito"
    )
    .map((value: Purchase) => value["Forma de Pagamento"]);

  const boleto = data
    ?.filter((value: Purchase) => value["Forma de Pagamento"] === "Boleto")
    .map((value: Purchase) => value["Forma de Pagamento"]);

  showPaymentMethod(creditCard, boleto);
}

function showPaymentMethod(value1: string[], value2: string[]) {
  const cardId = document.getElementById("creditCard");
  const boletoId = document.getElementById("boleto");
  if (cardId) {
    cardId.innerHTML += ` ${value1.length}`;
  }
  if (boletoId) {
    boletoId.innerHTML += ` ${value2.length}`;
  }
}
