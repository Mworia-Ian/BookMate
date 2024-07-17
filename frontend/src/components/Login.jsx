import COVER_IMAGE from "../assets/COVER_IMAGE.jpg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="w-full h-screen flex items">
      <div className="relative w-1/2 bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute top-[25%] left-[5%] z-10 flex flex-col">
          <h1 className="text-3xl text-white font-extrabold my-4">
            Discover New Books, Connect with Readers, and Share Your Insights.
          </h1>
          <p className="text-lg text-white">
            Join Our Community of Book Enthusiasts Today!
          </p>
        </div>

        <img
          src={COVER_IMAGE}
          alt="Book Cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex items-center justify-center bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-3/4 min-h-[50vh]">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">LOG IN</h1>
          </div>
          <form className="space-y-6">
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
                  name="email"
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
                  name="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500"
                  required
                />
              </div>
            </div>
            <div className="text-left">
              <span>Don't have an account?</span>
              <Link to="/signup"
                href="#"
                className="ml-2 text-sm text-orange-600 hover:underline font-bold"
              >
                Register here
              </Link>
            </div>
            <div>
              <Link to="/home"
                type="submit"
                className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-200"
              >
                LOG IN
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
