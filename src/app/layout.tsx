//Imports
import { Providers } from "./_redux_toolkit/providers";
import { Inter } from "next/font/google";
import "./globals.css";

//Fonts
const inter = Inter({ subsets: ["latin"] });

//Metadata
export const metadata = {
    title: "HRNet",
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
                <body className={inter.className}>{children}</body>
            </html>
        </Providers>
    );
}
