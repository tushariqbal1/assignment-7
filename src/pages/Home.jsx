import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FriendCard from '../components/FriendCard';
import friendsData from '../data/friends.json';

const Home = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFriends(friendsData);
      setLoading(false);
    }, 800);
  }, []);

  const totalFriends = friends.length;
  const onTrack = friends.filter(f => f.status === 'on-track').length;
  const needAttention = friends.filter(f => f.status === 'overdue' || f.status === 'almost due').length;
  const interactionsThisMonth = 42; // Dummy

  return (
    <div className="max-w-6xl mx-auto px-6 pt-10">
      {/* Banner */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Friends to keep close in your life</h1>
        <p className="text-gray-600 max-w-md mx-auto">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
        <button className="mt-6 cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-2xl flex items-center gap-2 mx-auto font-medium">
          + Add a Friend
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm">Total Friends</p>
          <p className="text-4xl font-semibold mt-2">{totalFriends}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm">On Track</p>
          <p className="text-4xl font-semibold mt-2 text-emerald-600">{onTrack}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm">Need Attention</p>
          <p className="text-4xl font-semibold mt-2 text-orange-600">{needAttention}</p>
        </div>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <p className="text-gray-500 text-sm">Interactions This Month</p>
          <p className="text-4xl font-semibold mt-2">{interactionsThisMonth}</p>
        </div>
      </div>

      {/* Friends Grid */}
      <h2 className="text-2xl font-semibold mb-6">Your Friends</h2>
      
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="w-12 h-12 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;