//Imports

//Types
type FormFieldProps = {
	name: string;
};

//Component of a input field in the create an employee form
export default function FormField({ name }: FormFieldProps) {
	return (
		<label className="my-3 flex flex-col">
			{name}
			<input type="text" className=" border-b border-gray-400 bg-transparent" />
		</label>
	);
}
