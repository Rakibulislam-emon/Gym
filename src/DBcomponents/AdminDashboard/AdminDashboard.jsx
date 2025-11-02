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
    queryKey: ['allUsers'],
    queryFn: async () => {
      const response = await axios.get('/users');
      return response.data;
    },
    refetchInterval: 10000,
  });

  // Fetch all subscriptions
  const { data: subscriptions = [], refetch: refetchSubscriptions } = useQuery({
    queryKey: ['subscriptions'],
    queryFn: async () => {
      const response = await axios.get('/subscriptions');
      return response.data;
    },
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
          Welcome back, {role}! Here's what's happening today.
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