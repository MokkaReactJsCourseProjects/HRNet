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
            className={`p-2 group flex-grow border-b-2 ${
                selected
                    ? "border-lime-500 hover:border-lime-800"
                    : "border-gray-200 hover:border-gray-500"
            } laptop:border laptop:w-full`}
        >
            <p className="text-sm text-center transition-transform tablet:text-base laptop:group-hover:translate-x-3 laptop:text-left">
                {name}
            </p>
        </Link>
    );
}
