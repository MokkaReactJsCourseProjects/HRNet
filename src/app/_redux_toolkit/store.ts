//Imports
import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./employeeSlice/slice";

export default configureStore({
    reducer: {
        employees: employeeSlice.reducer,
    },
});
