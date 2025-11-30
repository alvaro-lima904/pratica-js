function verificar_multiplos() {
    let valor1 = Number(prompt("Informe o primeiro valor: "));
    let valor2 = Number(prompt("Informe o segundo valor: "));

    if (valor1 % valor2 == 0) {
        console.log(`${valor1} é múltiplo de ${valor2}`);
    } else {
        console.log(`${valor1} não é múltiplo de ${valor2}`);
    }
}