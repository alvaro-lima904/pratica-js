function verificar_positivo_negativo() {
    let resposta = Number(prompt("Informe um valor numérico: "));

    if (resposta > 0) {
        console.log("Este número é positivo");
    } else if (resposta < 0) {
        console.log("Este número é negativo");
    } else {
        console.log("O número informado é 0");
    }
}