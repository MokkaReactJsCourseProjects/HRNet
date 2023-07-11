//Imports
import Department from "@/app/_types/departement";
import Employee from "@/app/_types/employee";
import { createSlice } from "@reduxjs/toolkit";

//Types
type EmployeeSlice = {
    list: Employee[];
};

//Slice
const initialState: EmployeeSlice = {
    list: [],
};

export const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {
        employeeAdd: (state, action) => {
            state.list.push(action.payload);
        },
    },
});

export const { employeeAdd } = employeeSlice.actions;
