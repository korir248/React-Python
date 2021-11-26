import { applyMiddleware, combineReducers, createStore } from "redux";
import bookReducer from './reducer/bookReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
const rootReducer = combineReducers({books: bookReducer})

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))