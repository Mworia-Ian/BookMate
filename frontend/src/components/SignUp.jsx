import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import COVER_SIGN from "../assets/COVER_SIGN.jpg";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Split full name into first and last name
    const [firstName, ...lastNameParts] = fullName.split(" ");
    const lastName = lastNameParts.join(" ");

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="w-full h-screen flex">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${COVER_SIGN})` }}
      >
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-3/4 min-h-[50vh]">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">REGISTER</h1>
          </div>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>
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
              <span>Already have an account?</span>
              <Link
                to="/"
                className="ml-2 text-sm text-orange-600 hover:underline font-bold"
              >
                Log in here
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-200"
              >
                REGISTER
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Signup;