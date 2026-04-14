import { Link } from 'react-router-dom';

const FriendCard = ({ friend }) => {
  // Status Badge Color
  const getStatusStyle = (status) => {
    switch (status) {
      case 'overdue':
        return 'bg-red-500 text-white';
      case 'almost due':
        return 'bg-orange-500 text-white';
      case 'on-track':
        return 'bg-emerald-600 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  // Tag Color (ছবির মতো)
  const getTagStyle = (tag) => {
    const tagLower = tag.toLowerCase();
    if (tagLower.includes('work') || tagLower.includes('colleague')) 
      return 'bg-emerald-100 text-emerald-700';
    if (tagLower.includes('family') || tagLower.includes('mentor')) 
      return 'bg-purple-100 text-purple-700';
    if (tagLower.includes('hobby') || tagLower.includes('travel') || tagLower.includes('gym')) 
      return 'bg-amber-100 text-amber-700';
    return 'bg-gray-100 text-gray-600';
  };

  return (
    <Link to={`/friend/${friend.id}`} className="block group">
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        
        {/* Photo Section */}
        <div className="h-48 bg-gray-100 relative">
          <img 
            src={friend.picture} 
            alt={friend.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="font-semibold text-lg text-gray-900 text-center">
            {friend.name}
          </h3>

          {/* Days Ago */}
          <p className="text-center text-sm text-gray-500 mt-1">
            {friend.days_since_contact}d ago
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {friend.tags.map((tag, index) => (
              <span 
                key={index}
                className={`text-xs px-4 py-1 rounded-full font-medium ${getTagStyle(tag)}`}
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>

          {/* Status Badge - Bottom */}
          <div className="mt-auto pt-6">
            <div className={`mx-auto w-fit px-6 py-1.5 rounded-full text-sm font-semibold text-center ${getStatusStyle(friend.status)}`}>
              {friend.status === 'overdue' ? 'Overdue' : 
               friend.status === 'almost due' ? 'Almost Due' : 'On-Track'}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FriendCard;