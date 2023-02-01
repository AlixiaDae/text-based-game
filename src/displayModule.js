import roomFactory from "./roomMaker"

const displayModule = (() => {
    //Gamelines maker
    const mainBox = document.querySelector(".main-box")

    function linesMaker(container, message) {
        let messageContainer = document.createElement("div")
        messageContainer.classList.add("game-line")
        messageContainer.textContent = message
        container.appendChild(messageContainer)
    }

    function playerCommand(container,message) {
        let playerCommand = document.createElement("div")
        playerCommand.classList.add("player-command-line")
        playerCommand.textContent = message
        container.appendChild(playerCommand)
    }

    linesMaker(mainBox, "You wake up to a dark, and empty room. Only a small sliver of light coming from the small crack under the door allows you to see the dank and dirty state of the room.")

     //Declare where character is to know which message to write out depending on what action the player takes(When looking around the first room you spawn in, if player looks around, they see that the room has a locked door)

    //When you spawn in, the character is in the first room

    // Zero is the first room you spawn in
    let playerPosition = 0
    
    //if I'm in room one, create branches of what would happen if player was to do an action

    //temp room
    const spawnRoom = roomFactory(0, false)

    //Monitor commands typed in by player
    const actionButtons = document.querySelectorAll("button")

    actionButtons.forEach(button =>
        button.addEventListener("click", () => {
            if(button.textContent === "Look" && playerPosition == 0) {
                playerCommand(mainBox, "Looking more closely, you realize that the door seems to be made of some kind of steel with a small barred window akin to those in prison.")
            } else if(button.textContent === "Move"){
                if(spawnRoom.isLocked) {
                    playerCommand(mainBox, "You try to move forward and open the door but it is locked.")
                } else {
                    playerCommand(mainBox, "You open the door and move forward.")
                }
            }
        })
    )
    


})()

export default displayModule