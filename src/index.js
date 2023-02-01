import { Player } from "./playerModule";
import webPage from "./webpage";
import "./style.css"
import displayModule from "./displayModule";

let playerOne = new Player("Lukas")

playerOne.sayHi()
playerOne.showInventory()
playerOne.addToInventory("keyOne")
playerOne.addToInventory("keyTwo")
playerOne.addToInventory("keyOne")
playerOne.removeFromInventory("keyTwo")
playerOne.showInventory()

displayModule