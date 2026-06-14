import { useState } from "react";

const initialForm = {
  name: "",
  description: "",
  category: "",
  price: "",
  image: "",
  onSale: false,
};

function ProductForm({ product, onCreateProduct, onUpdateProduct }) {
  const [form, setForm] = useState(product || initialForm);

  const handleChange = (event) => {
    // event.preventDefault();

    // console.log("SUBMIT", form);

    const { name, value, type, checked } = event.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setForm({
      ...form,
      image: imageUrl,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()) {
      alert("Ingrese el nombre");
      return;
    }

    if (!form.description.trim()) {
      alert("Ingrese una descripción");
      return;
    }

    if (!form.category.trim()) {
      alert("Seleccione una categoría");
      return;
    }

    if (!form.price.trim()) {
      alert("Ingrese un precio");
      return;
    }

    //Crear un producto

    if (product) {
      onUpdateProduct(form);
    } else {
      onCreateProduct(form);
    }

    setForm(initialForm);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>
        {product ? "Editar producto" : "Nuevo producto"}
      </h2>

      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          placeholder="Ingrese el título del producto"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
        ></textarea>
      </div>

      <select name="category" value={form.category} onChange={handleChange}>
        <option value="">Selecciona una categoría</option>

        <option value="cafe">Café</option>
        <option value="te">Té</option>
        <option value="accesorios">Accesorios</option>
      </select>

      <div className="form-group">
        <label htmlFor="price">Precio</label>
        <input
          type="number"
          id="price"
          name="price"
          value={form.price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Imagen</label>

        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleImageChange}
        />

        {form.image && (
          <div className="image-preview">
            <img src={form.image} alt="Vista previa" />
          </div>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="onSale">En oferta: </label>
        <input
          type="checkbox"
          id="onSale"
          name="onSale"
          checked={form.onSale}
          onChange={handleChange}
        />
      </div>

      <button className="button-newProduct" type="submit">
        {product ? "Actualizar producto" : "Guardar producto"}
      </button>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </form>
  );
}

export default ProductForm;
