// import initialProducts from "../../data/Products";

import { useState, useEffect } from "react";
import ProductForm from "../../components/ProductForm";

import { getProducts } from "../../services/productService";

function AdminProductsPage() {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [message, setMessage] = useState("");

useEffect(() => {
  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
    }
  };

  loadProducts();
}, []);

  const handleCreateProduct = (productData) => {
    console.log("PRODUCTO RECIBIDO", productData);
    const newProduct = {
      ...productData,
      _id: Date.now(),
    };

    setProducts([...products, newProduct]);

    setShowForm(false);

    setMessage("Producto creado correctamente");
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts(
      products.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product,
      ),
    );

    setEditingProduct(null);
    setShowForm(false);

    setMessage("Producto actualizado correctamente");
  };

  useEffect(() => {
    if (!message) {
      return;
    }

    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  const handleDeleteProduct = (_id) => {
    const confirmed = window.confirm("Deseas eliminar este producto?");

    if (!confirmed) return;

    setProducts(products.filter((product) => product._id !== _id));
    // console.log("PRODUCTO ELIMINADO", id);

    setMessage("Producto eliminado correctamente");
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  // const handleUpdateProduct = (updatedProduct) => {
  //   setProducts(
  //     products.map((product) =>
  //       product.id === updatedProduct.id ? updatedProduct : product,
  //     ),
  //   );

  //   setEditingProduct(null);
  //   setShowForm(false);
  // };

  return (
    <section className="admin-section">
      {message && <p className="admin-message">{message}</p>}
      <div className="admin-section-header">
        <div>
          <h2>Administración de productos</h2>
          <p>Listado interno de productos</p>
        </div>

        <button
          className="admin-create-button"
          type="button"
          onClick={() => {
            setShowForm(!showForm);
            setEditingProduct(null);
          }}
        >
          {showForm ? "Cerrar formulario" : "Crear producto"}
        </button>
      </div>

      {showForm && (
        <ProductForm
          key={editingProduct?._id || "new"}
          product={editingProduct}
          onCreateProduct={handleCreateProduct}
          onUpdateProduct={handleUpdateProduct}
        />
      )}

      <div className="admin-list">
        {products.map((product) => (
          <article key={product._id} className="admin-list-item">
            <img src={product.image} alt={product.name} />

            <div>
              <h3>{product.name}</h3>
              <p>{product.price}</p>

              <div className="admin-actions">
                <button
                  className="admin-edit-button"
                  onClick={() => handleEditProduct(product)}
                >
                  Editar
                </button>

                <button
                  className="admin-delete-button"
                  onClick={() => handleDeleteProduct(product._id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AdminProductsPage;
