import { useState } from "react";
import toast from "react-hot-toast";
import { useLogin } from "./useLogin";

function LoginForm() {
  const [email, setEmail] = useState<string>("sam@sam.com");
  const [password, setPassword] = useState<string>("Testing123");
  const { mutate: login, isPending: isLoading } = useLogin();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in both fields.");
      return;
    }

    login({ email, password });
  }

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-food-600 p-6 shadow-lg"
      >
        <h2 className="mb-6 text-center text-2xl font-semibold text-white">
          Login
        </h2>

        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-medium text-white">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            autoComplete="username"
            className="w-full rounded-lg bg-food-500 p-3 text-white placeholder:text-food-200 focus:outline-none focus:ring-2 focus:ring-food-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="mb-2 block font-medium text-white"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            autoComplete="password"
            placeholder="Enter your password"
            className="w-full rounded-lg bg-food-500 p-3 text-white placeholder:text-food-200 focus:outline-none focus:ring-2 focus:ring-food-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`w-full rounded-lg p-3 font-semibold text-white transition-all duration-300 ${
            isLoading ? "bg-food-600" : "bg-food-500 hover:bg-food-400"
          }`}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
