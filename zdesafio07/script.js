function calcular() {
    let nome = window.prompt('Qual o nome do aluno?')
    let nota1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let  nota2 = Number(window.prompt(`Além de ${nota1} qual foi a outra nota de ${nome}?`))
    med = (nota1 + nota2)/2

    let msg 
    if(med >= 6 ) {
        msg = 'Meus parabéns !'
    } else {
        msg = 'Estude um pouco mais!'
    }

    let res = document.getElementById('situacao')
    res.innerHTML = `<p> Calculando a média final de <mark>${nota1}</mark> </p>`
    res.innerHTML += `<p> As notas obtidas foram <mark> ${nota1} e ${nota2}</mark> </p>`
    res.innerHTML += `<p>A média final será <mark>${med}</mark> </p>`
    res.innerHTML += `<p>A mensagem que temos é:<strong style='color:red;'> ${msg}</strong></p> </p>`
}