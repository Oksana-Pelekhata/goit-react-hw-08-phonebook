import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./filterSlice";
import { authReducer } from "./Auth/slice";

export const reducer = combineReducers({
  // contacts: contactsReducer,
  filter: filterReducer,
  auth: authReducer
})