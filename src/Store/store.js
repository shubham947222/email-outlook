import {configureStore} from '@reduxjs/toolkit'
import emailReducer from './emailsDataSlice'
import filterReducer from './filterSlice'

export const store = configureStore({
    reducer : {
        emails : emailReducer,
        filter : filterReducer
    }
})