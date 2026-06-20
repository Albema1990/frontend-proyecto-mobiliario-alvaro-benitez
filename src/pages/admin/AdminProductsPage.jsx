// import initialProducts from "../../data/Products";

import { useState, useEffect, useRef } from "react";
import ProductForm from "../../components/ProductForm";

import {
  getProducts,
  updateProduct,
  deleteProduct,
  createProduct,
} from "../../services/productService";

function AdminProductsPage() {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);

  const [editingProduct, setEditingProduct] = useState(null);
  const [message, setMessage] = useState("");

  const formRef = useRef(null);

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

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showForm, editingProduct]);

  const handleCreateProduct = async (productData) => {
    try {
      const newProduct = await createProduct(productData);

      setProducts([...products, newProduct]);

      setShowForm(false);

      setMessage("Producto creado correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      const savedProduct = await updateProduct(
        updatedProduct._id,
        updatedProduct,
      );

      setProducts(
        products.map((product) =>
          product._id === savedProduct._id ? savedProduct : product,
        ),
      );

      setEditingProduct(null);
      setShowForm(false);

      setMessage("Producto actualizado correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProduct = async (_id) => {
    const confirmed = window.confirm("¿Deseas eliminar este producto?");

    if (!confirmed) return;

    try {
      await deleteProduct(_id);

      setProducts(products.filter((product) => product._id !== _id));

      setMessage("Producto eliminado correctamente");
    } catch (error) {
      console.error(error);
    }
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
        <div ref={formRef}>
          <ProductForm
            key={editingProduct?._id || "new"}
            product={editingProduct}
            onCreateProduct={handleCreateProduct}
            onUpdateProduct={handleUpdateProduct}
          />
        </div>
      )}

      <div className="admin-list">
        {products.map((product) => (
          <article key={product._id} className="admin-list-item">
            <img
              src={product.image || "images/default.jpg"}
              alt={product.name}
            />

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
