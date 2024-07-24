import React, { useState } from "react";
import axios from "axios"; // Make sure to install axios: npm install axios

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
    
    try {
      const response = await axios.post('/contact', {
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
      {/* ... (existing JSX) ... */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* ... (existing form fields) ... */}
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <div>
          <button
            type="submit"
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
      {/* ... (rest of the component) ... */}
    </div>
  );
}

export default Contact;