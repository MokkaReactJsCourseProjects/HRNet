//Imports
import { ChangeEvent, Dispatch, SetStateAction } from "react";

//Types
type FormInputTextProps = {
    value: any;
    setValue: Dispatch<SetStateAction<any>>;
};

//Component of an text input in the create an employee form
export default function FormInputText({ value, setValue }: FormInputTextProps) {
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }
    return (
        <input
            type="text"
            className="border-b border-gray-400 bg-transparent"
            value={value}
            onChange={handleChange}
        />
    );
}
