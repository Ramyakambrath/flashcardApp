import cardReducer from './cardReducer'
import {combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer= combineReducers({
    cardR:cardReducer,
    firestore:firestoreReducer
})

export default rootReducer