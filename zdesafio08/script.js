function botao() {
    let num = (Number(window.prompt('Digite um número ')))
    let tipo
    if (num % 2 == 0) {
        tipo = '<strong>PAR</strong>'
    } else {
        tipo = '<strong>IMPAR</strong>'
    }

    let res = document.getElementById('kare')
    res.innerHTML = (`<p> O Numero ${num} é ${tipo} </p>`)
}