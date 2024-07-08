import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import blogReducer from './blogSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        blog: blogReducer
    },
})