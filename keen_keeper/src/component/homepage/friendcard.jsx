import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const FriendsCards = () => {
  const [friends, setFriends] = useState([]);
  console.log(friends);
  const [loading, setLoading] = useState(true);

  // 1. Fetch data from public/data.json
  useEffect(() => {
    fetch('../../../public/friends.json')
      .then((response) => response.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // 2. Helper to handle dynamic status colors
  const getStatusClasses = (status) => {
    const base = "text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-wider ";
    switch (status?.toLowerCase()) {
      case 'overdue':
        return base + "bg-red-500 text-white";
      case 'almost due':
        return base + "bg-orange-400 text-white";
      case 'on-track':
        return base + "bg-[#1e3a34] text-white"; // Dark green from image
      default:
        return base + "bg-gray-200 text-gray-600";
    }
  };

  if (loading) return <div className="p-10 text-center">Loading friends...</div>;

  return (
    <div className="min-h-screen bg-[#f8fafc] p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-[#1e293b] mb-8">Your Friends</h1>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friends.map((friend, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center transition-transform hover:scale-[1.02]"
            >
              {/* Profile Image */}
              <div className="w-20 h-20 mb-4">
                <img
                  src={friend.picture || 'https://via.placeholder.com/150'}
                  alt={friend.name}
                  className="w-full h-full rounded-full object-cover border-2 border-gray-50"
                />
              </div>

              {/* Name & Timestamp */}
              <h3 className="text-lg font-bold text-gray-800 mb-0.5"> <Link to={`/frienddetails/${friend?.id}`}>{friend.name}</Link></h3>
              <p className="text-gray-400 text-xs mb-4">{friend.lastContact || '62d ago'}</p>

              {/* Tag Badges (Work, Family, etc.) */}
              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {friend.tags?.map((tag, i) => (
                  <span 
                    key={i} 
                    className="bg-[#dcfce7] text-[#166534] text-[10px] font-bold px-3 py-1 rounded-full uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status Badge (Overdue, On-Track, etc.) */}
              <div className={getStatusClasses(friend.status)}>
                {friend.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FriendsCards;