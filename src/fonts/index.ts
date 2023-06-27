import localFont from "next/font/local";

const bitter = localFont({
    src: [
        {
            path: "./Bitter-VariableFont_wght.ttf",
            style: "normal",
        },
        {
            path: "./Bitter-Italic-VariableFont_wght.ttf",
            style: "italic",
        },
    ],
    variable: "--font-bitter",
});

export default bitter.className;
