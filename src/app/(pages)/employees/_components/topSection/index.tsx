//Imports
import { ChangeEvent, Dispatch, SetStateAction } from "react";

//Types
type TopSectionProps = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    setEntriesPerPage: Dispatch<SetStateAction<number>>;
    totalEntries: number;
    firstEntry: number;
    lastEntry: number;
};

//Component of the top section of the current employees page
export default function TopSection({
    search,
    setSearch,
    setEntriesPerPage,
    totalEntries,
    firstEntry,
    lastEntry,
}: TopSectionProps) {
    function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }
    function handleEntriesPerPageChange(e: ChangeEvent<HTMLSelectElement>) {
        setEntriesPerPage(Number(e.target.value));
    }

    return (
        <section>
            <label className="w-full flex flex-col text-base mb-3 laptop:flex-row laptop:items-center tablet:text-xl ">
                Search
                <input
                    type="search"
                    placeholder="Any employee info"
                    value={search}
                    onChange={handleSearchChange}
                    className="w-full border border-gray-300 rounded-xl px-3 py-1 laptop:ml-3"
                />
            </label>
            <div className="flex flex-col laptop:items-center laptop:flex-row laptop:justify-between">
                <div className="mb-4 flex items-center laptop:mb-0">
                    <select
                        className="bg-lime-500 hover:bg-lime-900 text-white"
                        onChange={handleEntriesPerPageChange}
                    >
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                        <option>100</option>
                    </select>
                    <p className="ml-2">entries/page</p>
                </div>
                <p className=" text-sm">{`Showing ${firstEntry} to ${lastEntry} of ${totalEntries} entries`}</p>
            </div>
        </section>
    );
}
