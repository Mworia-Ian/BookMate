import React, { useState } from "react";
import axios from "axios";

import Contact_us from "../assets/Contact_us.jpg";

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [solution, setSolution] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !solution) {
      setError("All fields are required.");
      return;
    }
    setError("");
    setSuccess("");

    try {
      const response = await axios.post('http://localhost:5000/contact', {
        first_name: firstName,
        last_name: lastName,
        email: email,
        solution: solution
      });
      
      setSuccess("Form submitted successfully!");
      setFirstName("");
      setLastName("");
      setEmail("");
      setSolution("");
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <div className="w-full h-screen flex">
        <div
          className="w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${Contact_us})` }}
        ></div>
        <div className="w-1/2 flex items-center justify-center bg-gray-200">
          <div className="bg-white p-8 rounded-lg shadow-2xl w-3/4 min-h-[50vh]">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
            </div>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            {success && <p className="text-green-500 text-center mb-4">{success}</p>}
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
                  htmlFor="solution"
                  className="block text-sm font-medium text-gray-700"
                >
                  How can we help you?🤝😊
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="solution"
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;