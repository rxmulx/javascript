function getRandom() {
    var min = 1
    var max = 100
    let total = Math.random() * (max - min) + min
    let redondo = Math.round(total)
    let res = document.getElementById('res')
    res.innerHTML += `<p> Acabei de pensar em um número <mark> ${redondo} </mark> </p>`
}

function Limpar(){
    let res = document.getElementById('res')
    res.innerHTML = ``
}