function resultadoAluno(){
  let nome = document.getElementById('nome').value

  let nota1 = Number(document.getElementById('nota1').value)

  let nota2 = Number(document.getElementById('nota2').value)

  let nota3 = Number(document.getElementById('nota3').value)
  
  let media = Number(nota1 + nota2 + nota3)/3

  let resultado 

  if (media >= 6) {
resultado = `Parabéns! ${nome}, sua média foi ${media}, você está aprovado(a)`
  }

  else {
resultado = `Você está reprovado ${nome}, sua média foi ${media}`
  }
  document.getElementById('resultadoaqui').innerHTML = resultado
}
function resultadosAluno(){
let aluno = window.prompt('Digite seu nome:')

let n1 = Number(window.prompt('Digite a nota 1:'))

let n2 = Number(window.prompt('Digite a nota 2:'))

let n3 = Number(window.prompt('Digite a nota 3:'))

mediaAluno = Number(n1 + n2 + n3)/3

if (mediaAluno >= 6) {
  resultado2 = `Parabéns! ${aluno}, sua média foi ${mediaAluno}, você está aprovado(a)`
    }
  
else {
  resultado2 = `Você está reprovado ${aluno}, sua média foi ${mediaAluno}`
 }
  document.getElementById('resultados').innerHTML = resultado2
}

