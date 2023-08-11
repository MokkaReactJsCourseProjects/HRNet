//Imports
import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./employeeSlice/slice";

//Store
export default configureStore({
    reducer: {
        employees: employeeSlice.reducer,
    },
});
