const webPage = (() => {
    const mainBox = document.createElement("div")
    mainBox.classList.add("main-box")
    document.body.appendChild(mainBox)

    const logBox = document.createElement("div")
    logBox.classList.add("log-box")
    document.body.appendChild(logBox)

    //Command buttons

    const lookBtn = document.createElement("button")
    lookBtn.textContent = "Look"
    lookBtn.classList.add("action-button")
    lookBtn.id = "look-button"
    logBox.appendChild(lookBtn)

    lookBtn.addEventListener("click", () => {
        const playerAction = document.createElement("div")
        playerAction.classList.add("player-action")
        playerAction.textContent = lookBtn.textContent
        mainBox.appendChild(playerAction)
    })

    const moveBtn = document.createElement("button")
    moveBtn.textContent = "Move"
    moveBtn.classList.add("action-button")
    moveBtn.id = "move-button"
    logBox.appendChild(moveBtn)

    moveBtn.addEventListener("click", () => {
        const playerAction = document.createElement("div")
        playerAction.classList.add("player-action")
        playerAction.textContent = moveBtn.textContent
        mainBox.appendChild(playerAction)
    })

    /*
    const commandLine = document.createElement("input")
    commandLine.classList.add("command-line")
    logBox.appendChild(commandLine)

    function showText() {
        let text = document.createElement("div")
        text.classList.add("text-command")
        text.textContent = commandLine.value      
        mainBox.appendChild(text)
    }

    commandLine.addEventListener("keypress", (e) => {
        if(e.key === "Enter") {
            showText()
        }
    })
    */

})()

export default webPage