function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content container">
          <div className="hero-text">
            <p className="hero-subtitle">Café de especialidad</p>

            <h1>Convierte tu casa en tu cafetería favorita</h1>

            <p className="hero-description">
              Descubre nuestra selección de cafés premium, accesorios y
              experiencias para disfrutar el café desde casa.
            </p>

            <div className="hero-buttons">
              <a href="#" className="primary-btn">
                Comprar ahora
              </a>

              <a href="#" className="secondary-btn">
                Descubrir más
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
              alt="Café"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
