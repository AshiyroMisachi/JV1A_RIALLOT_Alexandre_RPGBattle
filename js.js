//recuperation id bouton interface
attaqueperso = document.getElementById("attaque");


//recuperation barre de description combat
texte=document.getElementById("texte");


//recuperation id barre de vie perso
pvperso1=document.getElementById("vieperso1");
pvperso2=document.getElementById("vieperso2");
pvperso3=document.getElementById("vieperso3");
pvperso4=document.getElementById("vieperso4");


//recuperation id image perso
imageperso1=document.getElementById("imageperso1");
imageperso2=document.getElementById("imageperso2");
imageperso3=document.getElementById("imageperso3");
imageperso4=document.getElementById("imageperso4");

//recupertation id barre de vie monstre
pvmonstre1=document.getElementById("viemonstre1");

//declation variable
let compteur = 1;   //variable de compteur tour
let attaquerandommonstre = 0; //defini le perso que le monstre va attaque

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
    else  if (compteur == 5) {
        imageperso1.style.left = 0;
        imageperso2.style.left = 0;
        imageperso3.style.left = 0;
        imageperso4.style.left = 0;
        ripostemonstre();
    }
    else if (compteur == 6) {
        ripostemonstre();
    }
    else if (compteur == 7) {
        ripostemonstre();
    }
    else {
        compteur = 1
    }
}
positionnement()


//Systeme attaque joueur 
attaqueperso.onclick = function() {
    //Attaque Perso 1
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
    //Attaque Perso 2
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
    //Attaque Perso 3
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
    //Attaque Perso 4
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


//Systeme riposte monstre
function ripostemonstre () {
    //generation nombre aleatoire
    attaquerandommonstre =  Math.floor (Math.random() * (5-1)) + 1;
    console.log(attaquerandommonstre);
    //Riposte Monstre 1
    if (compteur == 5) {
        if (attaquerandommonstre == 1) {
            texte.innerHTML = "Monstre 1 attaque Perso 1 et inflige 15 de degats !";
            pvperso1.innerHTML = pvperso1.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
        else if (attaquerandommonstre == 2) {
            texte.innerHTML = "Monstre 1 attaque Perso 2 et inflige 15 de degats !";
            pvperso2.innerHTML = pvperso2.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
        else if (attaquerandommonstre == 3) {
            texte.innerHTML = "Monstre 1 attaque Perso 3 et inflige 15 de degats !";
            pvperso3.innerHTML = pvperso3.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
        else if (attaquerandommonstre == 4) {
            texte.innerHTML = "Monstre 1 attaque Perso 4 et inflige 15 de degats !";
            pvperso4.innerHTML = pvperso4.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
    }
    //Riposte Monstre 2
    else if (compteur == 6) {
        if (attaquerandommonstre == 1) {
            texte.innerHTML = "Monstre 2 attaque Perso 1 et inflige 15 de degats !";
            pvperso1.innerHTML = pvperso1.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
        else if (attaquerandommonstre == 2) {
            texte.innerHTML = "Monstre 2 attaque Perso 2 et inflige 15 de degats !";
            pvperso2.innerHTML = pvperso2.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
        else if (attaquerandommonstre == 3) {
            texte.innerHTML = "Monstre 2 attaque Perso 3 et inflige 15 de degats !";
            pvperso3.innerHTML = pvperso3.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
        else if (attaquerandommonstre == 4) {
            texte.innerHTML = "Monstre 2 attaque Perso 4 et inflige 15 de degats !";
            pvperso4.innerHTML = pvperso4.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
    }
    //Riposte Monstre 3
    else if (compteur == 7) {
        if (attaquerandommonstre == 1) {
            texte.innerHTML = "Monstre 3 attaque Perso 1 et inflige 15 de degats !";
            pvperso1.innerHTML = pvperso1.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
        else if (attaquerandommonstre == 2) {
            texte.innerHTML = "Monstre 3 attaque Perso 2 et inflige 15 de degats !";
            pvperso2.innerHTML = pvperso2.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
        else if (attaquerandommonstre == 3) {
            texte.innerHTML = "Monstre 3 attaque Perso 3 et inflige 15 de degats !";
            pvperso3.innerHTML = pvperso3.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
        else if (attaquerandommonstre == 4) {
            texte.innerHTML = "Monstre 3 attaque Perso 4 et inflige 15 de degats !";
            pvperso4.innerHTML = pvperso4.innerHTML-15;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
    }
}
