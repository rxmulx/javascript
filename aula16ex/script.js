function Adicionar() {
    var num = document.getElementById('numero')
    var tab = document.getElementById('tabel')

    if (num.value.lenght == 0 ) {
        window.alert('[ERRO]')
    } else {
        let r = Number(numero.value)
        
        let item = document.createElement('option')
        item.text = `Valor ${r} Adicionado `
        tab.appendChild(item)
        
    } 



} 