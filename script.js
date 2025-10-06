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
function canviFons(){
    let body = document.getElementsByTagName("body")[0]
    let foto = prompt("On vols viatjar?")
    body.style = "background-image: url('"+foto+"'); background-size: cover;";
}
function tradueix(){
    let body = document.getElementsByTagName("body")[0]
    body.style = "font-family: 'Rubik Wet Paint', system-ui;"
}
function afegirInfo(){
    let llista = document.getElementById("expL");
    let element = document.createElement("li");
    element.innerHTML = prompt("Què vols afegir?")
    llista.appendChild(element)
}
function colorlletres(){
    let body = document.getElementsByTagName("body")[0]
    let color = prompt("Quin color vols?")
    body.style = "color: "+color;
}
function afegirBloc(){
    let body = document.getElementsByTagName("body")[0]
    let section = document.createElement("section");
    let name = document.createElement("h3");
    let element = document.createElement("p");
    body.append(section)
    name.innerHTML = "Altra Informació";
    section.append(name)
    element.innerHTML = prompt("Qué informació adicional vols afegir?")
    section.append(element)
    section.style = "background-color: rgba(255, 255, 255, 0.801)";
}