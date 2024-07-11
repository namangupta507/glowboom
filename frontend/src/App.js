import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Outlet,
  Navigate,
} from "react-router-dom";
import { AboutUs } from "./components/AboutUs";
import { AddProduct } from "./components/AddProduct";
import { AdminDashboard } from "./components/AdminDashboard";
import { AllProducts } from "./components/AllProducts";
import { Blogs } from "./components/Blogs";
import { Contact } from "./components/Contact";
import { HairCare } from "./components/HairCare";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Offers } from "./components/Offers";
import { Shop } from "./components/Shop";
import { SkinCare } from "./components/SkinCare";
import { Footer } from "./components/Footer";

export const App = () => {
  const ProtectedRoute = ({ children, isAuthenticated }) => {
    return isAuthenticated ? children : <Navigate to="/glowboom" />;
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/glowboom",
          element: (
            <>
              <Navbar />
              <Home />
              <Footer />
            </>
          ),
        },
        {
          path: "/glowboom/about-us",
          element: (
            <>
              <Navbar />
              <AboutUs />
              <Footer />
            </>
          ),
        },
        {
          path: "/glowboom/contact-us",
          element: (
            <>
              <Navbar />
              <Contact />
              <Footer />
            </>
          ),
        },
        {
          path: "/glowboom/shop",
          element: (
            <>
              <Navbar />
              <Shop />
              <Footer />
            </>
          ),
        },
        {
          path: "/glowboom/blogs",
          element: (
            <>
              <Navbar />
              <Blogs />
              <Footer />
            </>
          ),
        },
        {
          path: "/glowboom/hair-care",
          element: (
            <>
              <Navbar />
              <HairCare />
              <Footer />
            </>
          ),
        },
        {
          path: "/glowboom/skin-care",
          element: (
            <>
              <Navbar />
              <SkinCare />
              <Footer />
            </>
          ),
        },
        {
          path: "/glowboom/offers",
          element: (
            <>
              <Navbar />
              <Offers />
              <Footer />
            </>
          ),
        },
        {
          path: "/glowboom/admin/login",
          element: <Login onLogin={() => setIsAuthenticated(true)} />,
        },
        {
          path: "/glowboom/admin",
          element: (
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <AdminDashboard />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "add-product",
              element: <AddProduct />,
            },
            {
              path: "allproducts",
              element: <AllProducts />,
            },
          ],
        },
        {
          path: "*",
          element: (
            <>
              <h1>ERROR....</h1>
            </>
          ),
        },
      ])}
    />
  );
};