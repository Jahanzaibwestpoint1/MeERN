export const LOADING_STATE = 'LOADING_STATE';
export const GET_ALL_TASKS = 'GET_ALL_TASKS';
export const ADD_TASK = "ADD_TASK";
export const UPDATE_LIST_ITEM = "UPDATE_LIST_ITEM"

const intialize_state = {
    loadingState: false,
    getData: [],
    addTasks: [],
    updateListItem: []
}

const ShoppingListsReducers = (state = intialize_state, action) => {
    switch (action.type) {
        case LOADING_STATE:
            return {
                ...state,
                loadingState: action.payload,
            };
        case GET_ALL_TASKS:
            return {
                ...state,
                getData: action.payload,
            };
        case ADD_TASK:
            return {
                ...state,
                addTasks: action.payload,
            };
        case UPDATE_LIST_ITEM:
            return {
                ...state,
                updateListItem: action.payload,
            };
        default:
            return state;
    }
}


export default ShoppingListsReducers;