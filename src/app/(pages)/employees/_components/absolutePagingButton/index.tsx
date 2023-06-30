//Imports

import { Dispatch, SetStateAction } from "react";

//Types
type AbsolutePagingButtonProps = {
	index: number;
	pageIndex: number;
	setPageIndex: Dispatch<SetStateAction<number>>;
};

//Component of an absolute (indexed) paging button in the current employees page
export default function AbsolutePagingButton({
	index,
	pageIndex,
	setPageIndex,
}: AbsolutePagingButtonProps) {
	const selected = index === pageIndex;
	function handleClick() {
		setPageIndex(index);
	}

	return (
		<button
			className={`flex justify-center items-center border border-gray-200 p-2 hover:border-gray-500 ${
				selected
					? "border-lime-500 hover:border-lime-800"
					: "border-gray-200 hover:border-gray-500"
			} w-12 h-12`}
			onClick={handleClick}
		>
			{index + 1}
		</button>
	);
}
