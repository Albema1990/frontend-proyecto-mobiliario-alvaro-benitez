import FooterTop from "./FooterTop";

function Footer() {

  return (
    <footer className="site-footer">

      <FooterTop />

      <div className="footer-main container">

        <div className="footer-column">

          <h3>HYGGE</h3>

          <p>
            Café de especialidad para
            disfrutar momentos tranquilos.
          </p>

        </div>

        <div className="footer-column">

          <h4>Tienda</h4>

          <a href="#">Café</a>
          <a href="#">Accesorios</a>
          <a href="#">Merch</a>

        </div>

        <div className="footer-column">

          <h4>Empresa</h4>

          <a href="#">Sobre nosotros</a>
          <a href="#">Contacto</a>

        </div>

      </div>

      <p className="footer-bottom">
        &copy; 2024 HYGGE. Todos los derechos reservados.
      </p>

    </footer>
  );
}

export default Footer;
