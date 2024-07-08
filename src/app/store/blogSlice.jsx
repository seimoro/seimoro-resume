import { createSlice } from "@reduxjs/toolkit";

const saveLocalStorage = (blogData) => {
    localStorage.setItem('blog', JSON.stringify(blogData))
}

const initialState = JSON.parse(localStorage.getItem('blog')) ?? []

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addBlogItem: (state, action) => {
            state.push(action.payload)  
            saveLocalStorage(state)
        },
        revoveBlogItem: (state, action) => {
            const index = state[action.payload]
            state.splice(index, 1)
            saveLocalStorage(state)
        }
    }
})

export const { addBlogItem, revoveBlogItem } = blogSlice.actions
export default blogSlice.reducer