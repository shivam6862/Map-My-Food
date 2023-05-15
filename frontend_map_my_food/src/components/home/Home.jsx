import React from "react";

import HomeHeader from "./HomeHeader/HomeHeader";
import HomeMiddleTop from "./HomeMiddle/HomeMiddleTop";
import HomeMiddleBottom from "./HomeMiddle/HomeMiddleBottom";
import HomeFooter from "./HomeFooter/HomeFooter";

const Home = () => {
  return (
    <div>
      <div>
        <HomeHeader />
        <div>
          <HomeMiddleTop />
          <HomeMiddleBottom />
        </div>
        <HomeFooter />
      </div>
    </div>
  );
};

export default Home;
