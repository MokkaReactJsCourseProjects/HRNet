//Imports
import Image from "next/image";
import Logos from "../../../../public/logos";
import NavLink from "../navLink";

//Component of the navigation sidebar
export default function NavBar() {
    return (
        <nav className="border-gray-300 laptop:min-h-screen laptop:border-r laptop:p-8 min-w-max">
            <div className="my-4 flex justify-center items-center laptop:flex-col laptop:items-top laptop:mb-12 laptop:mt-0">
                <Image
                    src={Logos.wealthHealth}
                    alt="Logo"
                    width={255}
                    height={255}
                    priority
                    className="w-24 tablet:w-32 laptop:w-52"
                />
                <h1 className="ml-1 text-3xl font-bold tablet:text-4xl laptop:text-center laptop:ml-0 laptop:text-5xl">
                    HRnet
                </h1>
            </div>
            <div className="flex flex-row justify-center items-center laptop:space-y-3 laptop:flex-col laptop:justify-normal">
                <NavLink name="Create an employee" path="/" />
                <NavLink name="Current employees" path="/employees" />
            </div>
        </nav>
    );
}
