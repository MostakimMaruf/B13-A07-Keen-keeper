import React from "react";
import Banner from "../../component/homepage/banner";
import StatsRow from "../../component/homepage/statscounts";
import FriendsCards from "../../component/homepage/friendcard";

export default function Homepage() {
  return (
    <>
      {" "}
      <div>
        <Banner />
      </div>
      <div className="w-full flex items-center justify-center py-12">
        <StatsRow />
      </div>
      <div>
        <FriendsCards />
      </div>
    </>
  );
}
