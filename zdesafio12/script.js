function botao1() {
   
    let hoje = new Date()
    let ano = hoje.getFullYear()
    let nascimento = Number(window.prompt('Em que ano você nasceu?'))
    let final = ano - nascimento

    let result = document.getElementById('result')
    result.innerHTML = `<p>Quem nasceu em ${nascimento} tem <strong> ${final} </strong> anos </p>`
}