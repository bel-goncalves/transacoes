import { Purchase } from "./interfaces";

export default function getStatus(data: Purchase[]) {
  const statusList = data
    ?.filter((value: Purchase) => value.Status)
    .map((value: Purchase) => value.Status);

  const paid = statusList?.filter((value) => value.includes("Paga"));
  const awaiting = statusList?.filter((value) => value.includes("Aguardando"));
  const reversed = statusList?.filter((value) => value.includes("Estornada"));
  const refused = statusList?.filter((value) => value.includes("Recusada"));

  showStatus(paid, awaiting, reversed, refused);
  return statusList;
}

function showStatus(
  paid: string[],
  awaiting: string[],
  reversed: string[],
  refused: string[]
) {
  const status = document.getElementById("status");
  if (status) {
    status.innerHTML = `
    <li>Paga: ${paid.length}</li>
    <li>Aguardando pagamento: ${awaiting.length}</li>
    <li>Estornada: ${reversed.length}</li>
    <li>Recusada pela operadora do cartão: ${refused.length}</li>
    `;
  }
}
