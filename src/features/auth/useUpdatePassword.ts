import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateUserPassword as updateUserPasswordApi } from "../../services/apiAuth";

export function useUpdateUserPassword() {
  const queryClient = useQueryClient();

  const { mutate: updateUserPassword, isPending: isUpdating } = useMutation({
    mutationFn: updateUserPasswordApi,
    onSuccess: (user) => {
      toast.success("Password successfully updated");
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUserPassword };
}
