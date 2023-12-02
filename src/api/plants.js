import axios from "axios"

const plantAPI = axios.create({
    baseURL: "http://localhost:6001/plants"
})

export const getPlants = async () => {
    const response = await plantAPI.get()
    return response.data
}

export const searchPlants = async (searchTerm) => {
    const response = await plantAPI.get(`?q=${searchTerm}`);
    return response.data;
};

export const addPlant = async (plant) => {
    return await plantAPI.post("/", plant)
}

export const updatePlant = async (id, plant) => {
    return await plantAPI.patch(`/${id}`, plant)
}

export const deletePlant = async ({ id }) => {
    return await plantAPI.delete(`/${id}`)
}
export default plantAPI;