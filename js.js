attaque=document. getElementById("attaque");
pvmonstre1=document. getElementById("viemonstre1");
texte=document. getElementById("texte");

attaque. onclick=fonction() {
    pvmonstre1. innerHTML=pvmonstre1. innertHTML-10;
    afficheAction. innerHTML="Perso 1 attaque Monstre 1 et inflige 10 de dégâts !";
}