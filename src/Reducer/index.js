import {combineReducers} from '@reduxjs/toolkit'
import bookingReducer from '../Slices/bookingSlice'


const rootReducer = combineReducers({
    booking:bookingReducer
});

export default rootReducer;