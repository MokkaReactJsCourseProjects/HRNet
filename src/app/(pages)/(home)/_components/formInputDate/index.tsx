//Imports
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Types
type FormFieldProps = {
    value: any;
    setValue: Dispatch<SetStateAction<any>>;
};

//Component of an text input in the create an employee form
export default function FormInputDate({ value, setValue }: FormFieldProps) {
    function handleChange(date: Date) {
        setValue(date);
    }
    return (
        <DatePicker
            selected={value}
            onChange={handleChange}
            className="border-b border-gray-400 bg-transparent w-full"
        />
        // <input
        //     type="text"
        //     className=" border-b border-gray-400 bg-transparent"
        //     value={value}
        //     onChange={handleChange}
        // />
    );
}
