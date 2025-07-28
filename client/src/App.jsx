import React, { useEffect } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import AuthLayout from "./components/auth/layout";
import AuthRegister from "./pages/auth/register";
import AuthLogin from "./pages/auth/login";

import AdminLayout from "./components/admin-view/layout";
import AdminDashboard from "./pages/admin-view/dashboard";
import AdminProducts from "./pages/admin-view/products";
import AdminOrders from "./pages/admin-view/orders";
import AdminFeatures from "./pages/admin-view/features";

import ShoppingLayout from "./components/shopping-view/layout";
import ShoppingAccount from "./pages/shopping-view/account";
import ShoppingCheckout from "./pages/shopping-view/checkout";
import ShoppingHome from "./pages/shopping-view/home";
import ShoppingListing from "./pages/shopping-view/listing";

import NotFound from "./pages/not-found";
import CheckAuth from "./components/common/checkauth";
import UnauthPage from "./pages/unauth-page";
import { checkAuth } from "./store/auth-slice";
import { Skeleton } from "./components/ui/skeleton";

export default function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // ✅ Loading screen
  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 animate-fade-in">
        {/* Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-emerald-500 border-solid mb-4"></div>
        
        {/* Skeleton Bars */}
        <div className="w-64 space-y-3 animate-fade-up">
          <Skeleton className="h-6 w-full rounded-md" />
          <Skeleton className="h-6 w-3/4 rounded-md" />
          <Skeleton className="h-6 w-5/6 rounded-md" />
        </div>

        <p className="mt-6 text-green-700 font-medium animate-fade-up">
          Checking authentication...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-800 flex flex-col">
      <main className="flex-1 p-4 animate-fade-in">
        <Routes>
          {/* ✅ Auth Routes */}
          <Route path="/auth/*" element={<AuthLayout />}>
            <Route path="login" element={<AuthLogin />} />
            <Route path="register" element={<AuthRegister />} />
          </Route>

          {/* ✅ Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <AdminLayout />
              </CheckAuth>
            }
          >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="features" element={<AdminFeatures />} />
          </Route>

          {/* ✅ Shopping Routes */}
          <Route
            path="/shopping/*"
            element={
              <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                <ShoppingLayout />
              </CheckAuth>
            }
          >
            <Route path="account" element={<ShoppingAccount />} />
            <Route path="checkout" element={<ShoppingCheckout />} />
            <Route path="home" element={<ShoppingHome />} />
            <Route path="listing" element={<ShoppingListing />} /> 
          </Route>

          {/* ✅ Unauthorized Page */}
          <Route path="unauth-page" element={<UnauthPage />} />

          {/* ✅ 404 Fallback */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="text-center text-xs text-gray-400 py-4">
        &copy; {new Date().getFullYear()} My Web App. All rights reserved.
      </footer>
    </div>
  );
}
