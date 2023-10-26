import axios from "axios";
import { ADD_TASK, GET_ALL_TASKS, LOADING_STATE, UPDATE_LIST_ITEM } from "./Reducer"
import { BASE_URL, endPoints } from "./Api";


export const handleAllShoppingList = () => {
    return async (dispatch) => {
        dispatch({ type: LOADING_STATE, payload: true })
        try {
            axios.get(`${BASE_URL.mainUrl}${endPoints.getLists}`).then((res) => {
                dispatch({ type: GET_ALL_TASKS, payload: res.data })
                dispatch({ type: LOADING_STATE, payload: false })
            }).catch((err) => {
                dispatch({ type: LOADING_STATE, payload: false })
            })
        } catch (error) {
            dispatch({ type: LOADING_STATE, payload: false })
        }
    }
}


export const handleAddItem = (data, navigate) => {
    return async (dispatch) => {
        dispatch({ type: LOADING_STATE, payload: true })
        try {
            axios.post(`${BASE_URL.mainUrl}${endPoints.addList}`, {
                "itemName": data.name,
                "itemDescription": data.description,
                "itemQuantity": data.quantity,
                "itemStatus": false
            }).then((res) => {
                dispatch({ type: ADD_TASK, payload: res.data })
                dispatch({ type: LOADING_STATE, payload: false })
                navigate("/")
                dispatch(handleAllShoppingList())
            }).catch((err) => {
                alert("Some thing went wrong")
                dispatch({ type: LOADING_STATE, payload: false })
            })
        } catch (error) {
            dispatch({ type: LOADING_STATE, payload: false })
        }
    }
}



export const handleDeleteListItem = (id) => {
    return async (dispatch) => {
        dispatch({ type: LOADING_STATE, payload: true })
        try {
            axios.delete(`${BASE_URL.mainUrl}${endPoints.deleteItem}/${id}`).then((res) => {
                dispatch({ type: LOADING_STATE, payload: false })
                dispatch(handleAllShoppingList())
            }).catch((err) => {
                dispatch({ type: LOADING_STATE, payload: false })
            })
        } catch (error) {
            dispatch({ type: LOADING_STATE, payload: false })
        }
    }
}



export const handleUpdateItem = (data, navigate,id) => {
    return async (dispatch) => {
        dispatch({ type: LOADING_STATE, payload: true })
        try {
            axios.post(`${BASE_URL.mainUrl}${endPoints.updateItem}/${id}`, {
                "itemName": data.name,
                "itemDescription": data.description,
                "itemQuantity": data.quantity,
            }).then((res) => {
                dispatch({ type: UPDATE_LIST_ITEM, payload: res.data })
                dispatch({ type: LOADING_STATE, payload: false })
                navigate("/")
                dispatch(handleAllShoppingList())
            }).catch((err) => {
                alert("Some thing went wrong")
                dispatch({ type: LOADING_STATE, payload: false })
            })
        } catch (error) {
            dispatch({ type: LOADING_STATE, payload: false })
        }
    }
}



export const handleUpdateItemStatus = (data,id) => {
    return async (dispatch) => {
        dispatch({ type: LOADING_STATE, payload: true })
        const currentStatus = data ? false :true;
        try {
            axios.post(`${BASE_URL.mainUrl}${endPoints.updateItemStatus}/${id}`, {
                "itemStatus": currentStatus
            }).then((res) => {
                dispatch({ type: LOADING_STATE, payload: false })
                dispatch(handleAllShoppingList())
            }).catch((err) => {
                alert("Some thing went wrong")
                dispatch({ type: LOADING_STATE, payload: false })
            })
        } catch (error) {
            dispatch({ type: LOADING_STATE, payload: false })
        }
    }
}


