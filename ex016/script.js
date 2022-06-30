function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.valeu.length == 0 || fim.valeu.length == 0 || passo.valeu.length == 0){
        window.alert('[ERRO] Falta dados!')
    }else {
        res.innerHTML = 'contando:'
    }
}