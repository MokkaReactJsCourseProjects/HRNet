//Imports
import Employee from "@/app/_types/employee";
import { createSlice } from "@reduxjs/toolkit";

//Types
type EmployeeSlice = {
    list: Employee[];
};

//Slice
const initialState: EmployeeSlice = {
    list: [
        {
            id: 0,
            firstName: "Dylan",
            lastName: "Pean",
            birthdate: 1020549600000,
            startDate: 1671404400000,
            street: "Crystal Avenue",
            city: "Eldoria",
            state: 40,
            zipCode: "987",
            department: 2,
        },
    ],
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
