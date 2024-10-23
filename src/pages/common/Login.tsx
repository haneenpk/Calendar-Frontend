import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

interface LoginProps {
  role: "manager" | "employees";
}

const Login: React.FC<LoginProps> = ({ role }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simulate login logic (replace with actual API request)
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      // Perform the login logic here (API call, etc.)
      // This is just a placeholder
      console.log(`Logging in ${role} with email: ${email} and password: ${password}`);
      // Handle success or redirect logic here
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          {role === "manager" ? "Manager" : "Employees"} Login
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <div className="mb-4 text-red-500 text-sm">
              {error}
            </div>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400 rounded-md font-semibold transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-4 flex justify-between items-center">
          <span>Don't have an account?</span>
          <Link
            to={role === "manager" ? "/manager/sign-up" : "/sign-up"}
            className="text-indigo-500 hover:underline"
          >
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
