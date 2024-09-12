import { Outlet } from "react-router-dom";
import MainNavigation from "../component/MainNavigation";
import classses from "./Root.module.css"
function RootLayout(){
    return (
    <>
    <MainNavigation />
    <main className={classses.content}>
    <Outlet />
    </main>
    </>
    )
}

export default RootLayout;