import { Purchase } from "./interfaces";

export default function fillTable(data: Purchase[]) {
  const table = document.querySelector("#purchaseTable tbody");
  if (table) {
    data.forEach((value) => {
      table.innerHTML += ` 
          <tr>
            <td>${value.Nome}</td>
            <td>${value.Email}</td>
            <td>$ ${value["Valor (R$)"]}</td>
            <td>${value["Forma de Pagamento"]}</td>
            <td>${value.Status}</td>
          </tr>
        `;
    });
  }
}
