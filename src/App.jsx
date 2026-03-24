import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Pages/Layout/Layout";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Home from "./Pages/Home/Home";
import Brands from "./Pages/Brands/Brands";
import Cart from "./Pages/Cart/Cart";
import Categories from "./Pages/Categories/Categories";
import Checkout from "./Pages/Checkout/Checkout";
import NotFound from "./Pages/NotFound/NotFound";
import Orders from "./Pages/Orders/Orders";
import SearchProducts from "./Pages/SearchProducts/SearchProducts";
import VerifyEmail from "./Pages/VerifyEmail/VerifyEmail";
import Wishlist from "./Pages/Wishlist/Wishlist";
import { ToastContainer } from "react-toastify";
import DetailsProduct from "./Pages/DetailsProduct/DetailsProduct";
import AuthProvider from "../context/Auth-context";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CartProvider from "../context/Cart.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Offers from "./Pages/Offers/Offers";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          path: "brands",
          element: <Brands />,
        },
        {
          path: "cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "offers",
          element: <Offers />,
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "orders",
          element: (
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          ),
        },
        {
          path: "search-products",
          element: <SearchProducts />,
        },
        {
          path: "verify-email",
          element: (
            <ProtectedRoute>
              <VerifyEmail />
            </ProtectedRoute>
          ),
        },
        {
          path: "wishlist",
          element: (
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          ),
        },
        {
          path: "product/:id",
          element: <DetailsProduct />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 2 * 60 * 1000,
        gcTime: 5 * 60 * 1000,
        retry: 5,
        retryDelay: 5000,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CartProvider>
            <RouterProvider router={router} />
            <ToastContainer
              position="top-right"
              autoClose={3000}
              closeButton={false}
              closeOnClick={true}
            />
          </CartProvider>
        </AuthProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}
