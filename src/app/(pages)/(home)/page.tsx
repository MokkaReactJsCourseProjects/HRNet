"use client";

//Imports
import { FormEvent, useState } from "react";
import FormField from "./_components/formField";
import FormFieldGroup from "./_components/formFieldGroup";
import { useDispatch, useSelector } from "react-redux";
import { employeeAdd } from "@/app/_redux_toolkit/employeeSlice/slice";
import Department from "@/app/_types/departement";
import { selectEmployees } from "@/app/_redux_toolkit/employeeSlice/selectors";

//Component of the home page
export default function HomePage() {
    const [fieldFirstName, setFieldFirstName] = useState("");
    const [fieldLastName, setFieldLastName] = useState("");
    const [fieldBirthDate, setFieldBirthDate] = useState("");
    const [fieldStartDate, setFieldStartDate] = useState("");
    const [fieldStreet, setFieldStreet] = useState("");
    const [fieldCity, setFieldCity] = useState("");
    const [fieldState, setFieldState] = useState("");
    const [fieldZipCode, setFieldZipCode] = useState("");
    const [fieldDepartment, setFieldDepartment] = useState<Department>(
        Department.sales
    );
    const employees = useSelector(selectEmployees);
    const dispatch = useDispatch();
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newEmployee = {
            id: employees.length,
            firstName: fieldFirstName,
            lastName: fieldLastName,
            birthdate: fieldBirthDate,
            startDate: fieldStartDate,
            street: fieldStreet,
            city: fieldCity,
            state: fieldState,
            zipCode: fieldZipCode,
            department: fieldDepartment,
        };
        dispatch(employeeAdd(newEmployee));
    }

    return (
        <>
            <h2 className=" text-3xl font-medium mb-8">Create an employee</h2>
            <form className="flex flex-col mb-12" onSubmit={handleSubmit}>
                <FormField
                    name="First name"
                    value={fieldFirstName}
                    setValue={setFieldFirstName}
                />
                <FormField
                    name="Last name"
                    value={fieldLastName}
                    setValue={setFieldLastName}
                />
                <FormField
                    name="Birth date"
                    value={fieldBirthDate}
                    setValue={setFieldBirthDate}
                />
                <FormField
                    name="Start date"
                    value={fieldStartDate}
                    setValue={setFieldStartDate}
                />
                <FormFieldGroup name="Address">
                    <FormField
                        name="Street"
                        value={fieldStreet}
                        setValue={setFieldStreet}
                    />
                    <FormField
                        name="City"
                        value={fieldCity}
                        setValue={setFieldCity}
                    />
                    <FormField
                        name="State"
                        value={fieldState}
                        setValue={setFieldState}
                    />
                    <FormField
                        name="Zip code"
                        value={fieldZipCode}
                        setValue={setFieldZipCode}
                    />
                </FormFieldGroup>
                <FormField
                    name="Department"
                    value={fieldDepartment}
                    setValue={setFieldDepartment}
                />
                <button
                    type="submit"
                    className="bg-lime-500 p-2 hover:bg-lime-800 mt-10 text-white"
                >{`Save`}</button>
            </form>
        </>
    );
}
