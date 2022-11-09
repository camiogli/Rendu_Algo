let personnaje = { 
    name:'john',
    health:10,
 }
 const musics = [ 
    "Anissa - Wejdene", 
    "Section D'Assault - J'me tire", 
    "M.Pokora - Juste une photo de toi", 
    "Zaz - Je veux",
    "Mika - Elle me dit",
]

 let trajet = {
    changements: 0,
    radio: musics [0],
    feuxrouges: 30,
 }

 function takeTaxi(personnaje, trajet){
    while (trajet.feuxrouges > 0) {

        let musicrand = Math.floor(Math.random()*musics.length)
        let musicplay = musics[musicrand]

        if (musicplay == trajet.radio) {
            personnaje.health -1, 
            trajet.changements ++; 
            let feuxrestant = trajet.feuxrouges -1
            console.log('musique à la radio: ' + musicplay + ', il manque ' + feuxrestant + ' feux rouges pour arrivé à la maison')  
            continue
        }
        if (personnaje.health == 0 && trajet.feuxrouges == 0) {
            console.log('AAAAAAAAAAAH *explosion*')
            break
              } 
        if (personnaje.health > 0 && trajet.feuxrouges == 0) {
            console.log(personnaje.name + ' est bien arrivé enfin! Il lui a fallu ' + trajet.changements + ' pour arrivé sain et sauf')
        }
    } 
}

takeTaxi(personnaje, trajet)
