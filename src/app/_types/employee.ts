//Imports
import Department from "./departement";

//Types
type Employee = {
	id: number;
	firstName: string;
	lastName: string;
	birthdate: string;
	startDate: string;
	street: string;
	city: string;
	state: string;
	zipCode: string;
	department: Department;
};

export default Employee;
