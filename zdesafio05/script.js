let n1 = 0
let res = document.getElementById('total')

function contador() {
    num = n1++
    
    res.innerHTML = (`<p> O contador está com <mark>${num}</mark> cliques </p>`)
}
function zerar() {
    n1 = 0
    res.innerHTML = null
}
