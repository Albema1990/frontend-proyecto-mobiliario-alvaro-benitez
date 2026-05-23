function Navbar({menuOpen}){

    if(!menuOpen) return null;
    
    return (
        
    <nav className="navBar">
        <a href="#">Inicio</a>
        <a href="#">Café</a>
        <a href="#">Tienda</a>
        <a href="">Contacto</a>
        <a href="#">Admin</a>
    </nav>
)}

export default Navbar; 