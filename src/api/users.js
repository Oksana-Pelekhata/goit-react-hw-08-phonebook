import axios from "axios"

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/'
})

const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = token
}

export const register = async (user) => {
    return await instance.post('users/signup', user)
}

export const login = async (user) => {
    const { data } = await instance.post('/login', user)
    if('access_token' in data) setToken(`Bearer ${data.access_token}`)
    return data
}

export const getProfile = async () => {
    const { data } = await instance.get('/current')
    return data
}

// export const getContacts = async () => {
//     const { data } = await axios.get('https://648f851175a96b6644453225.mockapi.io/contacts')
//     return data
// }

// export const addContact = async contact => {
//     const { data } = await axios.post('https://648f851175a96b6644453225.mockapi.io/contacts', contact)
//     return data
// }

// export const deleteContact = async id => {
//     const { data } = await axios.delete(`https://648f851175a96b6644453225.mockapi.io/contacts/${id}`)
//     return data
// }