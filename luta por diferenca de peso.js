var diferenca = pesos[0] - pesos[1];

var num1 = pesos[0]
var num2 = pesos[1]
if (diferenca < 0) {
    diferenca = num2 - num1;
}
if (diferenca > 0 && diferenca <= 5) {
    return ("PODEM LUTAR");
} else {
    return ("NAO PODEM LUTAR");
}