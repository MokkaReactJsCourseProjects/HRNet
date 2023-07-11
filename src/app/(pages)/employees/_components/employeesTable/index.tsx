//Imports
import Employee from "@/app/_types/employee";

//Types
type EmployeesTableProps = {
    totalEmployees: number;
    searchedEmployees: Employee[];
};

type TableHeaderProps = {
    text: string;
};

type TableRowProps = {
    children: React.ReactNode;
};

type TableDataProps = {
    text: string;
};

function TableHeader({ text }: TableHeaderProps) {
    return (
        <th className="px-2 py-3 text-left font-bold border-b border-gray-500">
            {text}
        </th>
    );
}

function TableRow({ children }: TableRowProps) {
    return (
        <tr className="border-b border-gray-300 last:border-b-0">{children}</tr>
    );
}

function TableData({ text }: TableDataProps) {
    return <td className="p-2 text-sm">{text}</td>;
}

//Component of the employees table of the current employees page
export default function EmployeesTable({
    totalEmployees,
    searchedEmployees,
}: EmployeesTableProps) {
    if (totalEmployees === 0) {
        return <p className="text-center my-24 text-xl">No saved employee</p>;
    }

    if (searchedEmployees.length === 0) {
        return <p className="text-center my-24 text-xl">No employee found</p>;
    }

    return (
        <table className="my-10 bg-gray-100 rounded-lg">
            <thead>
                <TableRow>
                    <TableHeader text="First name" />
                    <TableHeader text="Last name" />
                    <TableHeader text="Birth name" />
                    <TableHeader text="Start name" />
                    <TableHeader text="Street" />
                    <TableHeader text="City" />
                    <TableHeader text="State" />
                    <TableHeader text="Zip code" />
                    <TableHeader text="Department" />
                </TableRow>
            </thead>
            <tbody>
                {searchedEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                        <TableData text={employee.firstName} />
                        <TableData text={employee.lastName} />
                        <TableData text={employee.birthdate} />
                        <TableData text={employee.startDate} />
                        <TableData text={employee.street} />
                        <TableData text={employee.city} />
                        <TableData text={employee.state} />
                        <TableData text={employee.zipCode} />
                        <TableData text={employee.department.toString()} />
                    </TableRow>
                ))}
            </tbody>
        </table>
    );
}
