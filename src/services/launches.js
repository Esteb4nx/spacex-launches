import axios from 'axios'
const API_URL = "https://api.spacexdata.com/v3"

export async function getAllLaunches(){
    return await axios.get(`${API_URL}/launches`)
}

export async function getLaunchByFlightNumber(flightNumber){
    return await axios.get(`${API_URL}/launches/${flightNumber}`)
}