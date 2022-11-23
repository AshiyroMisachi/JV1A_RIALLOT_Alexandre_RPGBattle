attaqueperso = document.getElementById("attaque");
pvperso1=document.getElementById("vieperso1")
pvmonstre1=document.getElementById("viemonstre1");
texte=document.getElementById("texte");
imageperso1=document.getElementById("imageperso1");
let compteurperso = 0;

attaqueperso.onclick=function() {
    pvmonstre1.innerHTML = pvmonstre1.innerHTML-10;
    texte.innerHTML = "Perso attaque Monstre 1 et inflige 10 de degats !" ;
    imageperso1.style.left = 10;
    function reposition() {
        imageperso1.style.left = 0;
    }
    setTimeout(reposition,200);
    compteurperso=compteurperso+1;
    console.log(compteurperso)
    if (compteurperso == 4) {
        function contreattaque() {
            pvperso1.innerHTML = pvperso1.innerHTML-15;
            texte.innerHTML = "Monstre 1 contre attaque et inflige 15 de degats !";
        }
        setTimeout(contreattaque,500);
    }
}
