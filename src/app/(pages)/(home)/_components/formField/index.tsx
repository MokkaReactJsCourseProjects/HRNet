//Imports
import { ChangeEvent, Dispatch, SetStateAction } from "react";

//Types
type FormFieldProps = {
    name: string;
    value: any;
    setValue: Dispatch<SetStateAction<any>>;
};

//Component of a input field in the create an employee form
export default function FormField({ name, value, setValue }: FormFieldProps) {
    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
    }
    return (
        <label className="my-3 flex flex-col">
            {name}
            <input
                type="text"
                className=" border-b border-gray-400 bg-transparent"
                value={value}
                onChange={handleChange}
            />
        </label>
    );
}
