const API_URL = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Error al obtener los productos");
    }

    const data = await response.json();

    return data;
};

export const getProductById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);

    if (!response.ok) {
        throw new Error("Error al obtener el producto");
    }

    const data = await response.json();

    return data;
};

export const createProduct = async (productData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error("Error al crear producto");
  }

  return await response.json();
};

export const updateProduct = async (id, productData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error("Error al actualizar producto");
  }

  return await response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Error al eliminar producto");
  }

  return await response.json();
};