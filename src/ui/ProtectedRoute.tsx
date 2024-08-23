import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "../features/auth/useUser";

function ProtectedRoute() {
  const navigate = useNavigate();

  const { isPending: isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  if (isLoading) return <div>...Loading</div>;
  if (isAuthenticated) return <Outlet />;

  return null;
}

export default ProtectedRoute;
