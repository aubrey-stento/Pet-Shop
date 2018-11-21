import CatController from "./components/cat/cat-controller.js";
import DogController from "./components/dog/dog-controller.js";

console.log("This is my App")

class App {
    constructor() {
    this.controllers = {
        CatController: new CatController(),
        DogController: new DogController()
    }
}
}


window.app = new App()