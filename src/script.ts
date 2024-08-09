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

    const daysCount: { [key: string]: number } = {
      Domingo: 0,
      "Segunda-feira": 0,
      "Terca-feira": 0,
      "Quarta-feira": 0,
      "Quinta-feira": 0,
      "Sexta-feira": 0,
      Sábado: 0,
    };

    const daysNames = [
      "Domingo",
      "Segunda-feira",
      "Terca-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado",
    ];

    function getSalesByDay() {
      data?.forEach((value) => {
        const formatDate = parse(value.Data, "dd/MM/yyyy HH:mm", new Date(), {
          locale: ptBR,
        });

        const weekDay = getDay(formatDate);
        const weekDayName = daysNames[weekDay];
        daysCount[weekDayName]++;

        return daysCount;
      });
    }
    getSalesByDay();

    console.log(daysCount); //ok

    sumValues(data);
    getPayMethods(data);
    getStatus(data);
  }
}
handleData();
