import DuelService from "./dd-service.js"

const duelService = new DuelService()

const app = document.getElementById("app")

function drawDragons(dragons){
    // console.log(dragons)
    //every dragon needs a button to select it as the dragon of choice
let template = ''
for (let i = 0; i < dragons.length; i++) {
    const dragon = dragons[i];
    template +=`
    <div>
    <h4>${dragon.name}</h4>
    <img src="${dragon.imgUrl}" alt="dragon goes here">
    <button onclick="selectDragon('${dragon.id}')">Select<button>
    </div>
    `
}
document.getElementById('dragons').innerHTML = template





    //draw template for dragons
}

function drawChampions(champions){
let template = ''
for (let i = 0; i < champions.length; i++) {
    const champion = champions[i];
    template +=`
    
    <div>
    <h4>${champion.name}</h4>
    <img src="${champion.imgUrl}" alt="champion goes here">
    </div>
`
}
document.getElementById('champions').innerHTML = template



}










export default class DuelController {
    constructor(){
        console.log("hello from duelController!")
        duelService.getDragons(drawDragons) // putting things in the constructor makes them run when page loads
        duelService.getChampions(drawChampions)
    }
    selectDragon(id){
        duelService.setDragon(id)
    }

}
