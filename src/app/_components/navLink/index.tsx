"use client";

//Imports
import Link from "next/link";
import { usePathname } from "next/navigation";

//Types
type NavLinkProps = {
    name: string;
    path: string;
};

//Component of a page link in the navigation sidebar
export default function NavLink({ name, path }: NavLinkProps) {
    const currentPath = usePathname();
    const selected = path === currentPath;

    return (
        <Link
            href={path}
            className={`group border ${
                selected
                    ? "border-lime-500 hover:border-lime-800"
                    : "border-gray-200 hover:border-gray-500"
            } p-2`}
        >
            <p className="transition-transform group-hover:translate-x-3">
                {"> " + name}
            </p>
        </Link>
    );
}
