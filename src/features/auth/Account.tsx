import { useState } from "react";
import { useUpdateUserPassword } from "./useUpdatePassword";
import toast from "react-hot-toast";

function Account() {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const { isUpdating, updateUserPassword } = useUpdateUserPassword();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("All fields are required.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("New password and confirmation password do not match.");
      return;
    }

    updateUserPassword(
      { password: newPassword },
      {
        onSuccess: () => {
          setNewPassword("");
          setConfirmPassword("");
        },
      },
    );
  };

  return (
    <div className="p-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-6 text-3xl font-semibold">Account Page</h1>
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Change Password</h2>
          <form
            className="rounded-lg bg-food-600 p-6 shadow-lg"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                htmlFor="currentPassword"
                className="mb-2 block font-medium text-white"
              >
                Current Password
              </label>
              <input
                id="newPassword"
                type="password"
                placeholder="Enter your current password"
                className="w-full rounded-lg bg-food-500 p-3 text-white placeholder:text-food-200 focus:outline-none focus:ring-2 focus:ring-food-300"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                disabled={isUpdating}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="mb-2 block font-medium text-white"
              >
                New Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Enter your new password"
                className="w-full rounded-lg bg-food-500 p-3 text-white placeholder:text-food-200 focus:outline-none focus:ring-2 focus:ring-food-300"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isUpdating}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-food-500 p-3 font-semibold text-white transition-all duration-300 hover:bg-food-400"
            >
              {isUpdating ? "Updating..." : "Change Password"}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Account;
