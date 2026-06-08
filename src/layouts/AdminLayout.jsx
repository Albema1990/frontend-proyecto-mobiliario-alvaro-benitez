import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AdminLayout() {
    return (
        <>
        <Header />

        <main>
            <div className="container">
                <h1>Panel de administración</h1>

                <Outlet />
            </div>
        </main>

        <Footer />
        </>
    )
}

export default AdminLayout;