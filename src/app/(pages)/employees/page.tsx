"use client";

//Imports
import { useState } from "react";
import TopSection from "./_components/topSection";
import EmployeesTable from "./_components/employeesTable";
import PagingSection from "./_components/pagingSection";

//Component of the employees page
export default function EmployeesPage() {
	const [pageIndex, setPageIndex] = useState(0);
	const [entriesPerPage, setEntriesPerPage] = useState(10);
	const [search, setSearch] = useState("");

	const employees = [
		{
			id: 0,
			firstName: "Dylan",
			lastName: "Pean",
			birthdate: "1970-01-01",
			startDate: "1970-01-01",
			street: "Street",
			city: "City",
			state: "State",
			zipCode: "018379847",
			department: 0,
		},
	];
	const totalEntries = 50; //employees.length

	return (
		<>
			<h2 className=" text-3xl font-medium mb-8">Current employees</h2>
			<TopSection
				search={search}
				setSearch={setSearch}
				pageIndex={pageIndex}
				entriesPerPage={entriesPerPage}
				setEntriesPerPage={setEntriesPerPage}
				totalEntries={totalEntries}
			/>
			<EmployeesTable employees={employees} />
			<PagingSection
				pageIndex={pageIndex}
				setPageIndex={setPageIndex}
				entriesPerPage={entriesPerPage}
				totalEntries={totalEntries}
			/>
		</>
	);
}
