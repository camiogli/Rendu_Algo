let killer = {
    name: "RedJohn",
    hp: 100
}

class Survivor{
    constructor(name, carac){
    this.name = name
    this.carac = carac
    }
}

const names = [
    'Caroline', 
    'Kevin', 
    'Lola',
    'Maxime',
    'Chris',
 ]

 const carac = [
    'blonde',
    'sportif',
    'nerd',
    'frousard',
    'rageux',
    'chanceux'
 ]

const prob = [
    dead = 'dead',
    attack = 10,
    sacrifice = 15
 ]

 /*prob[Math.floor(Math.random()*prob.length)]*/
 

 let survivor1 = new Survivor(
    names[Math.floor(Math.random()*names.length)],
    carac[Math.floor(Math.random()*carac.length)]
 )
 let survivor2 = new Survivor(
    names[Math.floor(Math.random()*names.length)],
    carac[Math.floor(Math.random()*carac.length)]
 )
 let survivor3 = new Survivor(
    names[Math.floor(Math.random()*names.length)],
    carac[Math.floor(Math.random()*carac.length)]
 )
 let survivor4 = new Survivor(
    names[Math.floor(Math.random()*names.length)],
    carac[Math.floor(Math.random()*carac.length)]
 )
 let survivor5 = new Survivor(
    names[Math.floor(Math.random()*names.length)],
    carac[Math.floor(Math.random()*carac.length)]
 )

 const survivors = [
   survivor1,
   survivor2,
   survivor3,
   survivor4,
   survivor5
 ]

let deaths = []

 while (killer.hp > 0 || survivors.length > 0) {
   
   console.log(killer.name + " va attaquer un des survivants!")
   let probrand = Math.floor(Math.random()*prob.length)
   let luck = prob[probrand]
   let survivorsrand = Math.floor(Math.random()*survivors.length)
   let choosenone = survivors[survivorsrand]

    if (luck == prob.dead) { 
      deaths.push(choosenone)
      survivors.splice(choosenone, 1)
      console.log(killer.name + ' a tuer ' + choosenone)
       }
    if (luck == prob.attack) {
      killer.hp = killer.hp - attack
      console.log(choosenone + " a esquivé l'attaque ! " + choosenone + " contre-attaque et inflige " + prob.attack + " de dégâts a " + killer.name + " !")
    }
    if (luck == prob.suicide) {
      deaths.push(choosenone)
      survivors.splice(choosenone, 1)
      killer.hp = killer.hp - suicide
      console.log(choosenone + " a réussie a infliger " + prob.suicide + " a " + killer.name + " ! Mais celui-ci arrive a tuer tout dr même " + choosenone)
    }
    if (killer.hp == 0) {
      console.log(​killer.name + " est mort, Les survivants ont gagné mais RIP à " + deaths )
      break
    }
    if (deaths.length == 5 )
    console.log(killer.name + " a tué tous les survivants.... mission failed.")
 }