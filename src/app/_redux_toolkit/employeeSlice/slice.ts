//Imports
import { createSlice } from "@reduxjs/toolkit";

//Slice
const initialState = {
    list: [],
};

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        test: (state, action) => {
            state.list = action.payload;
        },
    },
});
