function botao01() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let agora = new Date()
    let rel = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let sem = agora.getDay()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    rel.innerHTML = `<p>Dia: <mark> ${dia} </mark> </p>`
    rel.innerHTML += `<p>Mes: <mark> ${meses[mes]} </mark> </p>`
    rel.innerHTML += `<p>Ano: <mark> ${ano} </mark> </p>`
    rel.innerHTML += `<p>Semana: <mark> ${semana[sem]} </mark> </p>`
    rel.innerHTML += `<p>Hora: <mark> ${hora} </mark> </p>`
    rel.innerHTML += `<p>Minuto: <mark> ${min} </mark> </p>`
    rel.innerHTML += `<p>Segundos: <mark> ${seg} </mark> </p>`
}