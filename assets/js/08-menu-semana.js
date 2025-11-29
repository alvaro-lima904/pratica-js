let diaSemana = Number(prompt("Informe um número de 1 a 7: "));

switch (diaSemana) {
    case 1:
        console.log("O número informado refere-se ao Domingo");
        break;
    case 2:
        console.log("O número informado refere-se à Segunda-Feira");
        break;
    case 3:
        console.log("O número informado refere-se à Terça-Feira");
        break;
    case 4:
        console.log("O número informado refere-se à Quarta-Feira");
        break;
    case 5:
        console.log("O número informado refere-se à Quinta-Feira");
        break;
    case 6:
        console.log("O número informado refere-se à Sexta-Feira");
        break;
    case 7:
        console.log("O número informado refere-se ao Sábado");
        break;
    default:
        console.log("Valor inválido!");
        break;
}