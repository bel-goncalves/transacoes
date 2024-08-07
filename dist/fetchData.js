const fetchData = async function () {
    const response = await fetch("https://api.origamid.dev/json/transacoes.json");
    if (!response.ok) {
        throw new Error(`Erro: ${response.status}`);
    }
    else {
        const json = await response.json();
        console.log(json);
        return json;
    }
};
export default fetchData;
//# sourceMappingURL=fetchData.js.map