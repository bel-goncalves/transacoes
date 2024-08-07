import fetchData from "./fetchData.js";
import sumValues from "./sumValues.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (data) {
        sumValues(data);
    }
}
handleData();
//# sourceMappingURL=script.js.map