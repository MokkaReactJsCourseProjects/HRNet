//Imports
import { ChangeEvent, Dispatch, SetStateAction } from "react";

//Types
type TopSectionProps = {
    search: string;
    setSearch: Dispatch<SetStateAction<string>>;
    pageIndex: number;
    entriesPerPage: number;
    setEntriesPerPage: Dispatch<SetStateAction<number>>;
    totalEntries: number;
};

//Component of the top section of the current employees page
export default function TopSection({
    search,
    setSearch,
    pageIndex,
    entriesPerPage,
    setEntriesPerPage,
    totalEntries,
}: TopSectionProps) {
    function handleSearchChange(e: ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }
    function handleEntriesPerPageChange(e: ChangeEvent<HTMLSelectElement>) {
        setEntriesPerPage(Number(e.target.value));
    }
    const firstEntry = 1 + entriesPerPage * pageIndex;
    const lastEntry = Math.min(entriesPerPage * (pageIndex + 1), totalEntries);

    return (
        <section>
            <label className="w-full flex items-center text-xl mb-3">
                Search
                <input
                    type="search"
                    placeholder="Employee name"
                    value={search}
                    onChange={handleSearchChange}
                    className="w-full border border-gray-300 rounded-xl ml-3 px-3 py-1"
                />
            </label>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
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
