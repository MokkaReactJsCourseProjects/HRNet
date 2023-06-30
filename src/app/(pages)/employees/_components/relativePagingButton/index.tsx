//Imports
import { Dispatch, SetStateAction } from "react";

//Types
type RelativePagingButtonProps = {
	name: string;
	index: number;
	setPageIndex: Dispatch<SetStateAction<number>>;
	firstPageIndex: number;
	lastPageIndex: number;
};

//Component of a relative (previous/next) paging button in the current employees page
export default function RelativePagingButton({
	name,
	index,
	setPageIndex,
	firstPageIndex,
	lastPageIndex,
}: RelativePagingButtonProps) {
	const usable = index >= firstPageIndex && index <= lastPageIndex;
	function handleClick() {
		if (usable) {
			setPageIndex(index);
		}
	}

	return (
		<button
			className={`px-4 h-12 bg-lime-500 p-2 text-white ${
				usable ? "hover:bg-lime-900" : "opacity-25"
			}`}
			onClick={handleClick}
		>
			{name}
		</button>
	);
}
