import React, { useState } from 'react';

const ContactUsPage = () => {
  const [question, setQuestion] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add further logic to send the question to your backend or handle it as needed
    setIsSent(true);
  };

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Welcome to Bookmate! We're here to assist you with any questions or issues you may have. Please find below
          our contact information and frequently asked questions for quick assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {/* Customer Support Section */}
        <div className="bg-orange-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Customer Support</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@bookmate.com" className="text-indigo-600 hover:underline">
                support@bookmate.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +1-XXX-XXX-XXXX
            </li>
            <li>
              <strong>Live Chat:</strong> Available on our website/app during business hours
            </li>
          </ul>
        </div>

        {/* Technical Support Section */}
        <div className="bg-orange-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Technical Support</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:techsupport@bookmate.com" className="text-indigo-600 hover:underline">
                techsupport@bookmate.com
              </a>
            </li>
            <li>
              <strong>Live Chat:</strong> Available on our website/app during business hours
            </li>
          </ul>
        </div>

        {/* Media Inquiries Section */}
        <div className="bg-orange-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Media Inquiries</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:press@bookmate.com" className="text-indigo-600 hover:underline">
                press@bookmate.com
              </a>
            </li>
          </ul>
        </div>

        {/* Feedback and Suggestions Section */}
        <div className="bg-orange-100 rounded-lg p-6 col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Feedback and Suggestions</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:feedback@bookmate.com" className="text-indigo-600 hover:underline">
                feedback@bookmate.com
              </a>
            </li>
          </ul>
        </div>

        {/* Office Address Section */}
        <div className="bg-orange-100 rounded-lg p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Office Address</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Address:</strong> 123 Bookworm Street, Cityville, Country
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="bg-orange-100 rounded-lg p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Facebook:</strong>{' '}
              <a href="[Link]" className="text-indigo-600 hover:underline">
                Bookmate Official
              </a>
            </li>
            <li>
              <strong>Twitter:</strong>{' '}
              <a href="[Link]" className="text-indigo-600 hover:underline">
                Bookmate Official
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{' '}
              <a href="[Link]" className="text-indigo-600 hover:underline">
                Bookmate Official
              </a>
            </li>
          </ul>
        </div>

        {/* Business Hours Section */}
        <div className="bg-orange-100 rounded-lg p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
          <p className="text-gray-700">
            Our support team is available during the following hours:
          </p>
          <ul className="text-gray-700">
            <li>
              <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (local time)
            </li>
          </ul>
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-orange-100 rounded-lg p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
          <p className="text-gray-700">
            For urgent matters outside business hours, please call:
          </p>
          <ul className="text-gray-700">
            <li>
              <strong>Emergency Contact:</strong> +254 784 321 456
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center mt-12">
        <h2 className="text-xl font-semibold mb-4">How Can We Help You Today?</h2>
        <p className="text-gray-600">
          Whether you have a question about our services, need technical assistance, or want to share your thoughts,
          we're here to assist you. Reach out to us via email, phone, or live chat, and we'll get back to you as soon
          as possible. Your satisfaction is our priority at Bookmate!
        </p>
      </div>

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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Send Question
            </button>
          </div>
        </div>
      </form>

      {isSent && (
        <div className="mx-auto mt-8 max-w-xl text-center">
          <p className="text-lg text-gray-900">Your question has been sent!</p>
        </div>
      )}
    </div>
  );
import React, { useState } from 'react';

const ContactUsPage = () => {
  const [question, setQuestion] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add further logic to send the question to your backend or handle it as needed
    setIsSent(true);
  };

  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Welcome to Bookmate! We're here to assist you with any questions or issues you may have. Please find below
          our contact information and frequently asked questions for quick assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {/* Customer Support Section */}
        <div className="bg-orange-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Customer Support</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@bookmate.com" className="text-indigo-600 hover:underline">
                support@bookmate.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +1-XXX-XXX-XXXX
            </li>
            <li>
              <strong>Live Chat:</strong> Available on our website/app during business hours
            </li>
          </ul>
        </div>

        {/* Technical Support Section */}
        <div className="bg-orange-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Technical Support</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:techsupport@bookmate.com" className="text-indigo-600 hover:underline">
                techsupport@bookmate.com
              </a>
            </li>
            <li>
              <strong>Live Chat:</strong> Available on our website/app during business hours
            </li>
          </ul>
        </div>

        {/* Media Inquiries Section */}
        <div className="bg-orange-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Media Inquiries</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:press@bookmate.com" className="text-indigo-600 hover:underline">
                press@bookmate.com
              </a>
            </li>
          </ul>
        </div>

        {/* Feedback and Suggestions Section */}
        <div className="bg-orange-100 rounded-lg p-6 col-span-2 lg:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Feedback and Suggestions</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:feedback@bookmate.com" className="text-indigo-600 hover:underline">
                feedback@bookmate.com
              </a>
            </li>
          </ul>
        </div>

        {/* Office Address Section */}
        <div className="bg-orange-100 rounded-lg p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Office Address</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Address:</strong> 123 Bookworm Street, Cityville, Country
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="bg-orange-100 rounded-lg p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Social Media</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Facebook:</strong>{' '}
              <a href="[Link]" className="text-indigo-600 hover:underline">
                Bookmate Official
              </a>
            </li>
            <li>
              <strong>Twitter:</strong>{' '}
              <a href="[Link]" className="text-indigo-600 hover:underline">
                Bookmate Official
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{' '}
              <a href="[Link]" className="text-indigo-600 hover:underline">
                Bookmate Official
              </a>
            </li>
          </ul>
        </div>

        {/* Business Hours Section */}
        <div className="bg-orange-100 rounded-lg p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
          <p className="text-gray-700">
            Our support team is available during the following hours:
          </p>
          <ul className="text-gray-700">
            <li>
              <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (local time)
            </li>
          </ul>
        </div>

        {/* Emergency Contact Section */}
        <div className="bg-orange-100 rounded-lg p-6 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Emergency Contact</h2>
          <p className="text-gray-700">
            For urgent matters outside business hours, please call:
          </p>
          <ul className="text-gray-700">
            <li>
              <strong>Emergency Contact:</strong> +254 784 321 456
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center mt-12">
        <h2 className="text-xl font-semibold mb-4">How Can We Help You Today?</h2>
        <p className="text-gray-600">
          Whether you have a question about our services, need technical assistance, or want to share your thoughts,
          we're here to assist you. Reach out to us via email, phone, or live chat, and we'll get back to you as soon
          as possible. Your satisfaction is our priority at Bookmate!
        </p>
      </div>

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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Send Question
            </button>
          </div>
        </div>
      </form>

      {isSent && (
        <div className="mx-auto mt-8 max-w-xl text-center">
          <p className="text-lg text-gray-900">Your question has been sent!</p>
        </div>
      )}
    </div>
  );
};

export default ContactUsPage