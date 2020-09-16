function Ex_1() {
    var num, dobro;

    num = parseInt(prompt("Digite um número: "));

    dobro = num * 2;

    alert("O dobro de " + num + " é " + dobro);
}

function Ex_2() {
    var num1, num2, soma;

    num1 = parseInt(prompt("Digite um número para soma-lo: "));
    num2 = parseInt(prompt("Digite outro número: "));

    soma = num1 + num2;

    alert("A soma de " + num1 + " + " + num2 + " = " + soma);
}

function Ex_3() {
    var num1, sqr;

    num1 = parseInt(prompt("Digite um número para saber seu quadrado: "));

    if (Number.isNaN(num1)) {
        alert("Por favor digite um número. Reinicie o código")
    } else {
        sqr = (num1 * num1);
        alert("O quadrado de " + num1 + " é " + sqr);
    }
}

function Ex_4() {
    var n1, n2, n3, media;

    n1 = parseFloat(prompt("Digite a primeira nota"));
    n2 = parseFloat(prompt("Digite a segunda nota"));
    n3 = parseFloat(prompt("Digite a terceira nota"));

    media = (n1 + n2 + n3) / 3;

    alert("A média entre as três notas é: " + media);

}

function Ex_5() {
    var n1, n2, n3, som;

    n1 = parseInt(prompt("Digite o primeiro valor: "));
    n2 = parseInt(prompt("Digite o segundo valor: "));
    n3 = parseInt(prompt("Digite o terceiro valor: "));

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        alert("Alguma das entradas digitadas não é um número, por favor reicinie o programa e digite números !");
    } else {
        var som = (n1 + n2 + n3);
        alert("A soma de " + n1 + " + " + n2 + " + " + n3 + " = " + som);
    }
}

function Ex_6() {
    var height, base, area;

    height = parseFloat(prompt("Digite a altura do triângulo: "));
    base = parseFloat(prompt("Digite a base do triângulo: "));

    if (isNaN(height) || isNaN(base)) {
        alert("Alguma das entradas digitadas não é um número, por favor reicinie o programa e digite números !");
    } else {
        area = (base * height) / 2
        alert("A area de um triangulo com: base: " + base + " altura: " + height + " é: " + area);
    }
}

function Ex_7() {
    var name, yearBirth, currentYear, age;

    name = String(prompt("Digite seu nome: "));
    yearBirth = parseInt(prompt("Digite o ano de nascimento: "));
    currentYear = parseInt(prompt("Digite o ano em que está: "));

    if (isNaN(yearBirth) || isNaN(currentYear)) {
        alert("Alguma das entradas digitadas não é um número, por favor reicinie o programa e digite números !");
    } else {
        age = currentYear - yearBirth;
        alert("Olá: " + name + "\nvocê nasceu em: " + yearBirth + "\nE você tem: " + age + " anos.");
    }
}

function Ex_8() {
    var alt_degrau, alt_desejada, qtde_degrau;

    alt_degrau = parseFloat(prompt("Digite a altura do degrau em cm: "));
    alt_desejada = parseFloat(prompt("Digite a altura desejada em metros: "));

    if (isNaN(alt_degrau) || isNaN(alt_desejada)) {
        alert("Alguma das entradas digitadas não é um número, por favor reicinie o programa e digite números !");
    } else {

        alt_degrau = alt_degrau / 100;
        qtde_degrau = Math.floor(alt_desejada / alt_degrau);

        alert("A quantidade de degraus necessários é: " + qtde_degrau);
    }
}

function Ex_9() {
    var name1, name2, name3;

    name1 = prompt("Digite seu nome: ");
    name2 = prompt("Digite outro nome: ");
    name3 = prompt("Digite mais um nome: ");


    alert(name1 + "\n" + name2 + "\n" + name3);

}

function Ex_10() {
    var a, b, c, delta, x1, x2;

    a = parseFloat(prompt("Digite o valor de A: "));
    b = parseFloat(prompt("Digite o valor de B: "));
    c = parseFloat(prompt("Digite o valor de C: "));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Algo esta errado tente digitar apenas números!!!");
    } else {
        delta = (b * b) - 4 * a * c;

        if (delta >= 0) {
            x1 = ((-b + Math.sqrt(delta)) / (2 * a));
            x2 = ((-b - Math.sqrt(delta)) / (2 * a));

            x1 = parseFloat(x1.toFixed(2));
            x2 = parseFloat(x2.toFixed(2));

            alert("Os valores das raizes são: \nX1 é: " + x1 + "\nX2 é: " + x2);
        }
    }



}