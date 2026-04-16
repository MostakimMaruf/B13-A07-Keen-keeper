import React from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';
import { FaPhoneAlt, FaVideo, FaRegClock, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineMessage, MdOutlineArchive } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';

const Frienddetails = () => {
  const { Id } = useParams();
  const allFriends = useLoaderData();

  const friend = allFriends.find((f) => String(f.id) === Id);

  if (!friend) return <div className="p-6 text-center">Friend not found!</div>;

  return (
    <div className="min-h-screen bg-[#f8fafc] p-4 sm:p-6 md:p-10 text-slate-700">
      <div className="max-w-5xl mx-auto">

        {/* Back Button */}
        <Link
          to="/"
          className="flex items-center gap-1 text-sm text-slate-500 hover:text-slate-800 mb-4 sm:mb-6"
        >
          <IoIosArrowBack /> Back to Dashboard
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-4 space-y-4">

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-sm border text-center">
              <img
                src={friend.picture}
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover border-4 border-slate-50"
                alt={friend.name}
              />

              <h1 className="text-lg sm:text-xl font-bold mt-3">
                {friend.name}
              </h1>

              <div className="flex flex-wrap justify-center gap-2 mt-3">
                <span className="bg-red-500 text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold">
                  {friend.status}
                </span>
                <span className="bg-green-100 text-green-700 text-[10px] px-3 py-1 rounded-full uppercase font-bold">
                  {friend.tags?.[0] || 'WORK'}
                </span>
              </div>

              <p className="mt-6 text-slate-400 italic text-sm">
                "Former colleague, great mentor"
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <button className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-xl border text-sm">
                <FaRegClock /> Snooze 2 Weeks
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-xl border text-sm">
                <MdOutlineArchive /> Archive
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-white p-3 rounded-xl border text-red-500 text-sm">
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-8 space-y-5">

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white p-4 sm:p-6 rounded-2xl text-center">
                <h2 className="text-2xl sm:text-3xl font-bold">62</h2>
                <p className="text-[10px] uppercase mt-2 text-slate-400">
                  Days Since Contact
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-green-700">
                  30
                </h2>
                <p className="text-[10px] uppercase mt-2 text-slate-400">
                  Goal (Days)
                </p>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl text-center">
                <h2 className="text-sm sm:text-lg font-bold">
                  Feb 27, 2026
                </h2>
                <p className="text-[10px] uppercase mt-2 text-slate-400">
                  Next Due
                </p>
              </div>
            </div>

            {/* Goal */}
            <div className="bg-white p-5 sm:p-7 rounded-2xl border relative">
              <h3 className="text-green-700 font-bold text-xs sm:text-sm uppercase">
                Relationship Goal
              </h3>
              <p className="mt-3 text-sm sm:text-lg">
                Connect every <b>30 days</b>
              </p>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-5 sm:p-7 rounded-2xl border">
              <h3 className="text-green-700 font-bold text-xs sm:text-sm uppercase mb-4">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-3 sm:gap-6">
                <button className="p-4 sm:p-8 bg-slate-50 rounded-xl flex flex-col items-center">
                  <FaPhoneAlt />
                  <span className="text-xs sm:text-sm mt-2 font-bold">Call</span>
                </button>

                <button className="p-4 sm:p-8 bg-slate-50 rounded-xl flex flex-col items-center">
                  <MdOutlineMessage />
                  <span className="text-xs sm:text-sm mt-2 font-bold">Text</span>
                </button>

                <button className="p-4 sm:p-8 bg-slate-50 rounded-xl flex flex-col items-center">
                  <FaVideo />
                  <span className="text-xs sm:text-sm mt-2 font-bold">Video</span>
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