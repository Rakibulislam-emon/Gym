import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (e) => {
    if (!e.target.closest('#sidebar') && !e.target.closest('#open-sidebar')) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="bg-gray-100" onClick={closeSidebar}>
      <div className="h-screen flex overflow-hidden bg-gray-200">
        {/* Sidebar */}
        <div
          id="sidebar"
          className={`bg-gray-800 text-white w-56 min-h-[calc(100vh-4rem)] overflow-y-auto transition-transform transform lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:relative absolute ease-in-out duration-300`}
          style={{ top: '5rem' }}  // Adjust this value according to your navbar height
        >
          {/* Sidebar Content */}
          <div className="p-4">
            <h1 className="text-2xl font-semibold">Sidebar</h1>
            <ul className="mt-4">
              <li className="mb-2">
                <Link to={'/'} className="block hover:text-indigo-400">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to={'/dashboard/profile'} className="block hover:text-indigo-400">
                  Profile
                </Link>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="block hover:text-indigo-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <div className="dark:bg-gray-900 h-16 lg:h-20"> {/* Adjust height as needed */}
            <div className="container mx-auto h-full flex items-center px-2 text-white ">
              <h1 className="text-xl font-semibold">Animated Drawer</h1>
              <button
                className="text-gray-500 hover:text-gray-600 lg:hidden ml-auto"
                id="open-sidebar"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* Content Body */}
          <div className="flex-1 overflow-auto p-4">
            <h1 className="text-2xl font-semibold ">Welcome to our website</h1>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
