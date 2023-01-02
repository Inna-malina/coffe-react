import React from "react";
import MainBg from "../main-bg/Main-bg";
import Aboutus from "../about-us/About-us";
import Ourbest from "../our-best/Our-best";

class MainCoffeHouse extends React.Component{
    render(){
        return(
            <>
                <MainBg height="640" url="/img/main-bg.jpg"/>
                <Aboutus/>
                <Ourbest/>
            </>
        )
    }
}

export default MainCoffeHouse;