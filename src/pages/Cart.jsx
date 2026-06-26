import { useCart } from "../hooks/useCart";
import { useState } from "react";

function Cart() {
  const {
    cart,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useCart();

  const [message, setMessage] = useState("");

  const handleCheckout = () => {
    setMessage(
      "¡Gracias por tu compra! ☕ Tu pedido ha sido realizado correctamente.",
    );

    setTimeout(() => {
      clearCart();
      setMessage("");
    }, 4000);
  };

  return (
    <main className="cart-page">
      <div className="container">
        <h1>Mi carrito</h1>

        {message && <p className="checkout-message">{message}</p>}

        {cart.length === 0 ? (
          <p className="empty-cart">Tu carrito está vacío.</p>
        ) : (
          <>
            <div className="cart-list">
              {cart.map((item) => (
                <div key={item._id} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-image"
                  />

                  <div className="cart-info">
                    <h3>{item.name}</h3>

                    <p className="cart-price">{item.price} €</p>

                    <div className="cart-quantity">
                      <button onClick={() => decreaseQuantity(item._id)}>
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button onClick={() => increaseQuantity(item._id)}>
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item._id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-total">
              <h2>Total</h2>

              <p>{totalPrice().toFixed(2)} €</p>
            </div>

            <div className="cart-summary">
              <button className="checkout-btn" onClick={handleCheckout}>
                Finalizar compra
              </button>
            </div>

            <button className="clear-cart-btn" onClick={clearCart}>
              Vaciar carrito
            </button>
          </>
        )}
      </div>
    </main>
  );
}

export default Cart;
