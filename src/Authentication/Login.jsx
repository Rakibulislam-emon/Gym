import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import useAxios from "../Hooks/useAxios";

export default function Login() {
  const axios = useAxios();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

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
    }
  };

  return (
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
      </div>
    </div>
  );
}
