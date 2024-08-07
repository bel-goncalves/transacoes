import fetchData from "./fetchData.js";
import getPayMethods from "./getPayMethods.js";
import sumValues from "./sumValues.js";
async function handleData() {
    const data = await fetchData("https://api.origamid.dev/json/transacoes.json");
    if (data) {
        sumValues(data);
        getPayMethods(data);
    }
}
handleData();
//# sourceMappingURL=script.js.map