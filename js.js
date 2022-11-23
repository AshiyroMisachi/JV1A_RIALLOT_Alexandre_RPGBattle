//recuperation id bouton interface
attaqueperso = document.getElementById("attaque");


//recuperation barre de description combat
texte=document.getElementById("texte");


//recuperation id barre de vie perso
pvperso1=document.getElementById("vieperso1");


//recuperation id image perso
imageperso1=document.getElementById("imageperso1");
imageperso2=document.getElementById("imageperso2");
imageperso3=document.getElementById("imageperso3");
imageperso4=document.getElementById("imageperso4");

//recupertation id barre de vie monstre
pvmonstre1=document.getElementById("viemonstre1");

//declation variable
let compteur = 1;   //variable de compteur tour

//Fonction de mise en avant des personnages
function positionnement() {
    if (compteur == 1) {
        imageperso1.style.left = 20;
        imageperso2.style.left = 0;
        imageperso3.style.left = 0;
        imageperso4.style.left = 0;
    }
    else  if (compteur == 2) {
        imageperso1.style.left = 0;
        imageperso2.style.left = 20;
        imageperso3.style.left = 0;
        imageperso4.style.left = 0;
    }
    else if (compteur == 3){
        imageperso1.style.left = 0;
        imageperso2.style.left = 0;
        imageperso3.style.left = 20;
        imageperso4.style.left = 0;
    }
    else if (compteur == 4) {
        imageperso1.style.left = 0;
        imageperso2.style.left = 0;
        imageperso3.style.left = 0;
        imageperso4.style.left = 20;
    }
    else {
        imageperso1.style.left = 0;
        imageperso2.style.left = 0;
        imageperso3.style.left = 0;
        imageperso4.style.left = 0;
    }
}
positionnement()


//Systeme attaque joueur 
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
    else if (compteur == 3) {
        compteur += 1;
        pvmonstre1.innerHTML = pvmonstre1.innerHTML-10;
        texte.innerHTML = "Perso 3 attaque Monstre 1 et inflige 10 de degats !";
        imageperso3.style.left = 30;
        function reposition3() {
            imageperso3.style.left = 20;
        } 
        setTimeout(reposition3,200);
        setTimeout(positionnement,1000);
    }
    else if (compteur == 4) {
        compteur += 1;
        pvmonstre1.innerHTML = pvmonstre1.innerHTML-10;
        texte.innerHTML = "Perso 4 attaque Monstre 1 et inflige 10 de degats !";
        imageperso4.style.left = 30;
        function reposition4() {
            imageperso4.style.left = 20;
        } 
        setTimeout(reposition4,200);
        setTimeout(positionnement,1000);
    }
}


