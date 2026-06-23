import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import ProductForm from "../components/ProductForm";

describe("ProductForm", () => {
  test("muestra el botón guardar producto", () => {
    render(
      <ProductForm
        onCreateProduct={() => {}}
        onUpdateProduct={() => {}}
      />
    );

    expect(
      screen.getByRole("button")
    ).toBeInTheDocument();
  });
});