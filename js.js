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
    //Liste action utilise Perso
let actionperso1 = [0,0,0];
let actionperso2 = [0,0,0];
let actionperso3 = [0,0,0];
let actionperso4 = [0,0,0];
    //Liste action deja utilise Perso
let actiondifperso1 = [0,0,0];
let actiondifperso2 = [0,0,0];
let actiondifperso3 = [0,0,0];
let actiondifperso4 = [0,0,0];

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

//recuperation id barre de mana perso
affmanaperso1 = document.getElementById("manaperso1");
affmanaperso2 = document.getElementById("manaperso2");
affmanaperso3 = document.getElementById("manaperso3");
affmanaperso4 = document.getElementById("manaperso4");
    //Variable mana perso 
let manaperso1 = 50;
let manaperso2 = 50;
let manaperso3 = 50;
let manaperso4 = 50;

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

    //Variable etat poison monstre
let poisonmonstre1 = 0;
let poisonmonstre2 = 0;
let poisonmonstre3 = 0;

    //variable tourpoison
let tourpoisonmonstre1 = 0;
let tourpoisonmonstre2 = 0;
let tourpoisonmonstre3 = 0;

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

//Fonction de mise en avant des personnages et de Tour par Tour
function positionnement() {
    //Verification de defaite ou de victoire
    victoire();
    defaite();
    //Tour de Perso 1
    if (compteur == 1) {
        //Remise à zero de la verification du DoT Poison 
        tourpoisonmonstre1 = 1;
        tourpoisonmonstre2 = 1;
        tourpoisonmonstre3 = 1;
        //Verification si Perso 1 est en vie
        if (etatperso1 == 0) {
            imageperso1.style.left = 20;
            imageperso2.style.left = 0;
            imageperso3.style.left = 0;
            imageperso4.style.left = 0;
            imagemonstre1.style.left = 0;
            imagemonstre2.style.left = 0;
            imagemonstre3.style.left = 0;
            couleurinterfaceperso1();
            bouton.style.visibility = 'visible';
            texte.innerHTML = "C'est au tour de Perso 1, que fait-il ?";
        }
        else {
            compteur += 1;
            positionnement()
        }
    }
    //Tour de Perso 2
    else  if (compteur == 2) {
        //Verification si Perso 2 est en vie 
        if (etatperso2 == 0) {
            imageperso1.style.left = 0;
            imageperso2.style.left = 20;
            imageperso3.style.left = 0;
            imageperso4.style.left = 0;
            imagemonstre1.style.left = 0;
            imagemonstre2.style.left = 0;
            imagemonstre3.style.left = 0;
            bouton.style.visibility = 'visible';
            couleurinterfaceperso2();
            texte.innerHTML = "C'est au tour de Perso 2, que fait-il ?";
        }
        else {
            compteur += 1;
            positionnement();
        }
    }
    //Tour de Perso 3
    else if (compteur == 3){
        //Verification de si Perso 3 est en vie
        if (etatperso3 == 0) {
            imageperso1.style.left = 0;
            imageperso2.style.left = 0;
            imageperso3.style.left = 20;
            imageperso4.style.left = 0;
            imagemonstre1.style.left = 0;
            imagemonstre2.style.left = 0;
            imagemonstre3.style.left = 0;
            couleurinterfaceperso3();
            bouton.style.visibility = 'visible';
            texte.innerHTML = "C'est au tour de Perso3, que fait-il ?";
        }
        else {
            compteur += 1;
            positionnement();
        }
    }
    //Tour de Perso 4
    else if (compteur == 4) {
        //Verification de Perso 4
        if (etatperso4 == 0) {
            imageperso1.style.left = 0;
            imageperso2.style.left = 0;
            imageperso3.style.left = 0;
            imageperso4.style.left = 20;
            imagemonstre1.style.left = 0;
            imagemonstre2.style.left = 0;
            imagemonstre3.style.left = 0;
            couleurinterfaceperso4();
            bouton.style.visibility = 'visible';
            texte.innerHTML = "C'est au tour de Perso 4, que fait-il ?";
        }
        else {
            compteur += 1;
            positionnement();
        }
    }
    //Tour de Monstre 1
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
    //Tour de Monstre 2
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
    //Tour de Monstre 3
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
    //Tour de degats du poison
    else if (compteur == 8) {
        imageperso1.style.left = 0;
        imageperso2.style.left = 0;
        imageperso3.style.left = 0;
        imageperso4.style.left = 0;
        imagemonstre2.style.left = 0;
        imagemonstre2.style.left = 0;
        imagemonstre3.style.left = 0;
        //Verification de si Monstre 1 est empoisonne
        if (tourpoisonmonstre1 == 1 && poisonmonstre1 > 0) {
            poisonmonstre1 -= 1;
            tourpoisonmonstre1 = 0;
            texte.innerHTML = "Monstre 1 subit 5 de degats du poison !";
            pvmonstre1.innerHTML = pvmonstre1.innerHTML - 5;
            hpmonstre1 -= 5;
            mortmonstre();
            setTimeout(positionnement,1000);
        }
        //Verification de si Monstre 2 est empoisonne 
        else if (tourpoisonmonstre2 == 1 && poisonmonstre2 > 0) {
            poisonmonstre2 -= 1;
            tourpoisonmonstre2 = 0;
            texte.innerHTML = "Monstre 2 subit 5 de degats du poison !";
            pvmonstre2.innerHTML = pvmonstre2.innerHTML - 5;
            hpmonstre2 -= 5;
            mortmonstre();
            setTimeout(positionnement,1000);
        }
        //Verification de si Monstre 3 est empoisonne
        else if (tourpoisonmonstre3 == 1 && poisonmonstre3 > 0) {
            poisonmonstre3 -= 1;
            tourpoisonmonstre3 = 0;
            texte.innerHTML = "Monstre 3 subit 5 de degats du poison !";
            pvmonstre3.innerHTML = pvmonstre3.innerHTML - 5;
            hpmonstre3 -= 5;
            mortmonstre();
            setTimeout(positionnement,1000);
        }
        else {
            compteur += 1;
            positionnement();
        }  
    }
    //Remise a zero du tour par tour
    else {
        compteur = 1
        positionnement();
        defperso1 = 0;
        defperso2 = 0;
        defperso3 = 0;
        defperso4 = 0;
    }
}
//Lancement du positionnement au chargement de la page
positionnement()

//Systeme detection attaque 
attaqueperso.onclick = function() {
    //Verification de qui attaque au moment de l'appui
    if (compteur == 1) {
        //Enregisrement de l'action de Perso 1
        if (actiondifperso1[0] == 0) {
            actionperso1[0] = 1;
            attaque();
        }
        //Blocage de Perso 1 si l'action a deja ete effectue le tour d'avant
        else {
            texte.innerHTML = "Perso 1 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    else if (compteur == 2) {
        //Enregistrement de l'action de Perso 2
        if (actiondifperso2[0] == 0) {
            actionperso2[0] = 1;
            attaque();
        }
        //Blocage de Perso 2 si l'action a deja ete effectue le tour d'avant 
        else {
            texte.innerHTML = "Perso 2 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    else if (compteur == 3) {
        //Enregistrement de l'action de Perso 3
        if (actiondifperso3[0] == 0) {
            actionperso3[0] = 1;
            attaque();
        }
        //Blocage de Perso 3 si l'action a deja ete effectue le tour d'avant
        else {
            texte.innerHTML = "Perso 3 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    else if (compteur == 4) {
        //Enregistrement de l'action de Perso 4
        if (actiondifperso4[0] == 0) {
            actionperso4[0] = 1;
            attaque();
        }
        //Blocage de Perso 4 si l'action a deja ete effectue le tour d'avant
        else {
            texte.innerHTML = "Perso 4 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
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
    //Verification de qui se defend au moment de l'appui
    if (compteur == 1) {
        //Enregistrement de l'action de Perso 1
        if (actiondifperso1[1] == 0) {
            actionperso1[1] = 1;
            defense();
        }
        //Verification de si Perso 1 a deja fait l'action le tour d'avant
        else {
            texte.innerHTML = "Perso 1 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    else if (compteur == 2) {
        //Enregistrement de l'action de Perso 2
        if (actiondifperso2[1] == 0) {
            actionperso2[1] = 1;
            defense();
        }
        //Verification de si Perso 2 a deja fait l'action le tour d'avant 
        else {
            texte.innerHTML = "Perso 2 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    else if (compteur == 3) {
        //Enregistrement de l'action de Perso 3
        if (actiondifperso3[1] == 0) {
            actionperso3[1] = 1;
            defense();
        }
        //Verification de si Perso 3 a deja fait l'action le tour d'avant 
        else {
            texte.innerHTML = "Perso 3 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    else if (compteur == 4) {
        //Enregistrement de l'action de Perso 4
        if (actiondifperso4[1] == 0) {
            actionperso4[1] = 1;
            defense();
        }
        //Verification de si Perso 4 a deja fait l'action le tour d'avant 
        else {
            texte.innerHTML = "Perso 4 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    bouton.style.visibility = 'hidden';
}

//Systeme Defense Perso
function defense() {
    //Defense de Perso 1
    if ( compteur == 1) {
        defperso1 = 1;
        texte.innerHTML = "Perso 1 choisi de se defendre";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
    //Defense de Perso 2
    else if ( compteur == 2) {
        defperso2 = 1;
        texte.innerHTML = "Perso 2 choisi de se defendre";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
    //Defense de Perso 3
    else if ( compteur == 3) {
        defperso3 = 1;
        texte.innerHTML = "Perso 3 choisi de se defendre";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
    //Defense de Perso 4
    else if ( compteur == 4) {
        defperso4 = 1;
        texte.innerHTML = "Perso 4 choisi de se defendre";
        compteur += 1;
        setTimeout(positionnement,1000);
    }
}

//Systeme Detection Special
specialperso.onclick = function() {
    //Verification de qui fait son special au moment de l'appui
    if (compteur == 1) {
        //Enregistrement de l'action de Perso 1
        if (actiondifperso1[2] == 0) {
            actionperso1[2] = 1;
            special();
        }
        //Verification de si Perso 1 a deja fait l'action le tour d'avant
        else {
            texte.innerHTML = "Perso 1 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    else if (compteur == 2) {
        //Enregistrement de l'action de Perso 2
        if (actiondifperso2[2] == 0) {
            actionperso2[2] = 1;
            special();
        }
        //Verification de si Perso 2 a deja fait l'action le tour d'avant
        else {
            texte.innerHTML = "Perso 2 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    else if (compteur == 3) {
        //Enregistrement de l'action de Perso 3
        if (actiondifperso3[2] == 0) {
            actionperso3[2] = 1;
            special();
        }
        //Verification de si Perso 3 a deja fait l'action le tour d'avant
        else {
            texte.innerHTML = "Perso 3 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    else if (compteur == 4) {
        //Enregistrement de l'action de Perso 4
        if (actiondifperso4[2] == 0) {
            actionperso4[2] = 1;
            special();
        }
        //Verification de si Perso 4 a deja fait l'action le tour d'avant
        else {
            texte.innerHTML = "Perso 4 a deja fait cette action le tour d'avant";
            setTimeout(positionnement,500);
        }
    }
    bouton.style.visibility = 'hidden';
}

//Systeme Special Perso
function special() {
    //Special de Perso 1, AoE
    if (compteur == 1) {
        if (manaperso1 >= 30) {
            manaperso1 -= 30;
            affmanaperso1.innerHTML = affmanaperso1.innerHTML - 30;
            texte.innerHTML = "Perso 1 utilise son special, une enorme boule de feu s'abat sur le terrain, tous les monstres prennent 20 de degats !";
            compteur += 1;
            pvmonstre1.innerHTML = pvmonstre1.innerHTML - 20;
            hpmonstre1 -= 20;
            pvmonstre2.innerHTML = pvmonstre2.innerHTML - 20;
            hpmonstre2 -= 20;
            pvmonstre3.innerHTML = pvmonstre3.innerHTML - 20;
            hpmonstre3 -= 20;
            mortmonstre();
            setTimeout(positionnement,1000);
        }
        else {
            texte.innerHTML = "Perso 1 n'a pas assez de mana"
            bouton.style.visibility = 'hidden';
            setTimeout(positionnement,500);
        }
    }
    //Special de Perso 2, DoT
    else if (compteur == 2) {
        if (manaperso2 >= 10) {
            manaperso2 -= 10;
            affmanaperso2.innerHTML = affmanaperso2.innerHTML - 10;
            attaquerandomperso = Math.floor(Math.random() * (4-1)) + 1;
                if (attaquerandomperso == 1) {
                    if (etatmonstre1 == 0) {
                        texte.innerHTML = "Perso 2 empoisonne Monstre 1 !";
                        poisonmonstre1 = 3;
                        compteur += 1;
                    }
                    else {
                        special();
                    }
                    
                }
                else if (attaquerandomperso == 2) {
                    if (etatmonstre2 == 0) {
                        texte.innerHTML = "Perso 2 empoisonne Monstre 2 !";
                        poisonmonstre2 = 3;
                        compteur += 1;
                    }
                    else {
                        special();
                    }
                    
                }
                else if (attaquerandomperso == 3) {
                    if (etatmonstre3 == 0) {
                        texte.innerHTML = "Perso 2 empoisonne Monstre 3 ! ";
                        poisonmonstre3 = 3;
                        compteur += 1;
                    }
                    else {
                        special();
                    }
                    
                }
            setTimeout(positionnement,1000); 
        }
        else {
            texte.innerHTML = "Perso 2 n'a pas assez de mana";
            bouton.style.visibility = 'hidden';
            setTimeout(positionnement,500);
        }
        
    }
    //Special de Perso 3, Heal du groupe 
    else if (compteur == 3) {
        if (manaperso3 >= 25) {
            manaperso3 -= 25;
            affmanaperso3.innerHTML = affmanaperso3.innerHTML - 25;
            texte.innerHTML = "Perso 3 soigne tous les Heros, tout le monde recupere 20 pv !";
            if (hpperso1 > 80) {
                hpperso1 = 100;
                pvperso1.innerHTML = 100;
            }
            else {
                hpperso1 += 20;
                pvperso1.innerHTML = pvperso1.innerHTML - (-20);
            }
            if (hpperso2 > 80) {
                hpperso2 = 100;
                pvperso2.innerHTML = 100;
            }
            else {
                hpperso2 += 20;
                pvperso2.innerHTML = pvperso2.innerHTML - (-20);
            }
            if (hpperso3 > 80) {
                hpperso3 = 100;
                pvperso3.innerHTML = 100;
            }
            else {
                hpperso3 += 20;
                pvperso3.innerHTML = pvperso3.innerHTML - (-20);
            }
            if (hpperso4 > 80) {
                hpperso4 = 100;
                pvperso4.innerHTML = 100;
            }
            else {
                hpperso4 += 20;
                pvperso4.innerHTML = pvperso4.innerHTML - (-20);
            }
            compteur += 1;
            setTimeout(positionnement,1000);
            }
        else {
            texte.innerHTML = "Perso 3 n'a pas assez de mana";
            bouton.style.visibility = 'hidden';
            setTimeout(positionnement,500);
        }
        
    }
    //Special de Perso 4, Protection du groupe 
    else if (compteur == 4) {
        if (manaperso4 >= 20) {
            manaperso4 -= 20;
            affmanaperso4.innerHTML = affmanaperso4.innerHTML - 20;
            texte.innerHTML = "Perso 4 protege le groupe, tout le monde est protege !";
            defperso1 = 1;
            defperso2 = 1;
            defperso3 = 1;
            defperso4 = 1;
            compteur += 1;
            setTimeout(positionnement,1000);
        }
        else {
            texte.innerHTML = "Perso 4 n'a pas assez de mana";
            bouton.style.visibility = 'hidden';
            setTimeout (positionnement,500);
        }
    }
}
//Changement Couleur Action utilise
    //Perso 1
function couleurinterfaceperso1 () {
    if (actionperso1[0] == 1) {
        attaqueperso.style.background = 'red';
        defenseperso.style.background = 'green';
        specialperso.style.background = 'green';
        actionperso1[0] = 0;
        actiondifperso1[0] = 1;
        actiondifperso1[1] = 0;
        actiondifperso1[2] = 0;
    }
    else if (actionperso1[1] == 1) {
        attaqueperso.style.background = 'green';
        defenseperso.style.background = 'red';
        specialperso.style.background = 'green';
        actionperso1[1] = 0;
        actiondifperso1[0] = 0;
        actiondifperso1[1] = 1;
        actiondifperso1[2] = 0;
    }
    else if (actionperso1[2] == 1) {
        attaqueperso.style.background = 'green';
        defenseperso.style.background = 'green';
        specialperso.style.background = 'red';
        actionperso1[2] = 0;
        actiondifperso1[0] = 0;
        actiondifperso1[1] = 0;
        actiondifperso1[2] = 1;
    }
}
    //Perso 2
function couleurinterfaceperso2 () {
    if (actionperso2[0] == 1) {
        attaqueperso.style.background = 'red';
        defenseperso.style.background = 'green';
        specialperso.style.background = 'green';
        actionperso2[0] = 0;
        actiondifperso2[0] = 1;
        actiondifperso2[1] = 0;
        actiondifperso2[2] = 0;
    }
    else if (actionperso2[1] == 1) {
        attaqueperso.style.background = 'green';
        defenseperso.style.background = 'red';
        specialperso.style.background = 'green';
        actionperso2[1] = 0;
        actiondifperso2[0] = 0;
        actiondifperso2[1] = 1;
        actiondifperso2[2] = 0;
    }
    else if (actionperso2[2] == 1) {
        attaqueperso.style.background = 'green';
        defenseperso.style.background = 'green';
        specialperso.style.background = 'red';
        actionperso2[2] = 0;
        actiondifperso2[0] = 0;
        actiondifperso2[1] = 0;
        actiondifperso2[2] = 1;
    }
}
    //Perso 3
function couleurinterfaceperso3 () {
    if (actionperso3[0] == 1) {
        attaqueperso.style.background = 'red';
        defenseperso.style.background = 'green';
        specialperso.style.background = 'green';
        actionperso3[0] = 0;
        actiondifperso3[0] = 1;
        actiondifperso3[1] = 0;
        actiondifperso3[2] = 0;
    }
    else if (actionperso3[1] == 1) {
        attaqueperso.style.background = 'green';
        defenseperso.style.background = 'red';
        specialperso.style.background = 'green';
        actionperso3[1] = 0;
        actiondifperso3[0] = 0;
        actiondifperso3[1] = 1;
        actiondifperso3[2] = 0;
    }
    else if (actionperso3[2] == 1) {
        attaqueperso.style.background = 'green';
        defenseperso.style.background = 'green';
        specialperso.style.background = 'red';
        actionperso3[2] = 0;
        actiondifperso3[0] = 0;
        actiondifperso3[1] = 0;
        actiondifperso3[2] = 1;
    }
}
    //Perso 4
function couleurinterfaceperso4 () {
    if (actionperso4[0] == 1) {
        attaqueperso.style.background = 'red';
        defenseperso.style.background = 'green';
        specialperso.style.background = 'green';
        actionperso4[0] = 0;
        actiondifperso4[0] = 1;
        actiondifperso4[1] = 0;
        actiondifperso4[2] = 0;
    }
    else if (actionperso4[1] == 1) {
        attaqueperso.style.background = 'green';
        defenseperso.style.background = 'red';
        specialperso.style.background = 'green';
        actionperso4[1] = 0;
        actiondifperso4[0] = 0;
        actiondifperso4[1] = 1;
        actiondifperso4[2] = 0;
    }
    else if (actionperso4[2] == 1) {
        attaqueperso.style.background = 'green';
        defenseperso.style.background = 'green';
        specialperso.style.background = 'red';
        actionperso4[2] = 0;
        actiondifperso4[0] = 0;
        actiondifperso4[1] = 0;
        actiondifperso4[2] = 1;
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
        poisonmonstre1 = 0;
        imagemonstre1.style.visibility = 'hidden';
    }
    if (hpmonstre2 <= 0) {
        etatmonstre2 = 1;
        poisonmonstre2 = 0;
        imagemonstre2.style.visibility = 'hidden';
    }
    if (hpmonstre3 <= 0) {
        etatmonstre3 = 1;
        poisonmonstre3 = 0;
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
        pvperso1.style.visibility = 'hidden';
    }
    if (hpperso2 <= 0) {
        etatperso2 = 1;
        imageperso2.style.visibility = 'hidden';
        pvperso2.style.visibility = 'hidden';
    }
    if (hpperso3 <= 0) {
        etatperso3 = 1;
        imageperso3.style.visibility = 'hidden';
        pvperso3.style.visibility = 'hidden';
    }
    if (hpperso4 <= 0) {
        etatperso4 = 1;
        imageperso4.style.visibility = 'hidden';
        pvperso4.style.visibility = 'hidden';
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