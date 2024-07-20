import { initialState } from "./initialState"
import { createSlice } from "@reduxjs/toolkit";


const contactSlice = createSlice({
    name: "contacts",
    initialState: initialState.contacts,
    reducers: {
        deleteContact: (state, action) => {
            state.items = state.items.filter(el => el.id !== action.payload)

        },
        addContact: (state, action) => {
            state.items = [...state.items, action.payload]

        }
    }
})

export const { addContact, deleteContact } = contactSlice.actions
export default contactSlice.reducer
