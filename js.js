//recuperation id block html
affichevictoire = document.getElementById("victoire");
affichedefaite = document.getElementById("defaite");
disposition = document.getElementById("disposition");
afficheinterface = document.getElementById("interface");

//recuperation id bouton interface
bouton = document.getElementById("bouton");
attaqueperso = document.getElementById("attaque");
defenseperso = document.getElementById("defense");
specialperso = document.getElementById("special");



//recuperation barre de description combat
texte=document.getElementById("texte");


//recuperation id barre de vie perso
pvperso1=document.getElementById("vieperso1");
pvperso2=document.getElementById("vieperso2");
pvperso3=document.getElementById("vieperso3");
pvperso4=document.getElementById("vieperso4");
    //Variable pv perso
let hpperso1 = 100;
let hpperso2 = 100;
let hpperso3 = 100;
let hpperso4 = 100;
    //Variable etat perso
let etatperso1 = 0;
let etatperso2 = 0;
let etatperso3 = 0;
let etatperso4 = 0;

    //Variable Defense Perso
let defperso1 = 0;
let defperso2 = 0;
let defperso3 = 0;
let defperso4 = 0;

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
let hpmonstre1 = 50;
let hpmonstre2 = 50;
let hpmonstre3 = 50;
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
    affichedefaite.style.display = 'none';
}
start()

//Fonction de mise en avant des personnages
function positionnement() {
    victoire();
    defaite();
    if (compteur == 1) {
        if (etatperso1 == 0) {
            imageperso1.style.left = 20;
            imageperso2.style.left = 0;
            imageperso3.style.left = 0;
            imageperso4.style.left = 0;
            imagemonstre1.style.left = 0;
            imagemonstre2.style.left = 0;
            imagemonstre3.style.left = 0;
            bouton.style.visibility = 'visible';
            texte.innerHTML = "C'est au tour de Perso1, que fait t'il ?";
        }
        else {
            compteur += 1;
            positionnement()
        }
    }
    else  if (compteur == 2) {
        if (etatperso2 == 0) {
            imageperso1.style.left = 0;
            imageperso2.style.left = 20;
            imageperso3.style.left = 0;
            imageperso4.style.left = 0;
            imagemonstre1.style.left = 0;
            imagemonstre2.style.left = 0;
            imagemonstre3.style.left = 0;
            bouton.style.visibility = 'visible';
            texte.innerHTML = "C'est au tour de Perso2, que fait t'il ?";
        }
        else {
            compteur += 1;
            positionnement();
        }
    }
    else if (compteur == 3){
        if (etatperso3 == 0) {
            imageperso1.style.left = 0;
            imageperso2.style.left = 0;
            imageperso3.style.left = 20;
            imageperso4.style.left = 0;
            imagemonstre1.style.left = 0;
            imagemonstre2.style.left = 0;
            imagemonstre3.style.left = 0;
            bouton.style.visibility = 'visible';
            texte.innerHTML = "C'est au tour de Perso3, que fait t'il ?";
        }
        else {
            compteur += 1;
            positionnement();
        }
    }
    else if (compteur == 4) {
        if (etatperso4 == 0) {
            imageperso1.style.left = 0;
            imageperso2.style.left = 0;
            imageperso3.style.left = 0;
            imageperso4.style.left = 20;
            imagemonstre1.style.left = 0;
            imagemonstre2.style.left = 0;
            imagemonstre3.style.left = 0;
            bouton.style.visibility = 'visible';
            texte.innerHTML = "C'est au tour de Perso4, que fait t'il ?";
        }
        else {
            compteur += 1;
            positionnement();
        }
    }
    else  if (compteur == 5) {
        imageperso1.style.left = 0;
        imageperso2.style.left = 0;
        imageperso3.style.left = 0;
        imageperso4.style.left = 0;
        imagemonstre1.style.left = -20;
        imagemonstre2.style.left = 0;
        imagemonstre3.style.left = 0;
        setTimeout(ripostemonstre,500);
    }
    else if (compteur == 6) {
        imageperso1.style.left = 0;
        imageperso2.style.left = 0;
        imageperso3.style.left = 0;
        imageperso4.style.left = 0;
        imagemonstre1.style.left = 0;
        imagemonstre2.style.left = -20;
        imagemonstre3.style.left = 0;
        setTimeout(ripostemonstre,500);
    }
    else if (compteur == 7) {
        imageperso1.style.left = 0;
        imageperso2.style.left = 0;
        imageperso3.style.left = 0;
        imageperso4.style.left = 0;
        imagemonstre2.style.left = 0;
        imagemonstre2.style.left = 0;
        imagemonstre3.style.left = -20;
        setTimeout(ripostemonstre,500);
    }
    else {
        compteur = 1
        positionnement();
        defperso1 = 0;
        defperso2 = 0;
        defperso3 = 0;
        defperso4 = 0;
    }
}
positionnement()


//Systeme detection attaque 
attaqueperso.onclick = function() {
    attaque()
    bouton.style.visibility = 'hidden';
}

//Systeme attaque joueur 
function attaque () {
    attaquerandomperso = Math.floor(Math.random() * (4-1)) + 1;
    //Attaque Perso 1
    if (compteur == 1){
        if (attaquerandomperso == 1 && etatmonstre1 == 1){
            attaque();
        }
        else if (attaquerandomperso == 1) {
            compteur += 1;
            pvmonstre1.innerHTML = pvmonstre1.innerHTML -10;
            hpmonstre1 -= 10;
            texte.innerHTML = "Perso1 attaque Monstre1, il perd 10 pv !"
        }

        if (attaquerandomperso == 2 && etatmonstre2 == 1) {
            attaque();
        }
        else if (attaquerandomperso == 2) {
            compteur += 1;
            pvmonstre2.innerHTML = pvmonstre2.innerHTML -10;
            hpmonstre2 -= 10;
            texte.innerHTML = "Perso1 attaque Monstre2, il perd 10 pv !"
        }

        if (attaquerandomperso == 3 && etatmonstre3 == 1) {
            attaque();
        }
        else if (attaquerandomperso == 3) {
            compteur += 1;
            pvmonstre3.innerHTML = pvmonstre3.innerHTML -10;
            hpmonstre3 -=10;
            texte.innerHTML = "Perso1 attaque Monstre3, il perd 10 pv !"
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
        if (attaquerandomperso == 1 && etatmonstre1 == 1) {
            attaque();
        }
        else if (attaquerandomperso == 1) {
            compteur += 1;
            pvmonstre1.innerHTML = pvmonstre1.innerHTML -10;
            hpmonstre1 -= 10;
            texte.innerHTML = "Perso2 attaque Monstre1, il perd 10 pv !"
        }

        if (attaquerandomperso == 2 && etatmonstre2 == 1) {
            attaque();
        }
        else if (attaquerandomperso == 2) {
            compteur += 1;
            pvmonstre2.innerHTML = pvmonstre2.innerHTML -10;
            hpmonstre2 -= 10;
            texte.innerHTML = "Perso2 attaque Monstre2, il perd 10 pv !"
        }
        if (attaquerandomperso == 3 && etatmonstre3 == 1) {
            attaque()
        }
        else if (attaquerandomperso == 3) {
            compteur += 1;
            pvmonstre3.innerHTML = pvmonstre3.innerHTML -10;
            hpmonstre3 -=10;
            texte.innerHTML = "Perso2 attaque Monstre3, il perd 10 pv !"
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
        if (attaquerandomperso == 1 && etatmonstre1 == 1) {
            attaque();
        }
        else if (attaquerandomperso == 1) {
            compteur += 1;
            pvmonstre1.innerHTML = pvmonstre1.innerHTML -10;
            hpmonstre1 -= 10;
            texte.innerHTML = "Perso3 attaque Monstre1, il perd 10 pv !"
        }
        if (attaquerandomperso == 2 && etatmonstre2 == 1) {
            attaque();
        }
        else if (attaquerandomperso == 2) {
            compteur += 1;
            pvmonstre2.innerHTML = pvmonstre2.innerHTML -10;
            hpmonstre2 -= 10;
            texte.innerHTML = "Perso3 attaque Monstre2, il perd 10 pv !"
        }
        if (attaquerandomperso == 3 && etatmonstre3 == 1) {
            attaque();
        }
        else if (attaquerandomperso == 3) {
            compteur += 1;
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
        if (attaquerandomperso == 1 && etatmonstre1 == 1) {
            attaque();
        }
        else if (attaquerandomperso == 1) {
            compteur += 1;
            pvmonstre1.innerHTML = pvmonstre1.innerHTML -10;
            hpmonstre1 -= 10;
            texte.innerHTML = "Perso4 attaque Monstre1, il perd 10 pv !"
        }
        if (attaquerandomperso == 2 && etatmonstre2 == 1) {
            attaque();
        }
        else if (attaquerandomperso == 2) {
            compteur += 1;
            pvmonstre2.innerHTML = pvmonstre2.innerHTML -10;
            hpmonstre2 -= 10;
            texte.innerHTML = "Perso4 attaque Monstre2, il perd 10 pv !"
        }
        if (attaquerandomperso == 3 && etatmonstre3 == 1) {
            attaque();
        }
        else if (attaquerandomperso == 3) {
            compteur += 1;
            pvmonstre3.innerHTML = pvmonstre3.innerHTML -10;
            hpmonstre3 -=10;
            texte.innerHTML = "Perso4 attaque Monstre3, il perd 10 pv !"
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


//Systeme Detection Defense

defenseperso.onclick = function() {
    defense();
    bouton.style.visibility = 'hidden';
}

//Systeme Defense Perso
function defense() {
    if ( compteur == 1) {
        defperso1 = 1;
        texte.innerHTML = "Perso 1 choisi de se defendre";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
    else if ( compteur == 2) {
        defperso2 = 1;
        texte.innerHTML = "Perso 2 choisi de se defendre";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
    else if ( compteur == 3) {
        defperso3 = 1;
        texte.innerHTML = "Perso 3 choisi de se defendre";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
    else if ( compteur == 4) {
        defperso4 = 1;
        texte.innerHTML = "Perso 4 choisi de se defendre";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
}

//Systeme Detection Special

specialperso.onclick = function() {
    special();
    bouton.style.visibility = 'hidden';
}

function special() {
    if ( compteur == 1) {
        texte.innerHTML = "Perso 1 utilise son special, une enorme boule de feu s'abat sur le terrain, tous les monstres prennent 20 de degats !";
        compteur += 1;
        pvmonstre1.innerHTML = pvmonstre1.innerHTML - 20;
        hpmonstre1 -= 20;
        pvmonstre2.innerHTML = pvmonstre2.innerHTML - 20;
        hpmonstre2 -= 20;
        pvmonstre3.innerHTML = pvmonstre3.innerHTML - 20;
        hpmonstre3 -= 20;
        setTimeout(positionnement,1000);
    }
    else if ( compteur == 2) {
        texte.innerHTML = "Perso 2 empoisonne un monstre aleatoire !";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
    else if ( compteur == 3) {
        texte.innerHTML = "Perso 3 soigne tous les Heros, tout le monde recupere 20 pv !";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
    else if ( compteur == 4) {
        texte.innerHTML = "Perso 4 protege le groupe, tout le monde est protege !";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
}


//Systeme riposte monstre
function ripostemonstre () {
    //generation nombre aleatoire
    attaquerandommonstre =  Math.floor (Math.random() * (5-1)) + 1;
    //Riposte Monstre 1
    if (compteur == 5) {
        if (etatmonstre1 == 0) {
            if (attaquerandommonstre == 1 && etatperso1 == 1) {
                ripostemonstre()
            }
            else if (attaquerandommonstre == 1) {
                if ( defperso1 == 1) {
                    texte.innerHTML = "Monstre 1 attaque Perso 1 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                   texte.innerHTML = "Monstre 1 attaque Perso 1 et inflige 15 de degats !";
                    pvperso1.innerHTML = pvperso1.innerHTML-15;
                    hpperso1 -= 15;
                    compteur += 1; 
                }
            }
            if (attaquerandommonstre == 2 && etatperso2 == 1) {
                ripostemonstre()
            }
            else if (attaquerandommonstre == 2) {
                if ( defperso2 == 1) {
                    texte.innerHTML = "Monstre 1 attaque Perso 2 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 1 attaque Perso 2 et inflige 15 de degats !";
                    pvperso2.innerHTML = pvperso2.innerHTML-15;
                    hpperso2 -= 15;
                    compteur += 1;
                }
            }
            if (attaquerandommonstre == 3 && etatperso3 == 1) {
                ripostemonstre();
            }
            else if (attaquerandommonstre == 3) {
                if ( defperso3 == 1) {
                    texte.innerHTML = "Monstre 1 attaque Perso 3 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 1 attaque Perso 3 et inflige 15 de degats !";
                    pvperso3.innerHTML = pvperso3.innerHTML-15;
                    hpperso3 -= 15;
                    compteur += 1;
                }
            }
            if (attaquerandommonstre == 4 && etatperso4 == 1) {
                ripostemonstre();
            }
            if (attaquerandommonstre == 4) {
                if ( defperso4 == 1) {
                    texte.innerHTML = "Monstre 1 attaque Perso 4 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 1 attaque Perso 4 et inflige 15 de degats !";
                    pvperso4.innerHTML = pvperso4.innerHTML-15;
                    hpperso4 -= 15;
                    compteur += 1;
                }
            }
        }
        else {
            compteur += 1;
            positionnement();
        }
        //Animation Monstre 1
        imagemonstre1.style.left = -30;
        function repositionmonstre1() {
            imagemonstre1.style.left = -20;
        }
        mortperso();
        setTimeout(repositionmonstre1,200);
        setTimeout(positionnement,1000);
    }
    //Riposte Monstre 2
    else if (compteur == 6) {
        if (etatmonstre2 == 0) {
            if (attaquerandommonstre == 1 && etatperso1 == 1) {
                ripostemonstre();
            }
            else if (attaquerandommonstre == 1) {
                if ( defperso1 == 1) {
                    texte.innerHTML = "Monstre 2 attaque Perso 1 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 2 attaque Perso 1 et inflige 15 de degats !";
                    pvperso1.innerHTML = pvperso1.innerHTML-15;
                    hpperso1 -= 15;
                    compteur += 1;
                }
            }
            if (attaquerandommonstre == 2 && etatperso2 == 1) {
                ripostemonstre();
            }
            else if (attaquerandommonstre == 2) {
                if ( defperso2 == 1) {
                    texte.innerHTML = "Monstre 2 attaque Perso 2 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 2 attaque Perso 2 et inflige 15 de degats !";
                    pvperso2.innerHTML = pvperso2.innerHTML-15;
                    hpperso2 -= 15;
                    compteur += 1;
                }
            }
            if (attaquerandommonstre == 3 && etatperso3 == 1) {
                ripostemonstre();
            }
            else if (attaquerandommonstre == 3) {
                if ( defperso3 == 1) {
                    texte.innerHTML = "Monstre 2 attaque Perso 3 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 2 attaque Perso 3 et inflige 15 de degats !";
                    pvperso3.innerHTML = pvperso3.innerHTML-15;
                    hpperso3 -= 15;
                    compteur += 1;
                }
            }
            if (attaquerandommonstre == 4 && etatperso4 == 1) {
                ripostemonstre();
            }
            else if (attaquerandommonstre == 4) {
                if ( defperso4 == 1) {
                    texte.innerHTML = "Monstre 2 attaque Perso 4 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 2 attaque Perso 4 et inflige 15 de degats !";
                    pvperso4.innerHTML = pvperso4.innerHTML-15;
                    hpperso4 -= 15;
                    compteur += 1;
                }
            }
        }
        else {
            compteur += 1;
            positionnement();
        }
        //Animation Monstre 2
        imagemonstre2.style.left = -30;
        function repositionmonstre2() {
            imagemonstre2.style.left = -20;
        }
        mortperso();
        setTimeout(repositionmonstre2,200);
        setTimeout(positionnement,1000);
    }
    //Riposte Monstre 3
    else if (compteur == 7) {
        if (etatmonstre3 == 0) {
            if (attaquerandommonstre == 1 && etatperso1 == 1) {
                ripostemonstre();
            }
            else if (attaquerandommonstre == 1) {
                if ( defperso1 == 1) {
                    texte.innerHTML = "Monstre 3 attaque Perso 1 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 3 attaque Perso 1 et inflige 15 de degats !";
                    pvperso1.innerHTML = pvperso1.innerHTML-15;
                    hpperso1 -= 15;
                    compteur += 1;
                }
            }
            if (attaquerandommonstre == 2 && etatperso2 == 1) {
                ripostemonstre();
            }
            else if (attaquerandommonstre == 2) {
                if ( defperso2 == 1) {
                    texte.innerHTML = "Monstre 3 attaque Perso 2 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 3 attaque Perso 2 et inflige 15 de degats !";
                    pvperso2.innerHTML = pvperso2.innerHTML-15;
                    hpperso2 -= 15;
                    compteur += 1;
                }
            }
            if (attaquerandommonstre == 3 && etatperso3 == 1) {
                ripostemonstre();
            }
            else if (attaquerandommonstre == 3) {
                if ( defperso3 == 1) {
                    texte.innerHTML = "Monstre 3 attaque Perso 3 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 3 attaque Perso 3 et inflige 15 de degats !";
                    pvperso3.innerHTML = pvperso3.innerHTML-15;
                    hpperso3 -= 15;
                    compteur += 1;
                }
            }
            if (attaquerandommonstre == 4 && etatperso4 == 1) {
                ripostemonstre();
            }
            else if (attaquerandommonstre == 4) {
                if ( defperso4 == 1) {
                    texte.innerHTML = "Monstre 3 attaque Perso 4 mais il se defend et ne subit rien !";
                    compteur += 1;
                }
                else {
                    texte.innerHTML = "Monstre 3 attaque Perso 4 et inflige 15 de degats !";
                    pvperso4.innerHTML = pvperso4.innerHTML-15;
                    hpperso4 -= 15;
                    compteur += 1;
                }
            }
            //Animation Monstre 3
            imagemonstre3.style.left = -30;
            function repositionmonstre3() {
                imagemonstre3.style.left = -20;
            }
            mortperso();
            setTimeout(repositionmonstre3,200);
            setTimeout(positionnement,1000);
        }
        else {
            compteur += 1;
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
//Systeme detection condition victoire 
function victoire() {
    if (etatmonstre1 == 1 && etatmonstre2 == 1 && etatmonstre3 == 1) {
        affichevictoire.style.display = 'block';
        disposition.style.display = 'none';
        afficheinterface.style.display = 'none';
        texte.style.display = 'none';
    }
}

//Systeme Mort Perso

function mortperso() {
    if (hpperso1 <= 0) {
        etatperso1 = 1;
        imageperso1.style.visibility = 'hidden';
    }
    if (hpperso2 <= 0) {
        etatperso2 = 1;
        imageperso2.style.visibility = 'hidden';
    }
    if (hpperso3 <= 0) {
        etatperso3 = 1;
        imageperso3.style.visibility = 'hidden';
    }
    if (hpperso4 <= 0) {
        etatperso4 = 1;
        imageperso4.style.visibility = 'hidden';
    }
}

//Systeme detection condition defaire

function defaite() {
    if (etatperso1 == 1 && etatperso2 == 1 && etatperso3 == 1 && etatperso4 == 1) {
        affichedefaite.style.display = 'block';
        disposition.style.display = 'none';
        afficheinterface.style.display = 'none';
        texte.style.display = 'none';
    }
}

