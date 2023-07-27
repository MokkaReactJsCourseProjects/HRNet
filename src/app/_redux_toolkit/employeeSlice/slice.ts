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
            birthdate: 1500000000000,
            startDate: 1500000000000,
            street: "fieldStreet",
            city: "fieldCity",
            state: 0,
            zipCode: "fieldZipCode",
            department: 0,
        },
        {
            id: 1,
            firstName: "THIERRY",
            lastName: "MENTOR",
            birthdate: 1500000000000,
            startDate: 1500000000000,
            street: "fieldStreet",
            city: "fieldCity",
            state: 1,
            zipCode: "fieldZipCode",
            department: 0,
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
