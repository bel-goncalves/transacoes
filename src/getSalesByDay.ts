import { parse, getDay } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Purchase } from "./interfaces";

const daysCount: { [key: string]: number } = {
  Domingo: 0,
  "Segunda-feira": 0,
  "Terça-feira": 0,
  "Quarta-feira": 0,
  "Quinta-feira": 0,
  "Sexta-feira": 0,
  Sábado: 0,
};

const daysNames = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export default function getSalesByDay(data: Purchase[]) {
  data.forEach((value) => {
    const formatDate = parse(value.Data, "dd/MM/yyyy HH:mm", new Date(), {
      locale: ptBR,
    });

    const weekDay = getDay(formatDate);
    const weekDayName = daysNames[weekDay];
    daysCount[weekDayName]++;

    return daysCount;
  });

  function getMostSales(daysCount: { [key: string]: number }) {
    let numSales = 0;
    let mostSales = "";

    for (const day in daysCount) {
      if (daysCount[day] > numSales) {
        numSales = daysCount[day];
        mostSales = day;
      }
    }
    showSalesByDay(mostSales);
  }

  getMostSales(daysCount);
}

function showSalesByDay(mostSales: string) {
  const status = document.getElementById("mostSales");
  if (status) {
    status.innerHTML += ` ${mostSales}`;
  }
}
