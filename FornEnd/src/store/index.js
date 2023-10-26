import { combineReducers } from "redux";
import ShoppingListsReducers from "./Reducer";


export default combineReducers({
    shoppingList:ShoppingListsReducers
})

