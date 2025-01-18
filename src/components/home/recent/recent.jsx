import React from "react";
import Heading from "../../common/heading";
import "./recent.css";
import RecentCard from "../../home/recent/recentCard";
const recent = () => {
  return (
    <>
      <section className="recent padding">
        <div className="container">
          <Heading
            title="Recent Vehicle Listed"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          />
          <RecentCard />
        </div>
      </section>
    </>
  );
};

export default recent;
