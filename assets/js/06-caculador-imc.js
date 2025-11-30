function calcular_imc() {
    let peso = Number(prompt("Informe o seu peso em kg: "));
    let altura = Number(prompt("Informe sua altura em metros (exemplo 1.73): "));

    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    } else if (imc >= 30) {
        console.log("Acima do peso");
    } else {
        console.log("Não pode contar valores nulos");
    }
}