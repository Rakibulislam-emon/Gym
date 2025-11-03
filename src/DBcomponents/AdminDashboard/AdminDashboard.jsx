<<<<<<< HEAD

import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UserDashboard from "../UserDashboard/UserDashboard";
import Table from "./Table";
import { useQuery } from '@tanstack/react-query'
import { jwtDecode } from "jwt-decode";

export default function AdminDashboard() {

  const axios = useAxiosSecure()

  // decoding jwt
  const token = localStorage.getItem('token')

  const decode = jwtDecode(token);

  const role = decode?.userRole



  // get all users 
  const { data: users = [] } = useQuery({
=======
import { useQuery } from '@tanstack/react-query';
import { jwtDecode } from "jwt-decode";
import { FaDollarSign, FaUserCheck, FaUsers, FaUserSlash } from 'react-icons/fa';
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import UserDashboard from "../UserDashboard/UserDashboard";
import StatCard from "../shared/StatCard";
import RevenueChart from "./Charts/RevenueChart";
import SubscriptionPieChart from "./Charts/SubscriptionPieChart";
import MembersBarChart from "./Charts/MembersBarChart";
import RecentActivity from "./RecentActivity";
import QuickActions from "./QuickActions";
import Table from "./Table";

export default function AdminDashboard() {
  const axios = useAxiosSecure();

  // Decode JWT to get user role
  const token = localStorage.getItem('token');
  const decode = jwtDecode(token);
  const role = decode?.userRole;
  // const role = 'admin';
  console.log('role:', role)

  // Fetch all users
  const { data: users = [], refetch: refetchUsers } = useQuery({
>>>>>>> 46f2fea72613ec336d24f9a8b2286ba7653abdf3
    queryKey: ['allUsers'],
    queryFn: async () => {
      const response = await axios.get('/users');
      return response.data;
    },
<<<<<<< HEAD
    refetchInterval: 10000, // refetch every 10 seconds
  })
  const { data: subscriptions = [] } = useQuery({
=======
    refetchInterval: 10000,
  });

  // Fetch all subscriptions
  const { data: subscriptions = [], refetch: refetchSubscriptions } = useQuery({
>>>>>>> 46f2fea72613ec336d24f9a8b2286ba7653abdf3
    queryKey: ['subscriptions'],
    queryFn: async () => {
      const response = await axios.get('/subscriptions');
      return response.data;
    },
<<<<<<< HEAD
    // refetchInterval: 10000, // refetch every 10 seconds
  })
  // console.log(subscriptions);
  const totalPrice = subscriptions?.reduce((sum, { subscriptionPlan: { price } }) => sum + price, 0);
  // console.log(users);

  return (
    <div className="mt-12">
      {role === 'admin' ? <>

        <h1 className="text-center text-5xl my-8">welcome {role}</h1>

        <div className="mb-12  grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
          {/* Total Members */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path>
                <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd"></path>
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z"></path>
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-600 font-semibold">Total Amounts</p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{totalPrice}$</h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4"></div>
          </div>

          {/* Active Subscriptions */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Active Subscriptions</p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{subscriptions.length}</h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4"></div>
          </div>

          {/* Total Classes */}
          <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-white">
                <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
              </svg>
            </div>
            <div className="p-4 text-right">
              <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Members</p>
              <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{users.length}</h4>
            </div>
            <div className="border-t border-blue-gray-50 p-4"></div>
          </div>
        </div>
        <Table />
      </> : <UserDashboard />}
    </div>
  );
}
=======
  });

  // Refresh all data
  const handleRefresh = () => {
    refetchUsers();
    refetchSubscriptions();
  };

  // Calculate statistics
  const totalRevenue = subscriptions?.reduce((sum, { subscriptionPlan: { price } }) => sum + price, 0);
  const activeSubscriptions = subscriptions.filter(sub => sub.status === 'active').length;
  const blockedUsers = subscriptions.filter(sub => sub.status === 'blocked').length;
  const totalMembers = users.length;

  // Calculate trends (comparing to previous period - placeholder logic)
  const revenueTrend = 12.5; // +12.5%
  const activeTrend = 8.3; // +8.3%
  const membersTrend = 5.2; // +5.2%
  const blockedTrend = -2.1; // -2.1% (negative is good for blocked)

  // If user is not admin, show user dashboard
  if (role !== 'admin') {
    return <UserDashboard />;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-400 text-lg">
          Welcome back, {role}! Here you can see a summary of all the users and what s happening today.
        </p>
      </div>

      {/* Stat Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Revenue"
          value={totalRevenue}
          icon={FaDollarSign}
          trend={revenueTrend}
          color="blue"
          prefix="$"
        />
        <StatCard
          title="Active Subscriptions"
          value={activeSubscriptions}
          icon={FaUserCheck}
          trend={activeTrend}
          color="green"
        />
        <StatCard
          title="Total Members"
          value={totalMembers}
          icon={FaUsers}
          trend={membersTrend}
          color="indigo"
        />
        <StatCard
          title="Blocked Users"
          value={blockedUsers}
          icon={FaUserSlash}
          trend={blockedTrend}
          color="red"
        />
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <QuickActions onRefresh={handleRefresh} />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Revenue Chart - Full width on mobile, half on desktop */}
        <div className="lg:col-span-2">
          <RevenueChart subscriptions={subscriptions} />
        </div>

        {/* Pie Chart */}
        <SubscriptionPieChart subscriptions={subscriptions} />

        {/* Bar Chart */}
        <MembersBarChart subscriptions={subscriptions} />
      </div>

      {/* Recent Activity */}
      <div className="mb-8">
        <RecentActivity subscriptions={subscriptions} users={users} />
      </div>

      {/* User Management Table */}
      <div>
        <Table />
      </div>
    </div>
  );
}
>>>>>>> 46f2fea72613ec336d24f9a8b2286ba7653abdf3
