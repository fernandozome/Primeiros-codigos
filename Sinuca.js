let jogadorA = [0, 0]
let soma_jogadorA = 0

for (let item of jogadorA) {
    soma_jogadorA = soma_jogadorA + item
}

let soma_jogadorB = 120 - soma_jogadorA

if (soma_jogadorA > soma_jogadorB) {
    console.log("JOGADOR A GANHOU")
} else if (soma_jogadorB > soma_jogadorA) {
    console.log("JOGADOR B GANHOU")
} else {
    console.log("EMPATE")
}