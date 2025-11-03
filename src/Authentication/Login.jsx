<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";

=======
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
>>>>>>> 46f2fea72613ec336d24f9a8b2286ba7653abdf3
export default function Login() {
  const axios = useAxios();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
<<<<<<< HEAD
=======
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState({ email: false, password: false });
>>>>>>> 46f2fea72613ec336d24f9a8b2286ba7653abdf3

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

<<<<<<< HEAD
    // Use the state variable for rememberMe
    // console.log('Remember Me:', rememberMe);

    // Ensure rememberMe checkbox is set correctly
    if (!rememberMe) {
      toast.error('Please check the "Remember Me" box if you want to stay signed in.');
      return;
    }

    const userInfo = {
      email,
      password,
    };
    // console.log('User Info:', userInfo);

    try {
      // Ensure signIn is handled properly
      await signIn(email, password);

      // Make sure you only make the request if signIn was successful
      const res = await axios.post('/login', userInfo);
      const { token } = res.data;
      localStorage.setItem('token', token);
      // Handle successful login (e.g., save token, navigate)
      toast.success('Logged in successfully');
      navigate('/'); // Navigate to the desired route

    } catch (error) {
      // Handle errors from signIn and axios.post
      if (error.response) {
        // Server responded with an error
        toast.error(`Error: ${error.response.data.message || error.message}`);
      } else if (error.request) {
        // Request was made but no response received
        toast.error('Network error. Please try again later.');
      } else {
        // Something went wrong in setting up the request
        toast.error(`Error: ${error.message}`);
      }
=======
    if (!rememberMe) {
      toast.error(
        'Please check the "Remember Me" box if you want to stay signed in.'
      );
      return;
    }

    const userInfo = { email, password };
    setIsLoading(true);

    try {
      await signIn(email, password);
      const res = await axios.post("/login", userInfo);
      const { token } = res.data;
      localStorage.setItem("token", token);
      toast.success("Welcome back! Signed in successfully");
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        toast.error(`Error: ${error.response.data.message || error.message}`);
      } else if (error.request) {
        toast.error("Network error. Please try again later.");
      } else {
        toast.error(`Error: ${error.message}`);
      }
    } finally {
      setIsLoading(false);
>>>>>>> 46f2fea72613ec336d24f9a8b2286ba7653abdf3
    }
  };

  return (
<<<<<<< HEAD
    <div className="font-[sans-serif]">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4">
        <div className="max-md:order-1 h-screen min-h-full">
          <img src="https://readymadeui.com/image-3.webp" className="w-full h-full object-cover" alt="login-image" />
        </div>

        <form onSubmit={handleLogin} className="max-w-xl w-full p-6 mx-auto">
          <div className="mb-12">
            <h3 className="text-gray-800 text-4xl font-extrabold">Sign in</h3>
            <p className="text-gray-800 text-sm mt-6">Don’t have an account <Link to={'/register'} className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Register here</Link></p>
          </div>

          <div>
            <label className="text-gray-800 text-sm block mb-2">Email</label>
            <div className="relative flex items-center">
              <input name="email" type="text" required className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter email" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2" viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                  </clipPath>
                </defs>
                <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path fill="none" strokeMiterlimit="10" strokeWidth="40" d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000"></path>
                  <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000"></path>
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-8">
            <label className="text-gray-800 text-sm block mb-2">Password</label>
            <div className="relative flex items-center">
              <input name="password" type="password" required className="w-full text-sm text-gray-800 border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter password" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                Remember me
              </label>
            </div>
            <div>
              <a className="text-blue-600 font-semibold text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="mt-12">
            <button type="submit" className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
              Sign in
            </button>
          </div>

          <div className="my-6 flex items-center gap-4">
            <hr className="w-full border-gray-300" />
            <p className="text-sm text-gray-800 text-center">or</p>
            <hr className="w-full border-gray-300" />
          </div>

          <button type="button" className="w-full py-2.5 px-4 text-sm tracking-wide rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none">
            <svg className="w-5 h-5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M23 12l-8-8v5H3v6h12v5z" />
            </svg>
            <span className="ml-2">Sign in with Google</span>
          </button>
        </form>
=======
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/50 to-slate-900" />
      </div>

      {/* Animated Floating Elements - Using Tailwind Classes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl ${
              i % 3 === 0
                ? "animate-float-slow"
                : i % 3 === 1
                ? "animate-float-medium"
                : "animate-float-fast"
            }`}
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="grid lg:grid-cols-2 items-center gap-12 max-w-7xl w-full">
          {/* Left Side - Hero Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up border--">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-pulse-gentle">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">
                  Welcome Back
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Begin Your
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Journey
                </span>
              </h1>

              <p className="text-xl text-white/70 max-w-lg leading-relaxed mx-auto lg:mx-0">
                Access your personalized dashboard and continue where you left
                off. Your adventure awaits.
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid  grid-cols-2 gap-6 max-w-md md:mx-auto lg:mx-0">
              {[
                { icon: "📱", text: "Quick Access" },
                { icon: "🔒", text: "Secure Login" },
                { icon: "📅", text: "Book Classes" },
                { icon: "💎", text: "Member Benefits" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100 + 500}ms` }}
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-white/80 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex justify-center lg:justify-end">
            <form
              onSubmit={handleLogin}
              className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 animate-scale-in"
            >
              <div className="space-y-8">
                {/* Header */}
                <div className="text-center space-y-3">
                  <h2 className="text-3xl font-bold text-white">
                    Welcome Back
                  </h2>
                  <p className="text-white/60">
                    Don't have an account?{" "}
                    <Link
                      to={"/register"}
                      className="text-purple-300 font-semibold hover:text-purple-200 transition-colors duration-200 hover:underline"
                    >
                      Create one here
                    </Link>
                  </p>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      required
                      onFocus={() =>
                        setIsFocused((prev) => ({ ...prev, email: true }))
                      }
                      onBlur={() =>
                        setIsFocused((prev) => ({ ...prev, email: false }))
                      }
                      className="w-full px-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20"
                      placeholder="Enter your email"
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                        isFocused.email ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="relative">
                    <input
                      name="password"
                      type="password"
                      required
                      onFocus={() =>
                        setIsFocused((prev) => ({ ...prev, password: true }))
                      }
                      onBlur={() =>
                        setIsFocused((prev) => ({ ...prev, password: false }))
                      }
                      className="w-full px-4 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20"
                      placeholder="Enter your password"
                    />
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 ${
                        isFocused.password ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className="sr-only"
                      />
                      <div
                        className={`w-5 h-5 border-2 rounded transition-all duration-200 group-hover:border-purple-400 ${
                          rememberMe
                            ? "bg-purple-500 border-purple-500 animate-scale-in"
                            : "border-white/30 bg-white/5"
                        }`}
                      >
                        {rememberMe && (
                          <svg
                            className="w-3 h-3 text-white mx-auto mt-0.5 animate-scale-in"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                      Remember me
                    </span>
                  </label>

                  <button
                    type="button"
                    className="text-purple-300 text-sm font-medium hover:text-purple-200 transition-colors duration-200 hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Sign In Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -left-full group-hover:left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-left duration-1000" />

                  <div className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Signing In...</span>
                      </>
                    ) : (
                      <>
                        <span>Sign In</span>
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </>
                    )}
                  </div>
                </button>

                {/* Divider */}
                {/* <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/20" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-transparent text-white/60">
                      or continue with
                    </span>
                  </div>
                </div> */}

                {/* Google Sign In */}
                {/* <button
                  type="button"
                  className="w-full py-3 px-6 bg-white/5 border border-white/10 text-white font-medium rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  <span>Sign in with Google</span>
                </button> */}
              </div>
            </form>
          </div>
        </div>
>>>>>>> 46f2fea72613ec336d24f9a8b2286ba7653abdf3
      </div>
    </div>
  );
}
