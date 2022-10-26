function botao() {

    let horario = new Date()
    let res = document.getElementById('sistema')
    res.innerHTML = `<p> O que eu recebi do sistema foi <mark>${horario}</mark> </p>`
}