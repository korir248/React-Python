import { GET_BOOKS_FAIL, GET_BOOKS_REQUEST, GET_BOOKS_SUCCESS } from "../types";
import axios from 'axios'


export const getBooks = ()=> async(dispatch)=>{
    try {

        dispatch({
            type: GET_BOOKS_REQUEST
        })


        const {data} = await axios.get("http://localhost:8080/books")
        console.log(data);
        
        setTimeout(() => {
            
        }, 2000);

        dispatch({
            type: GET_BOOKS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        console.log(error.message);

        dispatch({
            type: GET_BOOKS_FAIL,
            payload: error.message
        })
        
    }    
}                  