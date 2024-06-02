import axios from "axios"

const API_BASE_URL = "https://dhiway.com"

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const createWitness = async (data) => {
  const response = await api.post("/create", data)
  return response.data
}

export const submitWitness = async (data) => {
  const response = await api.post("/witness", data)
  return response.data
}

export const sendEmail = async (data) => {
  const response = await api.post("/mail", data)
  return response.data
}
