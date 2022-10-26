let res = window.document.querySelector('section#res')

window.onload = function calculo() {
    var min = 1
    var max = 100
    let num = min + max
    let total = Math.random()
    arredondando = min + Math.trunc(num * total)
}

function botao() {
    usuario = Number(window.prompt('Qual é seu palpite?'))
    if (usuario < arredondando) {
        res.innerHTML += `<p>Voce falou ${usuario}.Meu número é <strong> Maior </strong></p>`
    } else if (usuario > arredondando) {
        res.innerHTML += `<p>Voce falou ${usuario}.Meu número é <strong> Menor </strong></p>`
    } else if (usuario == arredondando) {
        res.innerHTML += `<p><strong> Parabéns </strong> voce acertou o número que estava pensando <mark> ${arredondando} </mark></p>`
    }
}