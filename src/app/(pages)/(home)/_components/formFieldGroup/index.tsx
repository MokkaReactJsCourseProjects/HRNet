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
        <fieldset className="rounded-lg bg-gray-100 p-3 flex flex-col my-3 tablet:p-6">
            <legend className="rounded-lg bg-gray-100 px-4 py-1 font-semibold text-xl">
                {name}
            </legend>
            {children}
        </fieldset>
    );
}
