attaqueperso = document.getElementById("attaque");
pvperso1=document.getElementById("vieperso1")
pvmonstre1=document.getElementById("viemonstre1");
texte=document.getElementById("texte");

attaqueperso.onclick=function() {
    pvmonstre1.innerHTML = pvmonstre1.innerHTML-10;
    texte.innerHTML = "Perso 1 attaque Monstre 1 et inflige 10 de degats !" ;
    function contreattaque() {
        pvperso1.innerHTML = pvperso1.innerHTML-15;
        texte.innerHTML = "Monstre 1 contre attaque et inflige 15 de degats !";
    }
    setTimeout(contreattaque,2000);
}