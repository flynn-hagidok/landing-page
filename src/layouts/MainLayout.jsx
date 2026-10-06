import { Outlet } from "react-router"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
    return (
        <>
            <Navbar />

            <main>
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </>
    )
};

export default MainLayout;