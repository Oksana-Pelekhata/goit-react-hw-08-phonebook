import axios from "axios"

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com'
})

// export const register = async (user) => {
//     return await instance.post('/users/signup', user)
// }

const setToken = (token) => {
    instance.defaults.headers.common['Authorization'] = token
}

//   async (credentials, thunkAPI) => {
//     try {
//       const res = await axios.post('/users/signup', credentials);
//       // After successful registration, add the token to the HTTP header
//       setAuthHeader(res.data.token);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
export const register = async (user) => {
    const {data} = await instance.post('/users/signup', user)
    if('access_token' in data) setToken(`Bearer ${data.access_token}`)
    return data
}
export const login = async (user) => {
    const { data } = await instance.post('/users/login', user)
    if('access_token' in data) setToken(`Bearer ${data.access_token}`)
    return data
}

export const getProfile = async () => {
    const { data } = await instance.get('/users/current')
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