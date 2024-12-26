import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-red-800"
      style={{
        backgroundImage: "url('./background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white shadow-3xl rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 sm:w-4/5 md:w-3/4 lg:w-1/2 xl:w-1/3"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 font-medium mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 font-medium mb-2"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
            >
              {showPassword ? (
                <span role="img" aria-label="hide-password">
                  <FaEye />
                </span>
              ) : (
                <span role="img" aria-label="show-password">
                  <FaEyeSlash />
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <a
            href="/forgot-password"
            className="text-sm text-red-800 hover:underline"
          >
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-red-800 text-white font-bold py-2 rounded-lg transition duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
