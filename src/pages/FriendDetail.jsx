import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Video, Clock, Archive, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import friendsData from '../data/friends.json';
import { IoCall } from 'react-icons/io5';
import { FiMessageCircle } from 'react-icons/fi';
import { FaVideo } from 'react-icons/fa';

const FriendDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    const found = friendsData.find(f => f.id === parseInt(id));
    if (found) {
      setFriend(found);
    } else {
      navigate('/404');
    }
  }, [id, navigate]);

  const addInteraction = (type) => {
    const entry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
      type,
      title: `${type} with ${friend.name}`,
      friendId: friend.id
    };

    // Save to localStorage (for Timeline page)
    const timeline = JSON.parse(localStorage.getItem('timeline')) || [];
    timeline.unshift(entry);
    localStorage.setItem('timeline', JSON.stringify(timeline));

    toast.success(`${type} logged successfully!`, {
      icon: type === 'Call' ? <IoCall /> : type === 'Text' ? <FiMessageCircle /> : <FaVideo />
    });
  };

  if (!friend) return <div className="text-center py-20">Loading...</div>;

  const statusColor = {
    overdue: 'bg-red-100 text-red-700 border-red-200',
    'almost due': 'bg-orange-100 text-orange-700 border-orange-200',
    'on-track': 'bg-emerald-100 text-emerald-700 border-emerald-200'
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
      {/* Left Column - Friend Info */}
      <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
        <div className="flex flex-col items-center text-center">
          <img 
            src={friend.picture} 
            alt={friend.name}
            className="w-40 h-40 rounded-2xl object-cover border-4 border-white shadow-md"
          />
          <h1 className="text-3xl font-bold mt-6">{friend.name}</h1>
          
          <span className={`mt-3 px-5 py-1.5 rounded-full text-sm font-medium border ${statusColor[friend.status]}`}>
            {friend.status.toUpperCase().replace('-', ' ')}
          </span>

          <div className="flex gap-2 mt-6">
            {friend.tags.map((tag, i) => (
              <span key={i} className="bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-gray-600 leading-relaxed">{friend.bio}</p>
          <p className="mt-4 text-sm text-gray-500">{friend.email}</p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-2xl transition">
            <Clock className="text-emerald-600" size={28} />
            <span className="text-xs font-medium">Snooze 2 Weeks</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-2xl transition">
            <Archive className="text-amber-600" size={28} />
            <span className="text-xs font-medium">Archive</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 hover:bg-gray-50 rounded-2xl transition text-red-600">
            <Trash2 size={28} />
            <span className="text-xs font-medium">Delete</span>
          </button>
        </div>
      </div>

      {/* Right Column */}
      <div className="space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-3xl text-center border border-gray-100">
            <p className="text-4xl font-bold text-gray-900">{friend.days_since_contact}</p>
            <p className="text-xs text-gray-500 mt-1">Days Since Contact</p>
          </div>
          <div className="bg-white p-6 rounded-3xl text-center border border-gray-100">
            <p className="text-4xl font-bold text-emerald-600">{friend.goal}</p>
            <p className="text-xs text-gray-500 mt-1">Goal (Days)</p>
          </div>
          <div className="bg-white p-6 rounded-3xl text-center border border-gray-100">
            <p className="text-lg font-semibold">{friend.next_due_date}</p>
            <p className="text-xs text-gray-500 mt-1">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Relationship Goal</h3>
            <button className="text-emerald-600 text-sm font-medium">Edit</button>
          </div>
          <p className="text-2xl font-medium">Connect every {friend.goal} days</p>
        </div>

        {/* Quick Check-In */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100">
          <h3 className="font-semibold text-lg mb-6">Quick Check-In</h3>
          <div className="grid grid-cols-3 gap-4">
            <button 
              onClick={() => addInteraction('Call')}
              className="flex flex-col items-center gap-3 p-6 hover:bg-emerald-50 rounded-3xl transition border border-gray-100 hover:border-emerald-200"
            >
              <Phone className="text-emerald-600" size={32} />
              <span className="font-medium">Call</span>
            </button>
            
            <button 
              onClick={() => addInteraction('Text')}
              className="flex flex-col items-center gap-3 p-6 hover:bg-emerald-50 rounded-3xl transition border border-gray-100 hover:border-emerald-200"
            >
              <MessageCircle className="text-emerald-600" size={32} />
              <span className="font-medium">Text</span>
            </button>
            
            <button 
              onClick={() => addInteraction('Video')}
              className="flex flex-col items-center gap-3 p-6 hover:bg-emerald-50 rounded-3xl transition border border-gray-100 hover:border-emerald-200"
            >
              <Video className="text-emerald-600" size={32} />
              <span className="font-medium">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetail;