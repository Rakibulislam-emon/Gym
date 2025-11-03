import { useQuery } from "@tanstack/react-query";
<<<<<<< HEAD
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";

export default function UserDashboard() {
    const axios = useAxios();
    const { user } = useAuth();
    // console.log('user:', user?.email);

    const { data: subscriptions = [] } = useQuery({
        queryKey: ['subscriptions'],
        queryFn: async () => {
            const response = await axios.get('/subscriptions');
            return response.data;
        },
        refetchInterval: 10000, // refetch every 10 seconds
    });
    // console.log(subscriptions);
    const { data: users = [] } = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const response = await axios.get('/users');
            return response.data;
        },
        refetchInterval: 10000, // refetch every 10 seconds
    })
    // console.log(users);

    // Find the subscription that matches the current user's email
    const userSubscription = subscriptions.find(sub => sub?.email === user?.email);
    // console.log('userSubscription:', userSubscription)

    // If no subscription is found, return null or show a message
    if (!userSubscription) {
        return <div className="text-center">No subscription found for this user. </div>;
    }
    // Destructure the subscription plan details
    const { name, price, features } = userSubscription.subscriptionPlan;

    const userName = users.find(u => u.email === user.email)

    return (
        <section className="py-8 bg-gray-900 min-h-screen">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    Hello, {userName?.username || "User"}!
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 font-extrabold mb-4 border-b-4 py-4 border-green-400 ">
                    Welcome to your subscription dashboard.
                </p>
            </div>
            <div className="text-white my-8 text-center">
                <p className="text-2xl">CURRENT SUBSCRIPTION ⬇️</p>
            </div>
            <div className="flex flex-col items-center mx-auto p-6 sm:p-8 bg-gray-800 border border-gray-700 rounded-2xl shadow-lg max-w-md mb-8 ">


                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 ">
                    {name}
                </h2>
                <p className="text-lg sm:text-xl text-center mb-6 text-gray-400">
                    <span className="text-4xl sm:text-5xl font-bold text-white">${price}</span> / Month
                </p>
                <ul className="list-none list-inside mb-6 text-center text-gray-300 space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className={`text-lg ${index === 0 ? "font-bold text-orange-500" : ""}`}>
                            {feature}
                        </li>
                    ))}
                </ul>
                <p className={`text-sm font-semibold ${userSubscription.status === 'active' ? 'text-green-500' : 'text-red-500'}`}>
                    Status: {userSubscription.status}
                </p>
            </div>




        </section>

    );
}
=======
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
>>>>>>> 46f2fea72613ec336d24f9a8b2286ba7653abdf3
