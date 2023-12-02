import axios from "axios"

const plantAPI = axios.create({
    baseURL: "http://localhost:6001/plants"
})

export const getPlants = async () => {
    const response = await plantAPI.get()
    return response.data
}

export const updatePlant = async (id, plant) => {
    return await plantAPI.patch(`/${id}`, plant)
}

export default plantAPI;