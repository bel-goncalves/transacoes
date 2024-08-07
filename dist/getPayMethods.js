export default function getPayMethods(data) {
    const creditCard = data
        ?.filter((value) => value["Forma de Pagamento"] === "Cartão de Crédito")
        .map((value) => value["Forma de Pagamento"]);
    const boleto = data
        ?.filter((value) => value["Forma de Pagamento"] === "Boleto")
        .map((value) => value["Forma de Pagamento"]);
    showPaymentMethod(creditCard, boleto);
}
function showPaymentMethod(value1, value2) {
    const cardId = document.getElementById("creditCard");
    const boletoId = document.getElementById("boleto");
    if (cardId) {
        cardId.innerHTML += ` ${value1.length}`;
    }
    if (boletoId) {
        boletoId.innerHTML += ` ${value2.length}`;
    }
}
//# sourceMappingURL=getPayMethods.js.map