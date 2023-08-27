"use client";

//Imports
import { FormEvent, useState } from "react";
import FormField from "./_components/formField";
import FormFieldGroup from "./_components/formFieldGroup";
import { useDispatch, useSelector } from "react-redux";
import { employeeAdd } from "@/app/_redux_toolkit/employeeSlice/slice";
import Department from "@/app/_types/department";
import { selectEmployees } from "@/app/_redux_toolkit/employeeSlice/selectors";
import State from "@/app/_types/state";
import { translateDepartment, translateState } from "@/app/_utils";
import { Modal } from "generic-react-modal";

//Component of the home page
export default function HomePage() {
    const [fieldFirstName, setFieldFirstName] = useState<string>("");
    const [fieldLastName, setFieldLastName] = useState<string>("");
    const [fieldBirthDate, setFieldBirthDate] = useState<Date>();
    const [fieldStartDate, setFieldStartDate] = useState<Date>();
    const [fieldStreet, setFieldStreet] = useState<string>("");
    const [fieldCity, setFieldCity] = useState<string>("");
    const [fieldState, setFieldState] = useState<State>(State.alabama);
    const [fieldZipCode, setFieldZipCode] = useState<string>("");
    const [fieldDepartment, setFieldDepartment] = useState<Department>(
        Department.sales
    );
    const [errorModal, setErrorModal] = useState(false);
    const [successModal, setSuccessModal] = useState(false);
    const employees = useSelector(selectEmployees);
    const dispatch = useDispatch();
    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (
            fieldFirstName?.length > 0 &&
            fieldLastName?.length > 0 &&
            fieldBirthDate &&
            fieldStartDate &&
            fieldStreet.length > 0 &&
            fieldCity.length > 0 &&
            fieldZipCode.length > 0
        ) {
            const newEmployee = {
                id: employees.length,
                firstName: fieldFirstName,
                lastName: fieldLastName,
                birthdate: fieldBirthDate.getTime(),
                startDate: fieldStartDate.getTime(),
                street: fieldStreet,
                city: fieldCity,
                state: Number(fieldState),
                zipCode: fieldZipCode,
                department: Number(fieldDepartment),
            };
            dispatch(employeeAdd(newEmployee));
            setSuccessModal(true);
        } else {
            setErrorModal(true);
        }
    }

    return (
        <>
            {errorModal ? (
                <Modal
                    opened={errorModal}
                    setOpened={setErrorModal}
                    title="Error"
                    type="error"
                >
                    <p>Some fields are missing !</p>
                </Modal>
            ) : null}
            {successModal ? (
                <Modal
                    opened={successModal}
                    setOpened={setSuccessModal}
                    title="Added"
                    type="success"
                >
                    <p>Employee created !</p>
                </Modal>
            ) : null}
            <h2 className="text-2xl font-medium mb-8 tablet:text-3xl">
                Create an employee
            </h2>
            <form
                className="flex flex-col mb-12 w-full laptop:w-auto laptop:max-w-xl"
                onSubmit={handleSubmit}
            >
                <FormField
                    name="First name"
                    type="text"
                    value={fieldFirstName}
                    setValue={setFieldFirstName}
                />
                <FormField
                    name="Last name"
                    type="text"
                    value={fieldLastName}
                    setValue={setFieldLastName}
                />
                <FormField
                    name="Birth date"
                    type="date"
                    value={fieldBirthDate}
                    setValue={setFieldBirthDate}
                />
                <FormField
                    name="Start date"
                    type="date"
                    value={fieldStartDate}
                    setValue={setFieldStartDate}
                />
                <FormFieldGroup name="Address">
                    <FormField
                        name="Street"
                        type="text"
                        value={fieldStreet}
                        setValue={setFieldStreet}
                    />
                    <FormField
                        name="City"
                        type="text"
                        value={fieldCity}
                        setValue={setFieldCity}
                    />
                    <FormField
                        name="State"
                        type="select"
                        value={fieldState}
                        setValue={setFieldState}
                        inputSelectInfos={{
                            optionsNumber: Object.keys(State).length / 2,
                            translateId: translateState,
                        }}
                    />
                    <FormField
                        name="Zip code"
                        type="text"
                        value={fieldZipCode}
                        setValue={setFieldZipCode}
                    />
                </FormFieldGroup>
                <FormField
                    name="Department"
                    type="select"
                    value={fieldDepartment}
                    setValue={setFieldDepartment}
                    inputSelectInfos={{
                        optionsNumber: Object.keys(Department).length / 2,
                        translateId: translateDepartment,
                    }}
                />
                <button
                    type="submit"
                    className="bg-lime-500 p-2 hover:bg-lime-800 mt-10 text-white"
                >{`Save`}</button>
            </form>
        </>
    );
}
