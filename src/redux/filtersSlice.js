import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState"

const filterSlice = createSlice({
    name: "filters",
    initialState: initialState.filters,
    reducers: {
        filterContacts: (state, action) => {
            state.name = action.payload
        }
    }
})
export const { filterContacts } = filterSlice.actions
export default filterSlice.reducer