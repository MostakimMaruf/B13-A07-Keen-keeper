import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';
// Importing specific icons from React Icons
import { FaPhoneAlt, FaVideo, FaRegClock, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineMessage, MdOutlineArchive } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';

const Frienddetails = () => {
  const { Id } = useParams();
  const allFriends = useLoaderData();
  
  // Lookup logic
  const friend = allFriends.find((f) => String(f.id) === Id);

  if (!friend) return <div className="p-10 text-center">Friend not found!</div>;

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 md:p-10 font-sans text-slate-700">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Button */}
        <Link to="/" className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 mb-6 transition-colors">
          <IoIosArrowBack /> Back to Dashboard
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDE: PROFILE CARD */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
              <div className="relative mb-4">
                <img 
                  src={friend.picture} 
                  className="w-24 h-24 rounded-full object-cover border-4 border-slate-50 shadow-sm" 
                  alt={friend.name} 
                />
              </div>
              <h1 className="text-xl font-bold text-slate-800">{friend.name}</h1>
              
              <div className="flex flex-col gap-2 mt-3">
                <span className="bg-red-500 text-white text-[10px] px-4 py-1 rounded-full font-bold uppercase tracking-wider">
                  {friend.status}
                </span>
                <span className="bg-[#dcfce7] text-[#166534] text-[10px] px-4 py-1 rounded-full font-bold uppercase">
                  {friend.tags?.[0] || 'WORK'}
                </span>
              </div>

              <p className="mt-8 text-slate-400 italic text-sm leading-relaxed">
                "Former colleague, great mentor"
              </p>
              <p className="text-[10px] text-slate-300 mt-2 uppercase font-bold tracking-widest">
                Preferred: email
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 gap-2">
              <button className="flex items-center justify-center gap-3 w-full bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm text-slate-600 font-semibold hover:bg-slate-50 transition-all">
                <FaRegClock className="text-slate-400" /> Snooze 2 Weeks
              </button>
              <button className="flex items-center justify-center gap-3 w-full bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm text-slate-600 font-semibold hover:bg-slate-50 transition-all">
                <MdOutlineArchive className="text-slate-400 text-lg" /> Archive
              </button>
              <button className="flex items-center justify-center gap-3 w-full bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm text-red-500 font-semibold hover:bg-red-50 transition-all">
                <FaTrashAlt size={14} /> Delete
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: STATS & CHECK-IN */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <h2 className="text-3xl font-bold text-slate-800">62</h2>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">Days Since Contact</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <h2 className="text-3xl font-bold text-[#166534]">30</h2>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2">Goal (Days)</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                <h2 className="text-xl font-bold text-slate-800 pt-1.5">Feb 27, 2026</h2>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-2.5">Next Due</p>
              </div>
            </div>

            {/* Relationship Goal Card */}
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm relative group">
              <button className="absolute right-6 top-6 bg-slate-50 text-slate-500 px-4 py-1.5 rounded-lg text-xs font-bold border border-slate-100 hover:bg-slate-100 transition-colors">
                Edit
              </button>
              <h3 className="text-[#166534] font-bold text-sm uppercase tracking-widest mb-4">Relationship Goal</h3>
              <p className="text-slate-600 text-lg">
                Connect every <span className="font-bold text-slate-900">30 days</span>
              </p>
            </div>

            {/* Quick Check-In Section */}
            <div className="bg-white p-7 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-[#166534] font-bold text-sm uppercase tracking-widest mb-6">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-6">
                <button className="group flex flex-col items-center justify-center p-8 bg-[#fcfdfe] border border-slate-50 rounded-2xl hover:border-slate-200 hover:shadow-md transition-all">
                  <FaPhoneAlt className="text-xl mb-3 text-slate-700 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-slate-800">Call</span>
                </button>
                <button className="group flex flex-col items-center justify-center p-8 bg-[#fcfdfe] border border-slate-50 rounded-2xl hover:border-slate-200 hover:shadow-md transition-all">
                  <MdOutlineMessage className="text-2xl mb-2 text-slate-700 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-slate-800">Text</span>
                </button>
                <button className="group flex flex-col items-center justify-center p-8 bg-[#fcfdfe] border border-slate-50 rounded-2xl hover:border-slate-200 hover:shadow-md transition-all">
                  <FaVideo className="text-xl mb-3 text-slate-700 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-slate-800">Video</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Frienddetails;