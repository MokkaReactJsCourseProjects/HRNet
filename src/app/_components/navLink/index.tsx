//Imports
import Link from "next/link";

//Types
type NavLinkProps = {
    name: string;
    icon: string;
    path: string;
};

//Component of a page link in the navigation sidebar
export default function NavLink({ name, icon, path }: NavLinkProps) {
    return (
        <Link
            href={path}
            className="group border border-gray-200 p-2 hover:border-gray-500"
        >
            <p className="transition-transform group-hover:translate-x-5">
                {"> " + name}
            </p>
        </Link>
    );
}
