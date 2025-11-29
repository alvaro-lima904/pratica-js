let nota = Number(prompt("Informe uma nota de 0 a 10: "));

if (nota <= 4) {
    console.log("Nota baixa");
} else if (nota >= 5 && nota <= 7) {
    console.log("Nota média");
} else if (nota >= 8 && nota <= 10) {
    console.log("Nota alta");
} else {
    console.log("Valor inválido");
}