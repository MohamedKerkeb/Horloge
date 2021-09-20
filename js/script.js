// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()
let date = new Date()
console.log(date)
//Stocker l'heure , minute , seconde  dans des varaiables
let min = date.getMinutes();
let second = date.getSeconds();
let hour = date.getHours()

console.log(hour, min, second )
// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

function initiation (degreSecond, degreMinute, degreHour) {
    console.log(degreHour)
    AIGUILLESEC.style.transform = `rotate(${degreSecond}deg)`;
    AIGUILLEMIN.style.transform = `rotate(${degreMinute}deg)`;
    AIGUILLEHR.style.transform = `rotate(${degreHour}deg)`;

}

let degreSecond = second * (360/ 60);
let degreMinute = min * (360 / 60);
let degreHour = hour * (360 / 12);


//initiation()

    // let degreSecond = 360/60;
    // let degreMinute = 360/60/60
    // let degreHour = 360/12/60/60

    //
    // let totalSecond = second + (min * 60) + (hour * 3600)   
    // let degreTotalSecond = degreSecond * totalSecond;



// Déplacer les aiguilles 
function demarrerLaMontre() {

    // let date = new Date()

    // let min = date.getMinutes();
    // let second = date.getSeconds();
    // let hour = date.getHours();

    // let degreSecond = 360/60;
    // let degreMinute = 360/60/60
    // let degreHour = 360/12/60/60
    
    // let totalSecond = second + (min * 60) + (hour * 3600)
    

    // console.log(totalSecond + degreMinute)
    

    // AIGUILLESEC.style.transform = `rotate(${degreSecond * totalSecond}deg)`;
    // AIGUILLEMIN.style.transform = `rotate(${degreMinute * totalSecond}deg)`;
    // AIGUILLEHR.style.transform = `rotate(${degreHour * totalSecond}deg)`

    //degreSecond *= totalSecond;
    //degreSecond = degreTotalSecond



    degreSecond += (360/60) ;
    degreMinute += (360/60/60);
    degreHour += (360/12/60/60);
    
    initiation(degreSecond, degreMinute, degreHour)

}



// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);  