import React from "react";

const ContactUsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Welcome to BookMate! Here is our contact information for assistance.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
        {/* Customer Support Section */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Customer Support</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@bookmate.com" className="text-indigo-600 hover:underline">
                support@bookmate.com
              </a>
            </li>
            <li>
              <strong>Phone:</strong> +1 234 567 8900
            </li>
          </ul>
        </div>

        {/* Technical Support Section */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Technical Support</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:techsupport@bookmate.com" className="text-indigo-600 hover:underline">
                techsupport@bookmate.com
              </a>
            </li>
          </ul>
        </div>

        {/* Media Inquiries Section */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Media Inquiries</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:media@bookmate.com" className="text-indigo-600 hover:underline">
                media@bookmate.com
              </a>
            </li>
          </ul>
        </div>

        {/* Office Address Section */}
        <div className="bg-white rounded-lg p-6 col-span-2 lg:col-span-1 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Office Address</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Address:</strong> 123 Bookworm Street, Cityville, Country
            </li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="bg-white rounded-lg p-6 col-span-2 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Social Media</h2>
          <ul className="text-gray-700">
            <li>
              <strong>Facebook:</strong>{" "}
              <a href="https://facebook.com/bookmate" className="text-indigo-600 hover:underline">
                BookMate Official
              </a>
            </li>
            <li>
              <strong>Twitter:</strong>{" "}
              <a href="https://twitter.com/bookmate" className="text-indigo-600 hover:underline">
                BookMate Official
              </a>
            </li>
            <li>
              <strong>Instagram:</strong>{" "}
              <a href="https://instagram.com/bookmate" className="text-indigo-600 hover:underline">
                BookMate Official
              </a>
            </li>
          </ul>
        </div>

        {/* Business Hours Section */}
        <div className="bg-white rounded-lg p-6 col-span-2 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Business Hours</h2>
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
        <div className="bg-white rounded-lg p-6 col-span-2 shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Emergency Contact</h2>
          <p className="text-gray-700">
            For urgent matters outside business hours, please call:
          </p>
          <ul className="text-gray-700">
            <li>
              <strong>Emergency Contact:</strong> +1 234 567 8901
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="mailto:support@bookmate.com"
          className="inline-block px-6 py-3 rounded-md bg-orange-500 text-white font-semibold text-sm shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ContactUsPage;



