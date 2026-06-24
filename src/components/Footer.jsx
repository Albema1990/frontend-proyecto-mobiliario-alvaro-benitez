import { Link } from "react-router-dom";
import FooterTop from "./FooterTop";

function Footer() {

  return (
    <footer className="site-footer">

      <FooterTop />

      <div className="footer-main container">

        <div className="footer-column">

          <h3>HYGGE</h3>

          <p>
            Para amantes del café
          </p>

        </div>

        <div className="footer-column">

          <h4>Tienda</h4>

          <Link to="/shop/cafe">Café</Link>
          <Link to="/shop/te">Té</Link>
          <Link to="/shop/accesorios">Accesorios</Link>

        </div>

        <div className="footer-column">

          <h4>Empresa</h4>

          <Link to="/about">Sobre nosotros</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/careers">Únete a nosotros</Link>

        </div>

      </div>

      <p className="footer-bottom">
        &copy; 2024 HYGGE. Todos los derechos reservados.
      </p>

    </footer>
  );
}

export default Footer;
