function tabuada() {
    let num = document.getElementById('numero')
    let tab = document.getElementById('seltab')
    let rep = document.getElementById('quantidade')
    
    if (num.value.length == 0 || rep.value.length == 0) {
    window.alert('[ERRO]')
} else {
    let r = Number(rep.value)
    let n = Number(num.value)
    let c = 1
    tab.innerHTML =''
    while(c <= r) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            item.value = ` tab ${c} `
            c++
        }

}
}