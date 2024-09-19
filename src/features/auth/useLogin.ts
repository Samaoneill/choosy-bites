import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { login as loginApi } from "../../services/apiAuth";
import { LoginCredentials } from "../../types/auth";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => loginApi(credentials),
    retry: false,
    onSuccess: (user) => {
      if (user) {
        queryClient.setQueryData(["user"], user.user);
        toast.success("Login successful");
        navigate("/account", { replace: true });
      }
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
}
