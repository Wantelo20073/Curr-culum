function canviNom(){
    let nom = prompt("Com vols anomenar-lo?")
    document.getElementById("nom").innerHTML = nom;
}
function canviPhoto(){
    let foto = prompt("Qui vols ser?")
    document.getElementById("photo").src = foto;
}
function ocultarInfo(){ 
    if(document.getElementById("photo").hidden == true){
        document.getElementById("photo").hidden = false
    }else{
        document.getElementById("photo").hidden = true
    }
}