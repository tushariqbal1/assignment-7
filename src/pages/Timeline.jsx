// import { useState, useEffect } from 'react';
// import { Phone, MessageCircle, Video } from 'lucide-react';

// const Timeline = () => {
//   const [timeline, setTimeline] = useState([]);
//   const [filter, setFilter] = useState('All');

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem('timeline')) || [];
//     setTimeline(saved);
//   }, []);

//   const filteredTimeline = filter === 'All' 
//     ? timeline 
//     : timeline.filter(item => item.type === filter);

//   const getIcon = (type) => {
//     if (type === 'Call') return <Phone size={20} className="text-blue-600" />;
//     if (type === 'Text') return <MessageCircle size={20} className="text-purple-600" />;
//     return <Video size={20} className="text-emerald-600" />;
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-6 py-10">
//       <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-10">
  
//   {/* Title */}
//   <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
//     Timeline
//   </h1>

//   {/* Filters */}
//   <div className="flex flex-wrap justify-center sm:justify-end gap-2">
//     {['All', 'Call', 'Text', 'Video'].map((f) => (
//       <button
//         key={f}
//         onClick={() => setFilter(f)}
//         className={`px-3 sm:px-5 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-medium transition cursor-pointer ${
//           filter === f
//             ? 'bg-emerald-600 text-white'
//             : 'bg-white border border-gray-200 hover:bg-gray-50'
//         }`}
//       >
//         {f}
//       </button>
//     ))}
//   </div>

// </div>

//       <div className="space-y-4">
//         {filteredTimeline.length === 0 ? (
//           <p className="text-center text-gray-500 py-20">No interactions yet. Start by checking in with a friend!</p>
//         ) : (
//           filteredTimeline.map((item) => (
//             <div key={item.id} className="bg-white p-6 rounded-3xl flex items-center gap-6 shadow-sm border border-gray-100">
//               <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
//                 {getIcon(item.type)}
//               </div>
//               <div className="flex-1">
//                 <p className="font-medium text-lg">{item.title}</p>
//                 <p className="text-sm text-gray-500">{item.date}</p>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Timeline;










import { useState, useEffect } from 'react';
import { Phone, MessageCircle, Video } from 'lucide-react';

const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('timeline')) || [];
    setTimeline(saved);
  }, []);

  const filteredTimeline = filter === 'All' 
    ? timeline 
    : timeline.filter(item => item.type === filter);

  const getIcon = (type) => {
    if (type === 'Call') return <Phone size={20} className="text-blue-600" />;
    if (type === 'Text') return <MessageCircle size={20} className="text-purple-600" />;
    return <Video size={20} className="text-emerald-600" />;
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 sm:mb-10">
  
 
        <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
          Timeline
        </h1>


        <div className="flex justify-center sm:justify-end">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white border border-gray-200 rounded-2xl px-5 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer w-full sm:w-64"
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Calls</option>
            <option value="Text">Texts</option>
            <option value="Video">Videos</option>
          </select>
        </div>

      </div>

   
      <div className="space-y-4">
        {filteredTimeline.length === 0 ? (
          <p className="text-center text-gray-500 py-20">No interactions yet. Start by checking in with a friend!</p>
        ) : (
          filteredTimeline.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-3xl flex items-center gap-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center">
                {getIcon(item.type)}
              </div>
              <div className="flex-1">
                <p className="font-medium text-lg">{item.title}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Timeline;