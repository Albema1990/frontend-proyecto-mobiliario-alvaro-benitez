import { useState } from "react";

const initialForm = {
  name: "",
  description: "",
  category: "",
  price: "",
  onSale: false,
};

function ProductForm({ onCreateProduct }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm({
      ...form,
      [name]: type == "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim()){
        alert("Ingrese el nombre");
        return;
    }

    if (!form.description.trim()){
        alert("Ingrese una descripción");
        return;
    }

    if (!form.category.trim()){
        alert("Seleccione una categoría");
        return;
    }

    if (!form.price.trim()){
        alert("Ingrese un precio");
        return;
    }

    //Crear un producto

    onCreateProduct(form);

    setForm(initialForm);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Nuevo Producto</h2>

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
        Guardar producto
      </button>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </form>
  );
}

export default ProductForm;
