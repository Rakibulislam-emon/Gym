import { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { 
  FaHome, 
  FaUsers, 
  FaClipboardList, 
  FaCalendarAlt, 
  FaDumbbell, 
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaChartLine,
  FaCrown
} from 'react-icons/fa';
import { useQuery } from '@tanstack/react-query';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import StatusBadge from './shared/StatusBadge';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  const axios = useAxiosSecure();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Decode JWT to get user role
  const token = localStorage.getItem('token');
  const decode = token ? jwtDecode(token) : null;
  const role = decode?.userRole;
  const userEmail = decode?.userEmail;

  // Fetch user data for profile info
  const { data: users = [] } = useQuery({
    queryKey: ['allUsers'],
    queryFn: async () => {
      const response = await axios.get('/users');
      return response.data;
    },
  });

  const currentUser = users.find(u => u.email === userEmail);
  const userName = currentUser?.username || user?.displayName || 'User';

  // Fetch subscriptions for admin mini stats
  const { data: subscriptions = [] } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: async () => {
      const response = await axios.get('/subscriptions');
      return response.data;
    },
    enabled: role === 'admin',
  });

  const logOut = () => {
    logout();
    navigate('/login');
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (e) => {
    if (!e.target.closest('#sidebar') && !e.target.closest('#open-sidebar')) {
      setSidebarOpen(false);
    }
  };

  // Check if route is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Navigation items based on role
  const adminNavItems = [
    { path: '/dashboard', label: 'Dashboard', icon: FaHome },
    { path: '/dashboard/manage-users', label: 'Manage Users', icon: FaUsers },
    { path: '/dashboard/subscriptions', label: 'Subscriptions', icon: FaClipboardList },
    { path: '/dashboard/analytics', label: 'Analytics', icon: FaChartLine },
  ];

  const userNavItems = [
    { path: '/dashboard', label: 'Dashboard', icon: FaHome },
    { path: '/dashboard/subscriptionLists', label: 'My Subscriptions', icon: FaClipboardList },
    { path: '/dashboard/classTimeTable', label: 'Classes', icon: FaCalendarAlt },
    { path: '/all-trainers', label: 'Trainers', icon: FaDumbbell },
  ];

  const navItems = role === 'admin' ? adminNavItems : userNavItems;

  // Admin mini stats
  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active').length;
  const totalRevenue = subscriptions.reduce((sum, sub) => sum + (sub.subscriptionPlan?.price || 0), 0);

  return (
    <div className="bg-gray-100 min-h-screen" onClick={closeSidebar}>
      <div className="h-screen flex overflow-hidden bg-gray-200">
        {/* Sidebar */}
        <div
          id="sidebar"
          className={`bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white w-72 min-h-screen overflow-y-auto transition-transform transform lg:translate-x-0 z-20 ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:relative absolute ease-in-out duration-300 shadow-2xl flex flex-col`}
        >
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-700">
            <Link to={'/'} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                <FaDumbbell className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Flex Fitness
                </h1>
                <p className="text-xs text-gray-400">Your Fitness Partner</p>
              </div>
            </Link>
          </div>

          {/* Profile Card */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  {userName.charAt(0).toUpperCase()}
                </div>
                {role === 'admin' && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center border-2 border-gray-900">
                    <FaCrown className="text-xs text-white" />
                  </div>
                )}
              </div>
              
              {/* User Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-white truncate">{userName}</p>
                <p className="text-xs text-gray-400 truncate">{userEmail}</p>
                <div className="mt-1">
                  <StatusBadge 
                    status={role === 'admin' ? 'active' : 'active'} 
                    size="sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Admin Mini Stats */}
          {role === 'admin' && subscriptions.length > 0 && (
            <div className="p-6 border-b border-gray-700">
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-3">Quick Stats</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-750 transition-colors">
                  <p className="text-xs text-gray-400">Revenue</p>
                  <p className="text-lg font-bold text-green-400">${totalRevenue}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 hover:bg-gray-750 transition-colors">
                  <p className="text-xs text-gray-400">Active</p>
                  <p className="text-lg font-bold text-indigo-400">{activeSubscriptions}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 p-6">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.path);
                
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                        active
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/50'
                          : 'hover:bg-gray-800 hover:translate-x-1'
                      }`}
                    >
                      <Icon className={`text-lg ${active ? 'text-white' : 'text-gray-400 group-hover:text-white'}`} />
                      <span className={`font-medium ${active ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                        {item.label}
                      </span>
                      {active && (
                        <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Logout Button */}
          <div className="p-6 border-t border-gray-700">
            <button
              onClick={logOut}
              className="flex items-center gap-3 px-4 py-3 w-full rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-all duration-200 group"
            >
              <FaSignOutAlt className="text-lg" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Navbar */}
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg z-10">
            <div className="h-20 flex items-center justify-between px-6">
              {/* Left: Logo + Breadcrumb */}
              <div className="flex items-center gap-4">
                <button
                  className="text-white hover:text-indigo-400 lg:hidden transition-colors"
                  id="open-sidebar"
                  onClick={toggleSidebar}
                >
                  {isSidebarOpen ? (
                    <FaTimes className="w-6 h-6" />
                  ) : (
                    <FaBars className="w-6 h-6" />
                  )}
                </button>
                
                <Link to={'/'} className="flex items-center gap-2 group">
                  <FaDumbbell className="text-indigo-400 text-2xl group-hover:rotate-180 transition-transform duration-300" />
                  <span className="text-2xl font-bold text-white hidden sm:block">
                    Flex Fitness
                  </span>
                </Link>
              </div>

              {/* Right: User info (desktop only) */}
              <div className="hidden md:flex items-center gap-4">
                <div className="text-right">
                  <p className="text-sm text-white font-medium">{userName}</p>
                  <p className="text-xs text-gray-400 capitalize">{role}</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-lg font-bold text-white">
                  {userName.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="flex-1 overflow-auto bg-gray-100 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;