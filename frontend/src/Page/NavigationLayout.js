import MainNavigation from "../components/MainNavigation";
import {Outlet} from "react-router-dom";

export default function NavigationLayout() {
    return <>
        <MainNavigation/>
        <Outlet/>
    </>
}