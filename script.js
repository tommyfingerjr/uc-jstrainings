class Player{
    health = 100
    username = "Default User"
    lives = 3
    currentPosition = "Paris"

    attack(target){
        target.health -=10
    }
    run(destination){
        this.currentPosition = destination
    }
}

class Dragon{
    health = 1000
    name = "Ipsum"
    
    attack(target){
        target.health -=10
    }
}

let player = new Player()
let dragon = new Dragon()


let userHealthbar = document.querySelector(".user-healthbar")
let dragonHealthbar = document.querySelector(".dragon-healthbar")
let playerName = document.querySelector(".player-name")
let dragonName = document.querySelector(".dragon-name")
let attackButton = document.querySelector(".attack")
attackButton.addEventListener('click', function(){
    player.attack(dragon)

})
playerName.innerHTML = player.username
dragonName.innerHTML = dragon.name


setInterval(function(){
    userHealthbar.innerHTML = `User Health: ${player.health}`
    dragonHealthbar.innerHTML = `Dragon Health: ${dragon.health}`

},5000)




