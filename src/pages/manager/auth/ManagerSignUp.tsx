import React, { useState } from "react";
import axios from "axios";

const ManagerSignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("/api/managers/signup", formData);
      if (response.status === 201) {
        setSuccess("Manager account created successfully!");
        setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      } else {
        setError("Error creating account.");
      }
    } catch (err) {
      setError("Error: " + (err as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Manager Signup</h2>
        {error && <div className="p-2 text-red-600 border border-red-600 rounded">{error}</div>}
        {success && <div className="p-2 text-green-600 border border-green-600 rounded">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-sm font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block text-sm font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="block text-sm font-medium">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-2 mt-1 text-gray-900 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 mt-4 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ManagerSignUp;
