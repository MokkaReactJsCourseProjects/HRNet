//Imports
import { ChangeEvent, Dispatch, SetStateAction } from "react";

//Types
export type InputSelectInfos = {
    optionsNumber: number;
    translateId: (id: number) => string;
};

type FormInputSelectProps = {
    value: any;
    setValue: Dispatch<SetStateAction<any>>;
    inputSelectInfos?: InputSelectInfos;
};

//Component of an text input in the create an employee form
export default function FormInputSelect({
    value,
    setValue,
    inputSelectInfos = {
        optionsNumber: 0,
        translateId: () => "",
    },
}: FormInputSelectProps) {
    let options = [];
    for (let i = 0; i < inputSelectInfos.optionsNumber; i++) {
        options[i] = i;
    }
    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        setValue(e.target.value);
    }

    return (
        <select
            className="border border-gray-400 bg-transparent w-full p-1"
            value={value}
            onChange={handleChange}
        >
            {options.map((option) => {
                return (
                    <option key={option} value={option}>
                        {inputSelectInfos.translateId(option)}
                    </option>
                );
            })}
        </select>
    );
}
