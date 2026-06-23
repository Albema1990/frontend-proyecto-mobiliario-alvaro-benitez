import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Topbar from "../components/Topbar";

describe("Topbar", () => {

  beforeEach(() => {
    localStorage.clear();
  });

  test("muestra Iniciar sesión cuando no hay usuario", () => {

    render(
      <BrowserRouter>
        <Topbar />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Iniciar sesión")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Únete a nosotros")
    ).toBeInTheDocument();

  });

  test("muestra el nombre del usuario cuando está logueado", () => {
  localStorage.setItem(
    "user",
    JSON.stringify({
      name: "Álvaro",
      role: "admin",
    })
  );

  render(
    <BrowserRouter>
      <Topbar />
    </BrowserRouter>
  );

  expect(
    screen.getByText("Hola Álvaro")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Cerrar sesión")
  ).toBeInTheDocument();
});

});