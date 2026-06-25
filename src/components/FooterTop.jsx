import { useState } from "react";
import { subscribeNewsletter } from "../services/newsletterService";

function FooterTop() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    console.log("Email:", email);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setSuccess(false);
      setMessage("Introduce un email válido.");

      setTimeout(() => {
        setMessage("");
      }, 4000);

      return;
    }

    try {
      const data = await subscribeNewsletter(email);
      

      setSuccess(true);
      setMessage(data.message);
      setEmail("");
    } catch (error) {
      setSuccess(false);
      setMessage(error.message);
    }

    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  return (
    <div className="footer-top">
      <div className="footer-top-content container">
        <p className="footer-subtitle">NEWSLETTER</p>

        <h2>Suscríbete para recibir novedades</h2>

        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Introduce tu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit" className="newsletter-btn">
            Suscribirse
          </button>
        </form>

        {message && (
          <p className={`newsletter-message ${success ? "success" : "error"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default FooterTop;
