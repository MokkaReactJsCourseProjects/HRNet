//Imports
import { Dispatch, SetStateAction } from "react";
import FormInputText from "../formInputText";
import FormInputDate from "../formInputDate";
import FormInputSelect, { InputSelectInfos } from "../formInputSelect";

//Types
type FormFieldProps = {
    name: string;
    type: "text" | "date" | "select";
    value: any;
    setValue: Dispatch<SetStateAction<any>>;
    inputSelectInfos?: InputSelectInfos;
};

//Component of an input field in the create an employee form
export default function FormField({
    name,
    type,
    value,
    setValue,
    inputSelectInfos,
}: FormFieldProps) {
    return (
        <label className="my-3 flex flex-col">
            {name}
            {type === "date" ? (
                <FormInputDate value={value} setValue={setValue} />
            ) : type === "select" ? (
                <FormInputSelect
                    value={value}
                    setValue={setValue}
                    inputSelectInfos={inputSelectInfos}
                />
            ) : (
                <FormInputText value={value} setValue={setValue} />
            )}
        </label>
    );
}
