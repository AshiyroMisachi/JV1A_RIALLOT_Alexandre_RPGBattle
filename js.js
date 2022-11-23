attaqueperso = document.getElementById("attaque");
pvperso1=document.getElementById("vieperso1")
pvmonstre1=document.getElementById("viemonstre1");
texte=document.getElementById("texte");
imageperso1=document.getElementById("imageperso1");
imageperso2=document.getElementById("imageperso2");
let compteur = 1;


function positionnement() {
    if (compteur == 1) {
        imageperso1.style.left = 20;
    }
    else  if (compteur == 2) {
        imageperso1.style.left = 0;
        imageperso2.style.left = 20;
    }
    else if (compteur == 3){
        imageperso1.style.left = 0;
        imageperso2.style.left = 0;
    }
}

positionnement()

attaqueperso.onclick = function() {
    if (compteur == 1){
        compteur += 1;
        pvmonstre1.innerHTML = pvmonstre1.innerHTML-10;
        texte.innerHTML = "Perso 1 attaque Monstre 1 et inflige 10 de degats !" ;
        imageperso1.style.left = 30;
        function reposition() {
            imageperso1.style.left = 20
        }
        setTimeout(reposition,200);
        setTimeout(positionnement,1000);
    }
    else if (compteur == 2) {
        compteur += 1;
        pvmonstre1.innerHTML = pvmonstre1.innerHTML-10;
        texte.innerHTML = "Perso 2 attaque Monstre 1 et inflige 10 de degats !";
        imageperso2.style.left = 30;
        function reposition2() {
            imageperso2.style.left = 20;
        } 
        setTimeout(reposition2,200);
        setTimeout(positionnement,1000);
    }
}


