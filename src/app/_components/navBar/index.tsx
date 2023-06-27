//Imports
import Image from "next/image";
import Logos from "../../../../public/logos";
import NavLink from "../navLink";

//Component of the navigation sidebar
export default function NavBar() {
    return (
        <nav className=" w-aut min-h-screen p-8 border-r border-gray-300">
            <Image
                src={Logos.wealthHealth}
                alt="Logo"
                width={255}
                height={255}
                className="w-64"
            />
            <h1 className=" text-5xl font-bold text-center mb-12">HRnet</h1>
            <div className="flex flex-col align-middle space-y-3">
                <NavLink
                    name="Create an employee"
                    icon={Logos.wealthHealth}
                    path="/"
                />
                <NavLink
                    name="Current employees"
                    icon={Logos.wealthHealth}
                    path="/employees"
                />
            </div>
        </nav>
    );
}
