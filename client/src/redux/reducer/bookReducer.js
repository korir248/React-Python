import { GET_BOOKS_FAIL, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "../types";


const initialState = {
    books: [],
    loading: false,
    error: ""
}

const bookReducer = (state = initialState,{type,payload})=>{
    switch (type) {
        case GET_BOOKS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case GET_BOOKS_SUCCESS:
            return {
                ...state,
                loading: false,
                books: payload
            }
        case GET_BOOKS_FAIL:
            return {
                ...state,
                loading: false,
                error: payload
            }
        default:
            return state;
    }
}

export default bookReducer