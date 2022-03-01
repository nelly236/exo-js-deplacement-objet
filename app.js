// on créer un objet : 
let vaisseau1 = new Sprite("vaisseau1", document.body.clientWidth/2, document.body.clientHeight/2, "red");
let vaisseau2 = new Sprite("vaisseau1", document.body.clientWidth/3, document.body.clientHeight/2, "blue");
let vaisseau3 = new Sprite("vaisseau1", document.body.clientWidth/5, document.body.clientHeight/2, "yellow");

// Première étape : créer l'objet visuel Sprite

// Notre objet Sprite va prendre 3 propriétés :
// 1) filename => nom du fichier/chemin d'accès
// 2) left => récupérer et définir sa position par rapport au bord gauche 
// 3) top => récupérer et définir sa position par rapport au bord haut 
function Sprite(filename, left, top, bgColor){

    // this = anglais => celui-ci

    // this._node = anglais => node (noeud) DONC on rappelle l'objet en cours (Sprite) avec tout son noeud (donc toutes ses méthodes)

    // 1ère chose que l'on veut faire, c'est définir ce à quoi va ressembler notre objet visuel
    // (donc, créer une image)
    this._node = document.createElement('img');

    // je veux attribuer à cette image sa source 
    this._node.src = "./img/vaisseau.png";

    // je mets en position absolute l'objet courant
    this._node.style.position = "absolute";

    // j'attribue mon objet au body
    document.body.appendChild(this._node);

    // Nos premières méthodes de get et de set pour LEFT
    // Définir la propriété Left et ses deux méthodes (get set)

    this._bgColor = bgColor;
    this._node.style.backgroundColor = this._bgColor;

    // on définit une propriété (ici LEFT), de l'objet courant (THIS)
    Object.defineProperty(this, "left",{
        get: function(){
            // la méthode get me renvoie la valeur de LEFT de l'objet en cours
            return this._left;
        },
        // la méthode set c'est une méthode qui attribue une valeur à LEFT
        set: function (value){
            // on prend la valeur de la propriété LEFT de l'objet courant et on lui attribue une valeur (reçue en paramètre)
            this._left = value;

            // on modifie le css de l'objet pour sa propriété left
            this._node.style.left = this._left+"px";

        }
    });
    Object.defineProperty(this, "top",{
        get: function (){
            return this._top;
        },
        set: function(value){
            this._top = value;

            // this._node = l'objet + tous ses noeuds (toutes ses propriétés)
            this._node.style.top = this._top+"px";
        }
    })

    // on définit la valeur de la propriété left de l'objet par le paramètre left reçu lors de la création d'un objet
    this.left = left;
    this.top = top;
}

document.onkeydown = function (event){
    console.log(event.code)
    if(event.code == "ArrowUp"){
        vaisseau1.top -= 15;
        //si je veux que mes vaisseaux monte en même temps les ajouter ici en-dessous
        //exemple vaisseau2.top -= 15;  etc...
    }
    if(event.code == "ArrowDown"){
        vaisseau1.top += 15;
    }
    if(event.code == "ArrowLeft"){
        vaisseau1.left -= 15;
    }
    if(event.code == "ArrowRight"){
        vaisseau1.left += 15;
    }
    //un autre if , si je veux que mes vaisseaux bougent individuellement avec des touches clavier différentes
    // pour voir les touches à quoi elles correspondent faire un console log du code, inspecter et console.
    if(event.code == "KeyW"){
        console.log("hello")
        vaisseau2.top -= 15;
    }
    if(event.code == "KeyS"){
        vaisseau2.top += 15;
    }
    if(event.code == "KeyA"){
        vaisseau2.left -= 15;
    }
    if(event.code == "KeyD"){
        vaisseau2.left += 15;
    }
    //un autre if
    if(event.code == "KeyO"){
        vaisseau3.top -= 15;
    }
    if(event.code == "KeyL"){
        vaisseau3.top += 15;
    }
    if(event.code == "KeyK"){
        vaisseau3.left -= 15;
    }
    if(event.code == "Semicolon"){
        console.log("code")
        vaisseau3.left += 15;
    }

    // contrôler que le Sprite (l'objet) ne sorte pas du body
    // vaisseau1
    // on empêche de sortir en HAUT
    if(vaisseau1.top < 0){
        vaisseau1.top = 0;
    }
    // on empêche de sortir à GAUCHE
    if(vaisseau1.left < 0){
        vaisseau1.left = 0;
    }
    // on empêche de sortir en BAS
    if(vaisseau1.top > document.body.clientHeight-vaisseau1._node.height-25){
        vaisseau1.top = document.body.clientHeight-vaisseau1._node.height-25;
    }
    // on empêche de sortir à DROITE
    if(vaisseau1.left > document.body.clientWidth-vaisseau1._node.width-25){
        vaisseau1.left = document.body.clientWidth-vaisseau1._node.width-25;
    }
    // vaisseau2
    // on empêche de sortir en HAUT
    if(vaisseau2.top < 0){
        vaisseau2.top = 0;
    }
    // on empêche de sortir à GAUCHE
    if(vaisseau2.left < 0){
        vaisseau2.left = 0;
    }
    // on empêche de sortir en BAS
    if(vaisseau2.top > document.body.clientHeight-vaisseau2._node.height-25){
        vaisseau2.top = document.body.clientHeight-vaisseau2._node.height-25;
    }
    // on empêche de sortir à DROITE
    if(vaisseau2.left > document.body.clientWidth-vaisseau2._node.width-25){
        vaisseau2.left = document.body.clientWidth-vaisseau2._node.width-25;
    }
    // vaisseau3
    // on empêche de sortir en HAUT
    if(vaisseau3.top < 0){
        vaisseau3.top = 0;
    }
    // on empêche de sortir à GAUCHE
    if(vaisseau3.left < 0){
        vaisseau3.left = 0;
    }
    // on empêche de sortir en BAS
    if(vaisseau3.top > document.body.clientHeight-vaisseau3._node.height-25){
        vaisseau3.top = document.body.clientHeight-vaisseau3._node.height-25;
    }
    // on empêche de sortir à DROITE
    if(vaisseau3.left > document.body.clientWidth-vaisseau3._node.width-25){
        vaisseau3.left = document.body.clientWidth-vaisseau3._node.width-25;
    }
}