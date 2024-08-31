import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "/logo2.png";
import useAuth from '../../Hooks/useAuth';

export default function Navbar() {
  const { user, logout } = useAuth()
  // console.log('user:', user)
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Classes', path: '/classes' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];



  return (
    <nav className="top-0 py-1 lg:py-2 w-full fixed lg:relative z-50 dark:bg-gray-900">
      <div className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="flex items-center space-x-2">
              <img className='size-16' src={logo} alt="Company Logo" />
            </div>
          </button>
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              {navItems.map((item, index) => (
                <li key={index} className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                  <Link to={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex lg:items-center gap-x-2">
            {user ? (
              <>
                <Link to={'/dashboard'} className="flex border items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold">
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="flex border items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold">
                  Logout
                </button>
              </>

            ) : (
              <>
                <Link to="/register" className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 font-semibold">
                  Sign up
                </Link>
                <Link to="/login"
                  className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                  Login
                </Link>
              </>
            )}
          </div>
          <div className="flex items-center justify-center lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none text-slate-200 dark:text-white"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`lg:hidden fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out`}
        >
          <ul className="flex flex-col space-y-4 mt-20 text-base font-bold">
            {navItems.map((item, index) => (
              <li key={index} className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
            {user ? (
              <>
                <li className="flex items-center justify-center px-6 py-2.5 font-semibold">
                  <Link to={'/dashboard'}>Dashboard</Link>
                </li>
                <li className="flex items-center justify-center px-6 py-2.5 font-semibold">
                  <button onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-center justify-center px-6 py-2.5 font-semibold">
                  <Link to="/register">Sign up</Link>
                </li>
                <li className="flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200">
                  <Link to="/login" >Login</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
