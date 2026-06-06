import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetail from "../pages/ProductDetail";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },

            {
                path: "/shop",
                element: <Shop />
            },

            {
                path: "/shop/:category",
                element: <Shop />
            },

            {
                path: "/product/:id",
                element: <ProductDetail />
            }
        ]
    }
])