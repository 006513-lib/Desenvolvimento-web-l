//1
console.log("Meu primeiro script");
//2
let nome="Maria"
console.log(nome);
let idade=("22 anos")
console.log(idade);
let cidade="Belo Horizonte"
console.log(cidade);
console.log(nome, idade, cidade);
//3
let paragrafo = document.getElementById("mensagem");
paragrafo.innerText="JavaScript alterou esse texto";
//4
let h2 = document.getElementById("titulo");
h2.innerText = "Julião";
titulo.style.color = "blue";
//5
function saudar(){console.log("Olá! O botão foi clicado.")}
//6
let resposta = document.getElementById("resposta");
resposta.innerText = "Você clicou no botão!";
//7,8
function 
    mostrarNome(){let nome=document.getElementById("nomeUsuario").value;    
    document.getElementById("resultado").innerText = "Olá," + nome + "!";}
//9
function
        calcular(){let n1 = Number(document.getElementById("numero1").value);
        let n2 = Number(document.getElementById("numero2").value);
        let soma = n1+n2;
        document.getElementById("resultadoCalculo").innerText=soma};
//10
function calcularSoma() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    let resultado = n1 + n2;
    document.getElementById("resultadoCalculo").innerText = resultado;
}

function calcularSubtracao() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    let resultado = n1 - n2;
    document.getElementById("resultadoCalculo").innerText = resultado;
}

function calcularMultiplicacao() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    let resultado = n1 * n2;
    document.getElementById("resultadoCalculo").innerText = resultado;
}

function calcularDivisao() {
    let n1 = Number(document.getElementById("numero1").value);
    let n2 = Number(document.getElementById("numero2").value);
    let resultado = n1 / n2;
    document.getElementById("resultadoCalculo").innerText = resultado;
}