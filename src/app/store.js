import {configureStore} from "@reduxjs/toolkit"
import postReducer from '../features/Post/postSlice'
export const store = configureStore({
    reducer:{
    post: postReducer,
    }
})
