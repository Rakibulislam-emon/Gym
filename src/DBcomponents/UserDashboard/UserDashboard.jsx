import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import HeroSubscriptionCard from "./HeroSubscriptionCard";
import MiniStatWidget from "./MiniStatWidget";
import ActivityTimeline from "./ActivityTimeline";
import QuickLinks from "./QuickLinks";
import LoadingSpinner from "../shared/LoadingSpinner";
import EmptyState from "../shared/EmptyState";

export default function UserDashboard() {
  const axios = useAxios();
  const { user } = useAuth();

  const { data: subscriptions = [], isLoading: subscriptionsLoading } = useQuery({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      const response = await axios.get("/subscriptions");
      return response.data;
    },
  });

  const { data: users = [], isLoading: usersLoading } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const response = await axios.get("/users");
      return response.data;
    },
  });

  // Find the subscription that matches the current user's email
  const userSubscription = subscriptions.find(
    (sub) => sub?.email === user?.email
  );

  const userName = users.find((u) => u.email === user.email);

  if (subscriptionsLoading || usersLoading) {
    return <LoadingSpinner />;
  }

  if (!userSubscription) {
    return (
      <EmptyState 
        title="No Active Subscription"
        message="You don't have an active subscription yet."
        actionText="Browse Plans"
        onAction={() => window.location.href = '/membership'}
      />
    );
  }

  // Mock user stats - in real app, these would come from backend
  const userStats = [
    { type: 'workouts', value: 12, label: 'Workouts This Week', trend: 8 },
    { type: 'calories', value: 8450, label: 'Calories Burned', trend: 12 },
    { type: 'sessions', value: 8, label: 'Training Sessions', trend: 5 },
    { type: 'streak', value: 16, label: 'Day Streak', trend: 25 },
  ];

  return (
    <section className="py-8 bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
            Welcome back, {userName?.username || "User"}! 👋
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Track your fitness journey and manage your membership all in one place.
          </p>
        </div>

        {/* Hero Subscription Card */}
        <div className="mb-8">
          <HeroSubscriptionCard 
            subscription={userSubscription} 
            userName={userName?.username} 
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {userStats.map((stat, index) => (
            <MiniStatWidget
              key={index}
              type={stat.type}
              value={stat.value}
              label={stat.label}
              trend={stat.trend}
            />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Activity Timeline */}
          <div className="lg:col-span-2">
            <ActivityTimeline />
          </div>

          {/* Right Column - Quick Links */}
          <div className="lg:col-span-1">
            <QuickLinks />
          </div>
        </div>
      </div>
    </section>
  );
}