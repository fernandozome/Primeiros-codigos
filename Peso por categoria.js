var categoria1
var categoria2

if (peso1 < 55) {
    categoria1 = "Peso Leve"
} else if (peso1 >= 55 && peso1 <= 65) {
    categoria1 = "Meio-Médio"
} else if (peso1 >= 65 && peso1 <= 75) {
    categoria1 = "Peso Médio"
} else if (peso1 <= 85) {
    categoria1 = "Meio-Pesado"
} else {
    categoria1 = "Peso Pesado"
}

if (peso2 < 55) {
    categoria2 = "Peso Leve"
} else if (peso2 >= 55 && peso2 <= 65) {
    categoria2 = "Meio-Médio"
} else if (peso2 >= 65 && peso2 <= 75) {
    categoria2 = "Peso Médio"
} else if (peso2 <= 85) {
    categoria2 = "Meio-Pesado"
} else {
    categoria2 = "Peso Pesado"
}

if (categoria1 === categoria2) {
    console.log("PODEM LUTAR")
} else {
    console.log("NÃO PODEM LUTAR")
}