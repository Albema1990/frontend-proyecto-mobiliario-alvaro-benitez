import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";

function AdminLayout() {
    return (
        <>
        <Topbar />
        <Header />

        <main className="admin-page">
            <div className="container">
                <div className="admin-header">
                    <h1>Panel de administración</h1>
                    <p>Gestiona el contenido de la tienda</p>
                </div>

                <nav className="admin-nav">
                    <Link to="/shop">Ver sitio público</Link>
                </nav>                

                <Outlet />
            </div>
        </main>

        <Footer />
        </>
    )
}

export default AdminLayout;