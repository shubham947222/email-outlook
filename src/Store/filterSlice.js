import { createSlice } from "@reduxjs/toolkit";

const initialState={
    filterState:'all'
}

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setFilter:(state,action)=>{
            state.filterState = action.payload
        }
    }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer;