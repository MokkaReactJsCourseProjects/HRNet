//Imports
import FormField from "./_components/formField";
import FormFieldGroup from "./_components/formFieldGroup";

//Component of the home page
export default function HomePage() {
	return (
		<>
			<h2 className=" text-3xl font-medium mb-8">Create an employee</h2>
			<form className="flex flex-col mb-12">
				<FormField name="First name" />
				<FormField name="Last name" />
				<FormField name="Birth date" />
				<FormField name="Start date" />
				<FormFieldGroup name="Address">
					<FormField name="Street" />
					<FormField name="City" />
					<FormField name="State" />
					<FormField name="Zip code" />
				</FormFieldGroup>
				<FormField name="Department" />
				<button
					type="submit"
					className="bg-lime-500 p-2 hover:bg-lime-800 mt-10 text-white"
				>{`Save`}</button>
			</form>
		</>
	);
}
