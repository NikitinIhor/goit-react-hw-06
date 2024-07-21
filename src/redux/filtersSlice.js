import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState"

const filterSlice = createSlice({
    name: "filters",
    initialState: initialState.filters,
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload
        }
    }
})
export const { changeFilter } = filterSlice.actions
export default filterSlice.reducer