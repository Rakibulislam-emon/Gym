import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
export default function Login() {
  const axios = useAxios();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState({ email: false, password: false });

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

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
      navigate("/");
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
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="w-full h-full object-cover"
          alt="Abstract digital transformation background"
        />
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
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
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

              <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                Access your personalized dashboard and continue where you left
                off. Your adventure awaits.
              </p>
            </div>

            {/* Feature Points */}
            <div className="grid grid-cols-2 gap-6 max-w-md">
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
      </div>
    </div>
  );
}
