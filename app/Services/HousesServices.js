import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { Pop } from "../Utils/Pop.js"
import { sandboxApi } from "./AxiosService.js"


class HousesServices{
  async getHouses(){
    try {
      const res = await sandboxApi.get('/houses')
      appState.houses = res.data.map(house => new House(house))
    }
    catch(error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async createHouse(formData){
    console.log(formData)
    const res = await sandboxApi.post('/houses', formData)
    console.log(res)
    let newHouse = new House(res.data)
    appState.houses.push(newHouse)
    appState.emit('houses')
    console.log(houses)
  }


}

export const housesServices = new HousesServices()