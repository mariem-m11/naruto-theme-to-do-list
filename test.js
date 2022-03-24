function newElement() {
    var liste = document.createElement("liste");
    var name = document.getElementById("name").value;
    var saisie = document.getElementById("content").value;
    var t = document.createTextNode(`${name} : ${saisie} \n`); //didn't know how to get back to line after each item ://
    
    liste.appendChild(t);
    if ((name ==='') || (saisie === '') ){
        alert("write your task dattebayo!!");
    } else {
        document.getElementById("left").appendChild(liste);
    }
    document.getElementById("name").value = "";
    document.getElementById("content").value = "";

}