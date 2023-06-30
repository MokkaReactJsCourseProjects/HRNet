//Imports
import Employee from "@/app/_types/employee";

//Types
type EmployeesTableProps = {
	employees: Employee[];
};

//Component of the employees table of the current employees page
export default function EmployeesTable({ employees }: EmployeesTableProps) {
	return (
		<table className="my-10 border">
			<thead>
				<tr>
					<th>First name</th>
					<th>Last name</th>
					<th>Birth date</th>
					<th>Start date</th>
					<th>Street</th>
					<th>City</th>
					<th>State</th>
					<th>Zip code</th>
					<th>Department</th>
				</tr>
			</thead>
			<tbody>
				{employees.map((employee) => (
					<tr key={employee.id}>
						<td>{employee.firstName}</td>
						<td>{employee.lastName}</td>
						<td>{employee.birthdate}</td>
						<td>{employee.startDate}</td>
						<td>{employee.street}</td>
						<td>{employee.city}</td>
						<td>{employee.state}</td>
						<td>{employee.zipCode}</td>
						<td>{employee.department}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
