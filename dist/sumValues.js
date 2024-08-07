export default function sumValues(data) {
    const total = data.reduce((acum, value) => {
        const formatValue = Number(value["Valor (R$)"].replace(".", "").replace(",", ".").replace("-", "0"));
        return acum + formatValue;
    }, 0);
    return total;
}
//# sourceMappingURL=sumValues.js.map