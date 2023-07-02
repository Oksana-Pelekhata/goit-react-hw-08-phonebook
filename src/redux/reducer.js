import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./Auth/slice";

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

 
const persistConfig = {
  key: 'token',
  storage,
   whitelist: ['access_token'] 
}
 
const persistedReducer = persistReducer(persistConfig, authReducer)

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer
})