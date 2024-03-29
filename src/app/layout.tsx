//Imports
import { Providers } from "./_redux_toolkit/providers";
import bitter from "@/fonts";
import NavBar from "./_components/navBar";
import "./globals.css";

//Metadata
export const metadata = {
    title: "HRnet",
    description: "",
};

//Component of the root layout
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Providers>
            <html lang="en">
                <body
                    className={`${bitter} w-screen flex flex-col text-black bg-white laptop:flex-row`}
                >
                    <NavBar />
                    <main className="min-w-0 flex-grow pt-6 px-6 flex flex-col justify-start tablet:px-24 laptop:pt-12">
                        {children}
                    </main>
                </body>
            </html>
        </Providers>
    );
}
