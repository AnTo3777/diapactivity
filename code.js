var liste_mot = ['bonjour', 'au revoir', 'salut', 'hello', 'bye', 'hola', 'goodbye']

var mode = 'time'

/******** Display *********/
setInterval(function(){
    for(var i=0; i<5; i++){
        document.getElementById("box" + String(i)).style.left = (document.documentElement.scrollWidth - parseInt(window.getComputedStyle(document.getElementById('box' + String(i))).getPropertyValue('width'))) / 2 + 'px'
    }
}, 10)



/******* Mot random */
function generer_mot_random(){
    var index_deja_pris = ''
    for(var i=0; i<5; i++){
        do {
            index = Math.round((liste_mot.length-1) * Math.random())
        } while(index_deja_pris.includes(String(index)) == true)
        index_deja_pris += String(index)
        document.getElementById("box" + String(i)).innerHTML = liste_mot[index]
    }

    if(mode == 'time'){
        setTimeout(function(){
            generer_mot_random()
        }, 3000)
    }

}


/******* Changer ecran ********/
document.addEventListener('keydown', function(event) {
    if(mode == 'espace'){
    
        if(event.keyCode == 32) {
            generer_mot_random()
        }    
    }
});



/******* Changer mode *******/
function changer_mode(){
    if(mode == 'time'){
        mode = 'espace'
        document.getElementById("bouton").innerHTML = "espace"

    }
    else{
        mode = 'time'
        document.getElementById("bouton").innerHTML = "automatique"
        setTimeout(function(){
            generer_mot_random()
        }, 3000)
    }
    console.log(mode)
}



generer_mot_random()