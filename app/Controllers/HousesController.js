import { appState } from "../AppState.js"
import { housesServices } from "../Services/HousesServices.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"

async function _getHouses(){
  await housesServices.getHouses()
  _drawHouses()
}

function _drawHouses(){
  let template = ''
  let houses = appState.houses
  houses.forEach(e => {
    template += e.houseTemplate
  })
  setHTML('houses-container', template)
}


export class HousesController{
  constructor(){
    _getHouses()
    appState.on('houses', _drawHouses)
  }

  async createHouse(){
    try{
    window.event.preventDefault()
    const form = window.event.target
    const formData = getFormData(form)
    housesServices.createHouse(formData)
    }
    catch(error){
      console.error(error)
      Pop.error(error)
    }
    
  }


}