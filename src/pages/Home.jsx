function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content container">
          <div className="hero-text">
            <p className="hero-subtitle">Hygge Home Coffee</p>

            <h1>Coffee for slow days</h1>

            <p className="hero-description">
              Café de especialidad para disfrutar momentos en casa
            </p>

            <div className="hero-buttons">
              <a href="#" className="primary-btn">
                Comprar café
              </a>

              <a href="#" className="secondary-btn">
                Explorar
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

      <section className="featured">
        <div className="featured-content container">
          <div className="featured-card">
            <span>☕</span>

            <h3>Café Premium</h3>

            <p>Selección de granos de especialidad cuidadosamente tostados.</p>
          </div>

          <div className="featured-card">
            <span>🚚</span>

            <h3>Envío Rápido</h3>

            <p>Recibe tu café en casa en pocos días.</p>
          </div>

          <div className="featured-card">
            <span>🌱</span>

            <h3>Tueste Artesanal</h3>

            <p>Pequeños lotes tostados para conservar todo el aroma.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
