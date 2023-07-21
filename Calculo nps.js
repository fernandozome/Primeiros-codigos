let respostas = [0]
let qunt_promotores = 0
let qunt_detratores = 0

for (let item of respostas) {
    if (item === 9 || item === 10) {
        qunt_promotores += 1
    } else if (item >= 0 && item <= 6) {
        qunt_detratores += 1
    }
}

let qunt_clientesTotal = respostas.length
let nps = (qunt_promotores - qunt_detratores) / qunt_clientesTotal * 100
console.log(nps)