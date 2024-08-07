export default function sumValues(data) {
    const total = data.reduce((acum, value) => {
        const formatValue = Number(value["Valor (R$)"].replace(".", "").replace(",", ".").replace("-", "0"));
        return acum + formatValue;
    }, 0);
    showTotal(total);
    return total;
}
function showTotal(total) {
    const totalValues = document.getElementById("totalValues");
    if (totalValues) {
        totalValues.innerHTML += ` R$ ${total}`;
    }
}
//# sourceMappingURL=sumValues.js.map