import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);

  // handle login 
  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    // Ensure rememberMe checkbox is set correctly
    if (!rememberMe) {
      toast.error('Please check the "Remember Me" box if you want to stay signed in.');
      return;
    }

    const userInfo = {
      email,
      password,
    };
    console.log('User Info:', userInfo);

    try {
      await signIn(email, password);
      toast.success('Logged in successfully');
      navigate('/');
    } catch (error) {
      toast.error(`Error: ${error.message}`);
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
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" onChange={() => setRememberMe(!rememberMe)} />
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

          <button type="button" className="w-full flex items-center justify-center gap-4 py-2.5 px-4 text-sm tracking-wide text-gray-800 border border-gray-300 rounded-md bg-transparent hover:bg-gray-50 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="inline" viewBox="0 0 512 512">
              <path fill="#fbbd00"
                d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                data-original="#fbbd00" />
              <path fill="#0f9d58"
                d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                data-original="#0f9d58" />
              <path fill="#31aa52"
                d="M256 392v-80.93L362.569 304 256 296.842v-86.216h86.216l69.477-34.738 60-60-60-60C367.297 18.568 313.078 0 256 0c-30.653 0-60.444 5.672-88.846 16.89L120 120.215c14.134-14.135 33.73-21.611 54.215-21.611C236.86 98.604 264 125.744 264 158.66c0 20.485-7.476 40.081-21.611 54.215-13.919 13.919-32.057 21.611-54.215 21.611v86.216H248.931V392z"
                data-original="#31aa52" />
              <path fill="#3c79e6"
                d="M256 296.842h86.216l69.477-34.738V120.215c-44.488-34.255-98.706-52.823-155.785-52.823V120c29.86 0 54.303 24.443 54.303 54.303 0 29.86-24.443 54.303-54.303 54.303V296.842z"
                data-original="#3c79e6" />
            </svg>
            <span className="block">Sign in with Google</span>
          </button>
        </form>
      </div>
    </div>
  );
}
