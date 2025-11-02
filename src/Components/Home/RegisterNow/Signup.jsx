import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxios from "../../../Hooks/useAxios";

export default function Signup() {
  const navigate = useNavigate();
  const { createUser } = useAuth();
  const axiosCommon = useAxios();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const username = form.firstName.value + " " + form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const phone = form.mobile.value;

    setIsLoading(true);
    try {
      const userInfo = { username, email, password, phone, role: "user" };
      await createUser(email, password);

      const res = await axiosCommon.post("/users", userInfo);
      if (res.status === 200) {
        toast.success("Account created successfully!");
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message || "Registration failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Image with Overlay - Same as Login */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className="w-full h-full object-cover"
          alt="Abstract digital transformation background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-purple-900/40 to-slate-900/80 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-900/50 to-slate-900" />
      </div>

      {/* Animated Floating Elements - Same as Login */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl animate-float-slow`}
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
          {/* Left Side - Hero Content - Same as Login */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 animate-pulse-gentle">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">
                  Start Your Journey
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                Create Your
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Account
                </span>
              </h1>

              <p className="text-xl text-white/70 max-w-lg leading-relaxed">
                Join thousands of users and unlock premium features. Your
                adventure begins here.
              </p>
            </div>

            {/* Feature Points - Updated for Registration */}
            <div className="grid grid-cols-2 gap-6 max-w-md">
              {[
                { icon: "💪", text: "Expert Training" },
                { icon: "👥", text: "Community Support" },
                { icon: "📊", text: "Progress Tracking" },
                { icon: "🏋️", text: "Modern Equipment" },
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

          {/* Right Side - Registration Form */}
          <div className="flex justify-center lg:justify-end">
            <form
              onSubmit={handleRegister}
              className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-purple-500/10 hover:shadow-purple-500/20 transition-all duration-500 animate-scale-in"
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center space-y-3">
                  <h2 className="text-3xl font-bold text-white">
                    Create Account
                  </h2>
                  <p className="text-white/60">
                    Already have an account?{" "}
                    <Link
                      to={"/login"}
                      className="text-purple-300 font-semibold hover:text-purple-200 transition-colors duration-200 hover:underline"
                    >
                      Sign in here
                    </Link>
                  </p>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="firstName"
                    type="text"
                    required
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20"
                  />
                  <input
                    name="lastName"
                    type="text"
                    required
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20"
                  />
                </div>

                {/* Email Field */}
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20"
                />

                {/* Password Field */}
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20"
                />

                {/* Mobile Field */}
                <input
                  name="mobile"
                  type="tel"
                  required
                  placeholder="Mobile Number"
                  className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-xl text-white placeholder-white/40 outline-none transition-all duration-300 focus:border-purple-400 focus:bg-white/10 focus:shadow-lg focus:shadow-purple-500/20"
                />

                {/* Create Account Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                >
                  {/* Shimmer Effect - Same as Login */}
                  <div className="absolute inset-0 -left-full group-hover:left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-left duration-1000" />

                  <div className="relative z-10 flex items-center justify-center gap-2">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Creating Account...</span>
                      </>
                    ) : (
                      <>
                        <span>Create Account</span>
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

                {/* Terms Notice */}
                <div className="text-center pt-4">
                  <p className="text-white/50 text-xs">
                    By creating an account, you agree to our{" "}
                    <a
                      href="#"
                      className="text-purple-300 hover:text-purple-200 underline"
                    >
                      Terms
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-purple-300 hover:text-purple-200 underline"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
