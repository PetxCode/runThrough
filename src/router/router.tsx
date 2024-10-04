import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import BuildPage from "../pages/BuildPage";
import ContactPage from "../pages/ContactPage";
import ProductPage from "../pages/ProductPage";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <BuildPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "product", element: <ProductPage /> },
    ],
  },
]);
