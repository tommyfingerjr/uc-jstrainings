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

let player = new Player(500,"Default User",3,"Paris",20,weapons.tank)
let dragon = new Dragon(1000,"Ipsum",5,"Yerevan",50,weapons.smerch)


let playerHealthbar= document.querySelector(".user-healthbar")
let dragonHealthbar= document.querySelector(".dragon-healthbar")
let playerName = document.querySelector(".player-name")
let dragonName = document.querySelector(".dragon-name")
let dragonattackButton = document.querySelector(".dragonattack")
let gameFrames=document.querySelector(".gameframes")

dragonattackButton.addEventListener('click',function(){

 player.attack(dragon)

})
let playerattackButton = document.querySelector(".userattack")
playerattackButton.addEventListener('click',function(){

 dragon.attack(player)
 

})
setInterval(function(){
    playerHealthbar.innerHTML = `User Health: ${player.health}`

},1000)

let gameframes = setInterval(function(){
    if(player.health <=0 ){
        document.write("<div style='display: flex;align-items:center;height: 100%;width: 100%;justify-content: center;font-family: verdana;color:white;background-color:turquoise'><h1>Game Over Looser!:)</h1></div>")
        clearInterval(gameframes)
    }
})


setInterval(function(){
 
    dragonHealthbar.innerHTML = `Dragon Health: ${dragon.health}`
    
},1000)

let gameframes1 = setInterval(function(){
    if(dragon.health <=0 ){
        document.write("<div style='display: flex;align-items: center;height: 100%;width: 100%;justify-content: center;font-family: verdana;color:white;background-color:turquoise'><h1>You Win!!!</h1></div>")
        clearInterval(gameframes1)
    }
    playerHealthbar.innerHTML = `User Health: ${player.health}`
    dragonHealthbar.innerHTML = `Dragon Health: ${dragon.health}`

},1000)


playerName.innerHTML = player.username
dragonName.innerHTML = dragon.name



