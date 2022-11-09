let killer = {
    name: "RedJohn",
    hp: 100
}

class Survivor{
    constructor(name, dies, carac){
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

let prob = [
    'dead',
    attack = 10,
    sacrifice = 15
 ]

 prob[Math.floor(Math.random()*prob.length)]
 

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



 while (killer.hp > 0 || survivor1 == prob.attack || survivor2 == prob.attack || survivor3 == prob.attack || survivor4 == prob.attack || survivor5 == prob.attack ) {
    
 }