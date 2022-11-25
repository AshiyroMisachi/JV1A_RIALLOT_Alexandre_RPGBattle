//recuperation id block html
affichevictoire = document.getElementById("victoire");
disposition = document.getElementById("disposition");
afficheinterface = document.getElementById("interface");

//recuperation id bouton interface
bouton = document.getElementById("bouton");
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
pvmonstre2=document.getElementById("viemonstre2");
pvmonstre3=document.getElementById("viemonstre3");

    //Variable pv monstre
let hpmonstre1 = 10;
let hpmonstre2 = 10;
let hpmonstre3 = 10;
    //Variable etat monstre
let etatmonstre1 = 0;
let etatmonstre2 = 0;
let etatmonstre3 = 0;

//recuperation id image monstre
imagemonstre1=document.getElementById("imagemonstre1");
imagemonstre2=document.getElementById("imagemonstre2");
imagemonstre3=document.getElementById("imagemonstre3");

//declation variable
let compteur = 1;   //variable de compteur tour
let attaquerandommonstre = 0; //defini le perso que le monstre va attaque
let attaquerandomperso = 0; //defini le monstre que le perso va attaque

//Set up demarrage
function start() {
    pvmonstre1.style.visibility = 'hidden';
    pvmonstre2.style.visibility = 'hidden';
    pvmonstre3.style.visibility = 'hidden';
    affichevictoire.style.display = 'none';

}
start()

//Fonction de mise en avant des personnages
function positionnement() {
    victoire();
    if (compteur == 1) {
        imagemonstre3.style.left = 0;
        imageperso1.style.left = 20;
        bouton.style.visibility = 'visible';
        texte.innerHTML = "C'est au tour de Perso1, que fait t'il ?";
    }
    else  if (compteur == 2) {
        imageperso1.style.left = 0;
        imageperso2.style.left = 20;
        imageperso3.style.left = 0;
        imageperso4.style.left = 0;
        bouton.style.visibility = 'visible';
        texte.innerHTML = "C'est au tour de Perso2, que fait t'il ?";
    }
    else if (compteur == 3){
        imageperso2.style.left = 0;
        imageperso3.style.left = 20;
        bouton.style.visibility = 'visible';
        texte.innerHTML = "C'est au tour de Perso3, que fait t'il ?";
    }
    else if (compteur == 4) {
        imageperso3.style.left = 0;
        imageperso4.style.left = 20;
        bouton.style.visibility = 'visible';
        texte.innerHTML = "C'est au tour de Perso4, que fait t'il ?";
    }
    else  if (compteur == 5) {
        imageperso4.style.left = 0;
        imagemonstre1.style.left = -20;
        setTimeout(ripostemonstre,500);
    }
    else if (compteur == 6) {
        imagemonstre1.style.left = 0;
        imagemonstre2.style.left = -20;
        setTimeout(ripostemonstre,500);
    }
    else if (compteur == 7) {
        imagemonstre2.style.left = 0;
        imagemonstre3.style.left = -20;
        setTimeout(ripostemonstre,500);
    }
    else {
        compteur = 1
        positionnement();
    }
}
positionnement()


//Systeme attaque joueur 
attaqueperso.onclick = function() {
    attaquerandomperso = Math.floor(Math.random() * (4-1)) + 1;
    bouton.style.visibility = 'hidden';
    //Attaque Perso 1
    if (compteur == 1){
        compteur += 1;
        if (attaquerandomperso == 1) {
            pvmonstre1.innerHTML = pvmonstre1.innerHTML -10;
            hpmonstre1 -= 10;
            texte.innerHTML = "Perso1 attaque Monstre1, il perd 10 pv !"
        }
        if (attaquerandomperso == 2) {
            pvmonstre2.innerHTML = pvmonstre2.innerHTML -10;
            hpmonstre2 -= 10;
            texte.innerHTML = "Perso1 attaque Monstre2, il perd 10 pv !"
        }
        if (attaquerandomperso == 3) {
            pvmonstre3.innerHTML = pvmonstre3.innerHTML -10;
            hpmonstre3 -=10;
            texte.innerHTML = "Perso3 attaque Monstre3, il perd 10 pv !"
        }
        imageperso1.style.left = 30;
        function reposition() {
            imageperso1.style.left = 20
        }
        mortmonstre();
        setTimeout(reposition,200);
        setTimeout(positionnement,1000);
    }
    //Attaque Perso 2
    else if (compteur == 2) {
        compteur += 1;
        if (attaquerandomperso == 1) {
            pvmonstre1.innerHTML = pvmonstre1.innerHTML -10;
            hpmonstre1 -= 10;
            texte.innerHTML = "Perso1 attaque Monstre1, il perd 10 pv !"
        }
        if (attaquerandomperso == 2) {
            pvmonstre2.innerHTML = pvmonstre2.innerHTML -10;
            hpmonstre2 -= 10;
            texte.innerHTML = "Perso1 attaque Monstre2, il perd 10 pv !"
        }
        if (attaquerandomperso == 3) {
            pvmonstre3.innerHTML = pvmonstre3.innerHTML -10;
            hpmonstre3 -=10;
            texte.innerHTML = "Perso3 attaque Monstre3, il perd 10 pv !"
        }
        imageperso2.style.left = 30;
        function reposition2() {
            imageperso2.style.left = 20;
        }
        mortmonstre();
        setTimeout(reposition2,200);
        setTimeout(positionnement,1000);
    }
    //Attaque Perso 3
    else if (compteur == 3) {
        compteur += 1;
        if (attaquerandomperso == 1) {
            pvmonstre1.innerHTML = pvmonstre1.innerHTML -10;
            hpmonstre1 -= 10;
            texte.innerHTML = "Perso1 attaque Monstre1, il perd 10 pv !"
        }
        if (attaquerandomperso == 2) {
            pvmonstre2.innerHTML = pvmonstre2.innerHTML -10;
            hpmonstre2 -= 10;
            texte.innerHTML = "Perso1 attaque Monstre2, il perd 10 pv !"
        }
        if (attaquerandomperso == 3) {
            pvmonstre3.innerHTML = pvmonstre3.innerHTML -10;
            hpmonstre3 -=10;
            texte.innerHTML = "Perso3 attaque Monstre3, il perd 10 pv !"
        }
        imageperso3.style.left = 30;
        function reposition3() {
            imageperso3.style.left = 20;
        }
        mortmonstre();
        setTimeout(reposition3,200);
        setTimeout(positionnement,1000);
    }
    //Attaque Perso 4
    else if (compteur == 4) {
        compteur += 1;
        if (attaquerandomperso == 1) {
            pvmonstre1.innerHTML = pvmonstre1.innerHTML -10;
            hpmonstre1 -= 10;
            texte.innerHTML = "Perso1 attaque Monstre1, il perd 10 pv !"
        }
        if (attaquerandomperso == 2) {
            pvmonstre2.innerHTML = pvmonstre2.innerHTML -10;
            hpmonstre2 -= 10;
            texte.innerHTML = "Perso1 attaque Monstre2, il perd 10 pv !"
        }
        if (attaquerandomperso == 3) {
            pvmonstre3.innerHTML = pvmonstre3.innerHTML -10;
            hpmonstre3 -=10;
            texte.innerHTML = "Perso3 attaque Monstre3, il perd 10 pv !"
        }
        imageperso4.style.left = 30;
        function reposition4() {
            imageperso4.style.left = 20;
        }
        mortmonstre();
        setTimeout(reposition4,200);
        setTimeout(positionnement,1000);
    }
} 


//Systeme riposte monstre
function ripostemonstre () {
    //generation nombre aleatoire
    attaquerandommonstre =  Math.floor (Math.random() * (5-1)) + 1;
    //Riposte Monstre 1
    if (compteur == 5) {
        compteur += 1;
        if (etatmonstre1 == 0) {
            if (attaquerandommonstre == 1) {
                texte.innerHTML = "Monstre 1 attaque Perso 1 et inflige 15 de degats !";
                pvperso1.innerHTML = pvperso1.innerHTML-15;
                setTimeout(positionnement,1000);
            }
            else if (attaquerandommonstre == 2) {
                texte.innerHTML = "Monstre 1 attaque Perso 2 et inflige 15 de degats !";
                pvperso2.innerHTML = pvperso2.innerHTML-15;
                setTimeout(positionnement,1000);
            }
            else if (attaquerandommonstre == 3) {
                texte.innerHTML = "Monstre 1 attaque Perso 3 et inflige 15 de degats !";
                pvperso3.innerHTML = pvperso3.innerHTML-15;
                setTimeout(positionnement,1000);
            }
            else if (attaquerandommonstre == 4) {
                texte.innerHTML = "Monstre 1 attaque Perso 4 et inflige 15 de degats !";
                pvperso4.innerHTML = pvperso4.innerHTML-15;
                setTimeout(positionnement,1000);
            }
        }
        else {
            positionnement();
        }
        //Animation Monstre 1
        imagemonstre1.style.left = -30;
        function repositionmonstre1() {
            imagemonstre1.style.left = -20;
        }
        setTimeout(repositionmonstre1,200);
    }
    //Riposte Monstre 2
    else if (compteur == 6) {
        compteur += 1;
        if (etatmonstre2 == 0) {
            if (attaquerandommonstre == 1) {
                texte.innerHTML = "Monstre 2 attaque Perso 1 et inflige 15 de degats !";
                pvperso1.innerHTML = pvperso1.innerHTML-15;
                setTimeout(positionnement,1000);
            }
            else if (attaquerandommonstre == 2) {
                texte.innerHTML = "Monstre 2 attaque Perso 2 et inflige 15 de degats !";
                pvperso2.innerHTML = pvperso2.innerHTML-15;
                setTimeout(positionnement,1000);
            }
            else if (attaquerandommonstre == 3) {
                texte.innerHTML = "Monstre 2 attaque Perso 3 et inflige 15 de degats !";
                pvperso3.innerHTML = pvperso3.innerHTML-15;
                setTimeout(positionnement,1000);
            }
            else if (attaquerandommonstre == 4) {
                texte.innerHTML = "Monstre 2 attaque Perso 4 et inflige 15 de degats !";
                pvperso4.innerHTML = pvperso4.innerHTML-15;
                setTimeout(positionnement,1000);
            }
        }
        else {
            positionnement();
        }
        //Animation Monstre 2
        imagemonstre2.style.left = -30;
        function repositionmonstre2() {
            imagemonstre2.style.left = -20;
        }
        setTimeout(repositionmonstre2,200);
    }
    //Riposte Monstre 3
    else if (compteur == 7) {
        compteur += 1;
        if (etatmonstre3 == 0) {
            if (attaquerandommonstre == 1) {
                texte.innerHTML = "Monstre 3 attaque Perso 1 et inflige 15 de degats !";
                pvperso1.innerHTML = pvperso1.innerHTML-15;
                setTimeout(positionnement,1000);
            }
            else if (attaquerandommonstre == 2) {
                texte.innerHTML = "Monstre 3 attaque Perso 2 et inflige 15 de degats !";
                pvperso2.innerHTML = pvperso2.innerHTML-15;
                setTimeout(positionnement,1000);
            }
            else if (attaquerandommonstre == 3) {
                texte.innerHTML = "Monstre 3 attaque Perso 3 et inflige 15 de degats !";
                pvperso3.innerHTML = pvperso3.innerHTML-15;
                setTimeout(positionnement,1000);
            }
            else if (attaquerandommonstre == 4) {
                texte.innerHTML = "Monstre 3 attaque Perso 4 et inflige 15 de degats !";
                pvperso4.innerHTML = pvperso4.innerHTML-15;
                setTimeout(positionnement,1000);
            }
            //Animation Monstre 3
            imagemonstre3.style.left = -30;
            function repositionmonstre3() {
                imagemonstre3.style.left = -20;
            }
            setTimeout(repositionmonstre3,200);
        }
        else {
            positionnement();
        }
    }
}

//Affichage vie Monstre

imagemonstre1.onmouseover = function() {
    pvmonstre1.style.visibility = 'visible';
}

imagemonstre1.onmouseout = function() {
    pvmonstre1.style.visibility = 'hidden';
}

imagemonstre2.onmouseover = function() {
    pvmonstre2.style.visibility = 'visible';
}

imagemonstre2.onmouseout = function() {
    pvmonstre2.style.visibility = 'hidden';
}

imagemonstre3.onmouseover = function() {
    pvmonstre3.style.visibility = 'visible';
}

imagemonstre3.onmouseout = function() {
    pvmonstre3.style.visibility = 'hidden';
}


//Systeme Mort Monstre

function mortmonstre() {
    if (hpmonstre1 <= 0) {
        etatmonstre1 = 1;
        imagemonstre1.style.visibility = 'hidden';
    }
    if (hpmonstre2 <= 0) {
        etatmonstre2 = 1;
        imagemonstre2.style.visibility = 'hidden';
    }
    if (hpmonstre3 <= 0) {
        etatmonstre3 = 1;
        imagemonstre3.style.visibility = 'hidden';
    }
}

function victoire() {
    if (etatmonstre1 == 1 && etatmonstre2 == 1 && etatmonstre3 == 1) {
        affichevictoire.style.display = 'block';
        disposition.style.display = 'none';
        afficheinterface.style.display = 'none';
        texte.style.display = 'none';
    }
}