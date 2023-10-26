import { combineReducers } from "redux";
import ShoppingListsReducers from "./Reducer";


//Here we used to add combination of reducers
export default combineReducers({
    shoppingList:ShoppingListsReducers // Only for now 
})

