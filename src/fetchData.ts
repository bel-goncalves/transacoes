import { Purchase } from "./interfaces.js";

const fetchData = async function (): Promise<Purchase[]> {
  const response = await fetch("https://api.origamid.dev/json/transacoes.json");
  if (!response.ok) {
    throw new Error(`Erro: ${response.status}`);
  } else {
    const json = await response.json();
    console.log(json);
    return json;
  }

  //   try {
  //     const response = await fetch(
  //       "https://api.origamid.dev/json/transacoes.json"
  //     );

  //     if (!response.ok) throw new Error(`Erro: ${response.status}`);

  //     const json = await response.json();
  //     console.log(json);
  //     return json;
  //   } catch (error) {}
};
export default fetchData;
