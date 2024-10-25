import axios from 'axios'

const BASE_URL = "http://127.0.0.1:8000/api/"
const LOGIN_URL = `${BASE_URL}token/`
const REFRESH_URL = `${BASE_URL}token/refresh`
const LOGOUT_URL = `${BASE_URL}logout/`

export const login = async (username, password) => {
    const response = await axios.post(LOGIN_URL, 
        {username, password},
    {withCredentials: true})
    return response.data.success
}

export const refresh_token = async () => {
    const response = await axios.post(REFRESH_URL, 
        {},
    {withCredentials: true})
    return response.data.success
}

export const logout = async () => {
    try{
        await axios.post(LOGOUT_URL, 
            {},
        {withCredentials: true})
        return true
    } catch (error){
        return false
    }
}