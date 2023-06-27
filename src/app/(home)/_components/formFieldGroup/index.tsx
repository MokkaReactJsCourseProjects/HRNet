//Imports

//Types
type FormFieldGroupProps = {
    name: string;
    children: React.ReactNode;
};

//Component of a fieldset in the create an employee form
export default function FormFieldGroup({
    name,
    children,
}: FormFieldGroupProps) {
    return (
        <fieldset className="rounded-lg bg-gray-100 p-6 flex flex-col">
            <legend className="rounded-lg bg-gray-100 px-4 py-1 font-semibold text-xl">
                {name}
            </legend>
            {children}
        </fieldset>
    );
}
