function botao() {
    let num1 = Number(window.prompt('Digite um número'))
    let num2 = Number(window.prompt('Digite outro número'))

    let total = document.getElementById('totalzao')
    if (num1 > num2 ) {
        total.innerHTML = (`<p> Analisando os dados ${num1} é ${num2} o maior valor é ${num1}</p>`)
    } else if (num1 < num2 ) {
        total.innerHTML = (`<p> Analisando os dados ${num1} é ${num2} o maior valor é ${num2}</p>`)
    } else {
        total.innerHTML = (`<p> Analisando os dados ${num1} é ${num2} o maior valor é <strong>IGUAL</strong> </p>`)
    }
}