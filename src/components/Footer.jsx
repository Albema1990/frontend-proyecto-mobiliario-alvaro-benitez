import FooterTop from "./FooterTop";

function Footer() {
  return (
    <footer className="site-footer">
      <FooterTop />

      <div className="footer-main container">
        <div className="footer-column">
          <h3>Hygge Home Coffee</h3>
          <p>Café de especialidad para disfrutar en casa.</p>
        </div>

        <div className="footer-column">
          <h4>Empresa</h4>

          <a href="#">Nosotros</a>
          <a href="#">Tienda</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-column">
          <h4>Ayuda</h4>

          <a href="#">Contacto</a>
          <a href="#">Envíos</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-column">
          <h4>Redes</h4>

          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
          <a href="#">YouTube</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Hygge Home Coffee</p>
      </div>
    </footer>
  );
}

export default Footer;
