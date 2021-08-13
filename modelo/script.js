function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12 ) {
        //BOM DIA!
        img.src = 'fotomanha'
        document.body.style.background = '#F1CFA9'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fototarde'
        document.body.style.background ='#E39F7B'
    } else {
        //BOA NOITE!
        img.src = 'fotonoite'
        document.body.style.background = '#1A4158'
    }
}