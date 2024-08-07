import fetchData from "./fetchData.js";
import { Purchase } from "./interfaces.js";

async function handleData() {
  const data = await fetchData<Purchase[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  console.log(data);
  data?.forEach((i) => console.log(i));
}
handleData();
