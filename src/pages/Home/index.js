import React from "react";
import Header from "./Header/index";
import SpecialTeam from "./specialTeam/index";
import Marketing from "./marketing/marketing";
import Ads from "./Ads/index";
import Plan from "./Plan/index";
import Studies from "./Studies/index";
import Skill from "./Skill/index";
import Skill2 from "./Skill2/index";
import Price from "./Price/index";
import VideoSection from "./VideoSection/index";

function Home() {
    return (
        <> 
            <Header />
            <SpecialTeam />
            <Marketing />
            <Ads />
            <Plan />
            <Studies />
            <Skill />
            <Skill2 />
            <Price />
            <VideoSection />
        </>
    )
}

export default Home;