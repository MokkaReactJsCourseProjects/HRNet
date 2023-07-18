//Imports
import Department from "./department";
import State from "./state";

//Types
type Employee = {
    id: number;
    firstName: string;
    lastName: string;
    birthdate: string;
    startDate: string;
    street: string;
    city: string;
    state: State;
    zipCode: string;
    department: Department;
};

export default Employee;
