"use client";

//Imports
import { useState } from "react";
import TopSection from "./_components/topSection";
import EmployeesTable from "./_components/employeesTable";
import PagingSection from "./_components/pagingSection";
import { useSelector } from "react-redux";
import { selectEmployees } from "@/app/_redux_toolkit/employeeSlice/selectors";
import { filterEmployees } from "./_utils";

//Component of the employees page
export default function EmployeesPage() {
    const [pageIndex, setPageIndex] = useState(0);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [search, setSearch] = useState("");
    const searchWords = search.split(/\W+/).filter(Boolean);
    const employees = useSelector(selectEmployees);
    const searchedEmployees = filterEmployees(employees, search, searchWords);
    const totalEntries = searchedEmployees.length;
    const firstEntry = Math.min(totalEntries, 1 + entriesPerPage * pageIndex);
    const lastEntry = Math.min(entriesPerPage * (pageIndex + 1), totalEntries);

    return (
        <>
            <h2 className=" text-3xl font-medium mb-8">Current employees</h2>
            <TopSection
                search={search}
                setSearch={setSearch}
                setEntriesPerPage={setEntriesPerPage}
                totalEntries={totalEntries}
                firstEntry={firstEntry}
                lastEntry={lastEntry}
            />
            <EmployeesTable
                totalEmployees={employees.length}
                searchedEmployees={searchedEmployees}
                firstEntry={firstEntry}
                lastEntry={lastEntry}
            />
            <PagingSection
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
                entriesPerPage={entriesPerPage}
                totalEntries={totalEntries}
            />
        </>
    );
}
