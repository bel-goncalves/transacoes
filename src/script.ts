import fetchData from "./fetchData.js";
import { Purchase } from "./interfaces.js";
import sumValues from "./sumValues.js";

async function handleData() {
  const data = await fetchData<Purchase[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  if (data) {
    sumValues(data);
    console.log(sumValues(data));
  }
}
handleData();
