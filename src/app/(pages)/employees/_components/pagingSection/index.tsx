//Imports
import { clamp } from "@/app/_utils";
import AbsolutePagingButton from "../absolutePagingButton";
import RelativePagingButton from "../relativePagingButton";
import { Dispatch, SetStateAction } from "react";

//Types
type PagingSectionProps = {
	pageIndex: number;
	setPageIndex: Dispatch<SetStateAction<number>>;
	entriesPerPage: number;
	totalEntries: number;
};

//Component of the paging section of the current employees page
export default function PagingSection({
	pageIndex,
	setPageIndex,
	entriesPerPage,
	totalEntries,
}: PagingSectionProps) {
	const maxButtonAmount = 5;
	const semiButtons = Math.floor(maxButtonAmount / 2);
	const semiCenterButtons = semiButtons - 1;
	const totalPages = Math.ceil(totalEntries / entriesPerPage);
	const firstPageIndex = 0;
	const lastPageIndex = totalPages - 1;
	const middleIndex = clamp(
		pageIndex,
		firstPageIndex + semiButtons,
		lastPageIndex - semiButtons
	);
	const centerPages = [];
	for (
		let i = middleIndex - semiCenterButtons;
		i <= middleIndex + semiCenterButtons;
		i++
	) {
		if (i > 0 && i < totalEntries - 1) {
			centerPages.push(i);
		}
	}

	return (
		<section className="flex justify-center space-x-5">
			<RelativePagingButton
				name="Previous"
				index={pageIndex - 1}
				setPageIndex={setPageIndex}
				firstPageIndex={firstPageIndex}
				lastPageIndex={lastPageIndex}
			/>
			<AbsolutePagingButton
				index={firstPageIndex}
				pageIndex={pageIndex}
				setPageIndex={setPageIndex}
			/>
			{totalPages > 1 ? (
				<>
					{centerPages.map((page, index) => {
						return (
							<AbsolutePagingButton
								key={index}
								index={page}
								pageIndex={pageIndex}
								setPageIndex={setPageIndex}
							/>
						);
					})}
					<AbsolutePagingButton
						index={lastPageIndex}
						pageIndex={pageIndex}
						setPageIndex={setPageIndex}
					/>
				</>
			) : null}
			<RelativePagingButton
				name="Next"
				index={pageIndex + 1}
				setPageIndex={setPageIndex}
				firstPageIndex={firstPageIndex}
				lastPageIndex={lastPageIndex}
			/>
		</section>
	);
}