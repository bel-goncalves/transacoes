import fetchData from "./fetchData.js";
import getPayMethods from "./getPayMethods.js";
import getStatus from "./getStatus.js";
import { Purchase } from "./interfaces.js";
import sumValues from "./sumValues.js";

async function handleData() {
  const data = await fetchData<Purchase[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  if (data) {
    sumValues(data);
    getPayMethods(data);
    getStatus(data);
  }
}
handleData();
