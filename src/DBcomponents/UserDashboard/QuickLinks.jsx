import { FaCalendarPlus, FaDumbbell, FaUserFriends, FaCog, FaBook, FaVideo } from 'react-icons/fa';

export default function QuickLinks() {
  const links = [
    {
      title: 'Book Class',
      description: 'Schedule your next workout',
      icon: FaCalendarPlus,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900',
      href: '/classes'
    },
    {
      title: 'Workout Plans',
      description: 'View training programs',
      icon: FaDumbbell,
      color: 'text-green-400',
      bgColor: 'bg-green-900',
      href: '/workouts'
    },
    {
      title: 'Find Trainer',
      description: 'Connect with experts',
      icon: FaUserFriends,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900',
      href: '/trainers'
    },
    {
      title: 'Video Guides',
      description: 'Learn proper form',
      icon: FaVideo,
      color: 'text-red-400',
      bgColor: 'bg-red-900',
      href: '/guides'
    },
    {
      title: 'Progress',
      description: 'Track your journey',
      icon: FaBook,
      color: 'text-orange-400',
      bgColor: 'bg-orange-900',
      href: '/progress'
    },
    {
      title: 'Settings',
      description: 'Manage preferences',
      icon: FaCog,
      color: 'text-gray-400',
      bgColor: 'bg-gray-700',
      href: '/settings'
    }
  ];

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">Quick Access</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block p-4 rounded-xl border border-gray-600 hover:border-gray-500 hover:bg-gray-750 transition duration-200 group"
          >
            <div className={`w-12 h-12 rounded-lg ${link.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition duration-200`}>
              <link.icon className={`text-xl ${link.color}`} />
            </div>
            <h4 className="text-white font-semibold text-sm mb-1">{link.title}</h4>
            <p className="text-gray-400 text-xs">{link.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
}