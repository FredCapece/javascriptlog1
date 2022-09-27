function inserirnome(){
    let nome = document.getElementById("nome1").value
    document.getElementById("res").innerHTML = nome
    console.log(nome)
}

function exercicio1(){
    let base = document.getElementById("nbase").value
    let altura = document.getElementById("naltura").value
    document.getElementById("res1").innerHTML = "Area: " + base * altura
}

function exercicio2(){
    let cavalos = document.getElementById("ncavalos").value
    document.getElementById("res2").innerHTML = "Quantidade de ferraduras: " + cavalos * 4
}

function exercicio3(){
    let paes = document.getElementById("npaes").value
    let broas = document.getElementById("nbroas").value
    let total = (paes * 0.12) + (broas * 1.50)
    document.getElementById("res3").innerHTML = "Arrecadou no final do dia: " + total + "<br> Guardou na poupança: " + total * 0.1
}

function exercicio4(){
    let nnome = document.getElementById("nnome").value
    let idade = document.getElementById("nidade").value
    document.getElementById("res4").innerHTML = nnome + "<br> Ja vivieu: " + idade * 365
}

function exercicio5(){
    let gasolina = document.getElementById("ngasolina").value
    let pagamento = document.getElementById("npagamento").value
    document.getElementById("res5").innerHTML = "Litros de gasolina no tanque: " + pagamento / gasolina
}

function exercicio6(){
    let prato = document.getElementById("nprato").value
    document.getElementById("res6").innerHTML = "Valor a pagar: " + prato * 12
}

function exercicio7(){
    let dia = document.getElementById("ndia").value
    let mes = document.getElementById("nmes").value
    let total = (dia * 1) + (mes -1) * 30
    document.getElementById("res7").innerHTML = "Se passaram: " + total + " dias"
}

function exercicio8(){
    let nota1 = document.getElementById("nnota1").value
    let nota2 = document.getElementById("nnota2").value
    let nota3 = document.getElementById("nnota3").value
    let total = ((nota1 * 1) + (nota2 * 2) + (nota3 * 3)) / 6
    document.getElementById("res8").innerHTML = "Nota do aluno é: " + total
}

function exercicio9(){
    let tamanhop = document.getElementById("ntamanhop").value
    let tamanhom = document.getElementById("ntamanhom").value
    let tamanhog = document.getElementById("ntamanhog").value
    let total = (tamanhop * 10) + (tamanhom * 12) + (tamanhog * 15)
    document.getElementById("res9").innerHTML = "Foi arrecadado: " + total + " reais"
}

function exercicio10(){
    let ponto1 = document.getElementById("nponto1").value
    let ponto2 = document.getElementById("nponto2").value
    let ponto3 = document.getElementById("nponto3").value
    let ponto4 = document.getElementById("nponto4").value
    let total = ((ponto3 - ponto1)**2 + (ponto4 - ponto2)**2)**0.5
    document.getElementById("res10").innerHTML = "A distancia entre os dois pontos é: " + total
}