import { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

import { jwtDecode } from "jwt-decode";
import useAuth from '../Hooks/useAuth';
const Sidebar = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const logOut = () => {
    logout()
    navigate('/login')
  }

  // decoding jwt
  const token = localStorage.getItem('token')

  const decode = jwtDecode(token);

  const role = decode?.userRole



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
          className={`bg-gradient-to-b from-gray-800 via-gray-700 to-gray-900 text-white w-64 min-h-[calc(100vh-4rem)] overflow-y-auto transition-transform transform lg:translate-x-0 z-10 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:relative absolute ease-in-out duration-300 shadow-lg`}
          style={{ top: '5rem' }} // Adjust this value according to your navbar height
        >
          {/* Sidebar Content */}
          <div className="p-6">
            <Link to={'/'} className="text-3xl font-bold mb-6 text-indigo-400">PowerZone </Link>
            <ul className="space-y-4 mt-4">
              <li>
                <Link
                  to={'/dashboard'}
                  className="flex items-center p-2 text-lg rounded-md hover:bg-indigo-500 transition duration-300"
                >
                  <span className="ml-2">Dashboard</span>
                </Link>
              </li>


              {role === 'user' && <>
                <li>
                  <Link
                    to={'/dashboard/subscriptionLists'}
                    className="flex items-center p-2 text-lg rounded-md hover:bg-indigo-500 transition duration-300"
                  >
                    <span className="ml-2">Subscription Lists</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to={'/dashboard/classTimeTable'}
                    className="flex items-center p-2 text-lg rounded-md hover:bg-indigo-500 transition duration-300"
                  >
                    <span className="ml-2">Classes</span>
                  </Link>
                </li>
              </>}
              <li>
                <button
                  onClick={logOut}
                  className="flex items-center p-2 text-lg rounded-md hover:bg-indigo-500 transition duration-300"
                >
                  <span className="ml-2">Logout</span>
                </button>
              </li>
            </ul>
          </div>
        </div>



        {/* Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 h-16 lg:h-20 shadow-lg"> {/* Adjust height as needed */}
            <div className="container mx-auto h-full flex items-center px-4 lg:px-8 text-white">
              <Link to={'/'} className="text-2xl lg:text-3xl font-bold tracking-wide">
                PowerZone Fitness
              </Link>
              <button
                className="text-white hover:text-gray-200 lg:hidden ml-auto"
                id="open-sidebar"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-8 h-8"
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
            {/* <AdminDashboard/> */}
            {/* <Table/> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
