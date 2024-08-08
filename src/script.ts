import fetchData from "./fetchData.js";
import getPayMethods from "./getPayMethods.js";
import getStatus from "./getStatus.js";
import { Purchase } from "./interfaces.js";
import sumValues from "./sumValues.js";
import { parse, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";

async function handleData() {
  const data = await fetchData<Purchase[]>(
    "https://api.origamid.dev/json/transacoes.json"
  );
  if (data) {
    console.log(data);
    const date = parse(data[0].Data, "dd/MM/yyyy HH:mm", new Date(), {
      locale: ptBR,
    });
    console.log(date);

    getDay;

    sumValues(data);
    getPayMethods(data);
    getStatus(data);
  }
}
handleData();
