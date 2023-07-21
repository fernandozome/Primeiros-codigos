var possuiItemNecessario1 = false
var possuiItemNecessario2 = false
var possuiItemNecessario3 = false

for (let item of itensColetados) {
    if (item === itemNecessario1) {
        possuiItemNecessario1 = true
    } else if (item === itemNecessario2) {
        possuiItemNecessario2 = true
    } else if (item === itemNecessario3) {
        possuiItemNecessario3 = true
    }
}

if (possuiItemNecessario1 && possuiItemNecessario2 && possuiItemNecessario3) {
    return ("PODE ENFRENTAR")
} else {
    return ("NAO PODE ENFRENTAR")
}