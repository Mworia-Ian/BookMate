import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import COVER_IMAGE from "../assets/COVER_IMAGE.jpg";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      localStorage.setItem("token", data.access_token);
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${COVER_IMAGE})` }}
      >
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-3/4 min-h-[50vh]">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">LOG IN</h1>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>
            <div className="text-left">
              <span>Don't have an account?</span>
              <Link
                to="/signup"
                className="ml-2 text-sm text-orange-600 hover:underline font-bold"
              >
                Register here
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-200"
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;