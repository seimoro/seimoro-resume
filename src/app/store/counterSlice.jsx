import { createSlice } from "@reduxjs/toolkit";

const saveLocalStorage = (value) => {
    localStorage.setItem('value', JSON.stringify(value))
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: JSON.parse(localStorage.getItem("value") ?? 0),
    },
    reducers: {
        increment: (state) => {
            state.value += 1
            saveLocalStorage(state.value)
        },
        discrement: (state) => {
            state.value -= 1
            saveLocalStorage(state.value)
        }
    }
})

export const { increment, discrement } = counterSlice.actions

export default counterSlice.reducer