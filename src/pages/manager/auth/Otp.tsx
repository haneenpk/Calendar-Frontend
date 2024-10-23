import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation


const Otp: React.FC = () => {
  const [otp, setOtp] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!otp) {
      setError("Please fill in all fields");
      return;
    }

    try {

    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">
          Verify OTP
        </h2>
        <form onSubmit={handleOtp}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-center">
              Enter OTP
            </label>
            <input
              type="otp"
              id="otp"
              className="w-full px-3 py-2 mt-1 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
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
            className="mt-4 w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400 rounded-md font-semibold transition duration-300"
          >
            Verify
          </button>
        </form>

      </div>
    </div>
  );
};

export default Otp;
