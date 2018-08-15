import Dragon from "../models/dragon.js"
import Champion from "../models/champion.js"

const duelApi = axios.create({
    baseURL: 'https://dragon-duel.herokuapp.com/api/',
    timeout: 3000
})

export default class DuelService {
    
    
    getDragons(draw){
        
        duelApi.get("dragons")
            .then(res => {
                //map takes each item from an array and returns some new item to replace it
                    // in this case a dragon
                let dragons = res.data.map(rawDragonData => new Dragon(rawDragonData)) //converts raw data from database to Dragon class
                draw(dragons)
            })
        
    }


    getChampions(draw){

        duelApi.get("champions")
        .then(res => {
            
            let champions = res.data.map(rawChampionData => new Champion(rawChampionData))
            draw(champions)
        })
    }



    
}
console.log("hello from duelService!")
// lets start by writing a function to getData

// then write a function to draw data