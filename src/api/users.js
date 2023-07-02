import axios from "axios"

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
})


// export const register = async (user) => {
//     return await instance.post('/users/signup', user)
// }

export const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const dellToken = () => {
	delete instance.defaults.headers.common['Authorization']
}

export const register = async (user) => {
    const { data } = await instance.post('/users/signup', user)
    
    if('token' in data) setToken(data.token)
    return data
}
export const login = async (user) => {
    const { data } = await instance.post('/users/login', user)
    console.log('data', data)
    if('token' in data) setToken(`Bearer ${data.token}`)
    return data
}

export const getProfile = async () => {
    const { data } = await instance.get('/users/current')
    return data
}
export const logout = async () => {
    await instance.post('/users/logout')
    dellToken()
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

///xcvbnm@mail.com