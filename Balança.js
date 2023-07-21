let pesoLadoA1 = 0
let pesoLadoA2 = 0

let pesoLadoB1 = 0
let pesoLadoB2 = 0

const PesoA = pesoLadoA1 + pesoLadoA2
const PesoB = pesoLadoB1 + pesoLadoB2

if (PesoA > PesoB) {
    console.log("Lado A")
} else if (PesoA < PesoB) {
    console.log("Lado B")
} else
    console.log("Equilíbrio")