class Player{
    constructor(health,username,lives,currentPosition,initialdamage,weapon){
    this.health=health;
    this.username=username;
    this.lives=lives;
    this.currentPosition=currentPosition;
    this.initialdamage=initialdamage
    this.weapon=weapon
    } 
    attack(target){
        target.health -=this.initialdamage + this.weapon

    }
    run(destination){
        this.currentPosition = destination

    }
   
}

class Dragon{
    constructor(health,name,lives,currentPosition,initialdamage,weapon){
        this.health=health
        this.name=name
        this.lives=lives
        this.currentPosition=currentPosition
        this.initialdamage=initialdamage
        this.weapon=weapon
    }
    attack(target){
        target.health -=this.initialdamage + this.weapon
    }
}

let weapons={
    tank: 20,
    smerch:50
}

let player = new Player(100,"Default User",3,"Paris",20,weapons.tank)
let dragon = new Dragon(1000,"Ipsum",5,"Yerevan",50,weapons.smerch)


let playerHealthbar= document.querySelector(".user-healthbar")
let dragonHealthbar= document.querySelector(".dragon-healthbar")
let playerName = document.querySelector(".player-name")
let dragonName = document.querySelector(".dragon-name")
let dragonattackButton = document.querySelector(".dragonattack")


dragonattackButton.addEventListener('click',function(){

 player.attack(dragon)

})
let playerattackButton = document.querySelector(".userattack")
playerattackButton.addEventListener('click',function(){

 dragon.attack(player)
 

})
setInterval(function(){
    playerHealthbar.innerHTML = `User Health: ${player.health}`

},5000)


setInterval(function(){
 
    dragonHealthbar.innerHTML = `Dragon Health: ${dragon.health}`
    
},5000)

playerName.innerHTML = player.username
dragonName.innerHTML = dragon.name



