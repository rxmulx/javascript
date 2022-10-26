function inicio(){
    let nome = window.prompt('Qual o nome do aluno?')
    let nota1 = Number(window.prompt(`Qual foi a priemeira nota de ${nome}?`))
    let nota2 = Number(window.prompt(`Além de ${nota1} qual foi a outra nota de ${nome}?`))
    med = (nota1 + nota2)/2

    let res = document.getElementById('total')
    res.innerHTML = (`<p> Calculando a média final de ${nome}. </p>`)
    res.innerHTML +=(`<p> As notas obtidas foram ${nota1} e ${nota2}  </p>`)
    res.innerHTML += (`<p> Á media final vai ser ${med} </p>`)
}