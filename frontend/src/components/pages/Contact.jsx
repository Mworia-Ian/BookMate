import React, { useState } from "react";

const ContactUsPage = () => {
  const [question, setQuestion] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate sending question to backend (not implemented here)
    setIsSent(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Welcome to BookMate! We're here to assist you with any questions or issues you may have.
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="mx-auto mt-12 max-w-xl">
        <div className="grid grid-cols-1 gap-y-6">
          <div>
            <label htmlFor="question" className="block text-sm font-semibold leading-6 text-gray-900">
              Your Question
            </label>
            <div className="mt-2.5">
              <textarea
                id="question"
                name="question"
                rows={4}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="block w-full rounded-md border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:ring-2 focus:ring-orange-600 focus:border-transparent sm:text-sm sm:leading-6"
                placeholder="Enter your question..."
                required
              />
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-orange-600"
            >
              Send Question
            </button>
          </div>
        </div>
      </form>

      {/* Confirmation Message */}
      {isSent && (
        <div className="mx-auto mt-8 max-w-xl text-center">
          <p className="text-lg text-gray-900">Your question has been sent!</p>
        </div>
      )}
    </div>
  );
};

export default ContactUsPage;

