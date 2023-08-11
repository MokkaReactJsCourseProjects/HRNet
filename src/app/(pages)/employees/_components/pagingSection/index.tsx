//Imports
import { clamp } from "@/app/_utils";
import AbsolutePagingButton from "../absolutePagingButton";
import RelativePagingButton from "../relativePagingButton";
import { Dispatch, SetStateAction } from "react";
import EllipsedPagingButton from "../ellipsedPagingButton";

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
    const maxButtonAmount = 7;
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
        if (i > firstPageIndex && i < lastPageIndex) {
            centerPages.push(i);
        }
    }

    return (
        <section className="mb-12 flex justify-center space-x-3 laptop:space-x-5">
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
                        if (
                            (index === 0 &&
                                Math.abs(page - firstPageIndex) > 1) ||
                            (index === maxButtonAmount - 3 &&
                                Math.abs(page - lastPageIndex) > 1)
                        ) {
                            return <EllipsedPagingButton key={index} />;
                        }
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
