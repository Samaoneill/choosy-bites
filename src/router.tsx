import { createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import RecipePage from "./pages/RecipePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AccountPage from "./pages/AccountPage";
import ProtectedRoute from "./ui/ProtectedRoute";
import SavedRecipesPage from "./pages/SavedRecipesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/recipes", element: <RecipesPage /> },
      { path: "/recipe/:recipeId", element: <RecipePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/register", element: <RegisterPage /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/account", element: <AccountPage /> },
          { path: "/saved-recipes", element: <SavedRecipesPage /> },
        ],
      },
    ],
  },
]);

export default router;
