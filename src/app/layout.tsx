//Imports
import { Providers } from "./_redux_toolkit/providers";
import bitter from "@/fonts";
import "./globals.css";
import NavBar from "./_components/navBar";

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
                <body className={`${bitter} w-full flex text-black bg-white`}>
                    <NavBar />
                    <main className="w-full pt-12 px-24 flex flex-col justify-start">
                        {children}
                    </main>
                </body>
            </html>
        </Providers>
    );
}
