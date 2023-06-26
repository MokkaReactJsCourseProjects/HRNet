"use client";

//Imports
import { Provider } from "react-redux";
import store from "./store";

//Component of the app state's providers
export const Providers = (props: React.PropsWithChildren) => {
    return <Provider store={store}>{props.children}</Provider>;
};
