//Imports

import FormField from "./_components/formField";
import FormFieldGroup from "./_components/formFieldGroup";

//Component of the home page
export default function HomePage() {
    return (
        <>
            <h2 className=" text-3xl font-medium underline">
                Create an employee
            </h2>
            <form className="flex flex-col">
                <FormField name="First name" />
                <FormField name="Last name" />
                <FormField name="Birth date" />
                <FormField name="Join date" />
                <FormFieldGroup name="Address">
                    <FormField name="Street" />
                    <FormField name="City" />
                    <FormField name="State" />
                    <FormField name="Zip code" />
                </FormFieldGroup>
                <FormField name="Department" />
                <button
                    type="submit"
                    className="group border border-gray-200 p-2 hover:border-gray-500"
                >{`Save`}</button>
            </form>
        </>
    );
}
