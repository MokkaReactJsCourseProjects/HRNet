"use client";

//Imports
import { useState } from "react";
import TopSection from "./_components/topSection";
import EmployeesTable from "./_components/employeesTable";
import PagingSection from "./_components/pagingSection";
import { useSelector } from "react-redux";
import { selectEmployees } from "@/app/_redux_toolkit/employeeSlice/selectors";

//Component of the employees page
export default function EmployeesPage() {
    const [pageIndex, setPageIndex] = useState(0);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [search, setSearch] = useState("");
    const employees = useSelector(selectEmployees);
    const totalEntries = employees.length;

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
