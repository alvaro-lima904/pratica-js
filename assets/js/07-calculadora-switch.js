function calculadora() {
    let valor1 = Number(prompt("Informe o primeior valor: "));
    let valor2 = Number(prompt("Informe o segundo valor: "));
    let operacao = prompt("Informe a operação que deseja fazer: + - * /");

    switch (operacao) {
        case "+":
            console.log(`${valor1} + ${valor2} = ${(valor1 + valor2)}`);
            break;
        case "-":
            console.log(`${valor1} - ${valor2} = ${(valor1 - valor2)}`);
            break;
        case "*":
            console.log(`${valor1} * ${valor2} = ${(valor1 * valor2)}`);
            break;
        case "/":
            console.log(`${valor1} / ${valor2} = ${(valor1 / valor2)}`);
            break;
        default:
            console.log("Operação inválida!");
            break;
    }
}