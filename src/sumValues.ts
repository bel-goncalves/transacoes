import { Purchase } from "./interfaces.js";

export default function sumValues(data: Purchase[]): number {
  const total = data.reduce((acum: number, value: Purchase) => {
    const formatValue = Number(
      value["Valor (R$)"].replace(".", "").replace(",", ".").replace("-", "0")
    );
    return acum + formatValue;
  }, 0);
  showTotal(total);
  return total;
}

function showTotal(total: number) {
  const totalValues = document.getElementById("totalValues");
  if (totalValues) {
    totalValues.innerHTML += ` R$ ${total}`;
  }
}
