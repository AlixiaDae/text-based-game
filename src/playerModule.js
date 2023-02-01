export class Player {
    constructor(name, bag) {
        this.name = name
        this.bag = []
    }

    sayHi() {
        console.log(this.name)
    }

    showInventory() {
        console.log(this.bag.map(item => item))
    }

    addToInventory(newItem) {
        if(this.bag.includes(newItem)) return
        this.bag.push(newItem)
    }

    removeFromInventory(item) {
        let itemToRemove = this.bag.indexOf(item)
        return this.bag.splice(itemToRemove, 1)
    }

    useKey(chosenKey) {
        
    }
}