if (altitude >= 0 && altitude <= 20) {
    console.log("TROPOSFERA")
} else if (altitude > 20 && altitude <= 50) {
    console.log("ESTRATOSFERA")
} else if (altitude > 50 && altitude <= 80) {
    console.log("MESOSFERA")
} else if (altitude > 80 && altitude <= 450) {
    console.log("TERMOSFERA")
} else if (altitude > 450) {
    console.log("EXOSFERA")
}