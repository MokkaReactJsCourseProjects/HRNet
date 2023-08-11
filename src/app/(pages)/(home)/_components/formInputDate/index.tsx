//Imports
import { Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Types
type FormInputDateProps = {
    value: any;
    setValue: Dispatch<SetStateAction<any>>;
};

//Component of an text input in the create an employee form
export default function FormInputDate({ value, setValue }: FormInputDateProps) {
    function handleChange(date: Date) {
        setValue(date);
    }
    return (
        <DatePicker
            selected={value}
            onChange={handleChange}
            className="border border-gray-400 bg-transparent w-full p-1"
        />
    );
}
