function inicio() {
    var nome = window.prompt('Qual seu nome')
    let res = window.document.getElementById('resultado')
    res.innerHTML = (`Olá, ${nome} É um grande prazer te conhecer!`)
}