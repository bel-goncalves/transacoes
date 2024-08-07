import fetchData from "./fetchData.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    console.log(data);
    data?.forEach((i) => console.log(i));
}
handleData();
//# sourceMappingURL=script.js.map