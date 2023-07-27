//Imports
import { Dispatch, SetStateAction } from "react";
import FormInputText from "../formInputText";
import FormInputDate from "../formInputDate";

//Types
type FormFieldProps = {
    name: string;
    type: "text" | "date" | "select";
    value: any;
    setValue: Dispatch<SetStateAction<any>>;
};

//Component of an input field in the create an employee form
export default function FormField({
    name,
    type,
    value,
    setValue,
}: FormFieldProps) {
    return (
        <label className="my-3 flex flex-col">
            {name}
            {type === "date" ? (
                <FormInputDate value={value} setValue={setValue} />
            ) : (
                <FormInputText value={value} setValue={setValue} />
            )}
        </label>
    );
}
