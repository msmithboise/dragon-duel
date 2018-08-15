import DuelController from "./app/components/dd-controller.js"

class App {
    constructor(){
        console.log("hello from main!")
        this.controllers = {
            dragonDuelController: new DuelController()
            
        }
    }
}

window.app = new App()