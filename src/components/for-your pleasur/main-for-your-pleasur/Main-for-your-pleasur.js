import React from "react";
import OurCoffeeBg from "../../our-coffee/our-coffee-bg/Our-coffee-bg";
import AboutOurSth from "../../our-coffee/about-our-beans/About-our-sth";
import CatalogCoffee from "../../catalog-coffee/Catalog-coffee";


class MainForYourPleasur extends React.Component{
    constructor(props){

        super(props);
        this.state = {
            data: [
                {   background: "/img/aromistico-coffee.png",
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    prize: "6.99$",
                },
                {   background: "/img/aromistico-coffee.png",
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Kenya",
                    prize: "6.99$",
                },
                {   background: "/img/aromistico-coffee.png",
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Columbia",
                    prize: "6.99$",
                },
                {   background: "/img/aromistico-coffee.png",
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    prize: "6.99$",
                },
                {   background: "/img/aromistico-coffee.png",
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    prize: "6.99$",
                },
                {   background: "/img/aromistico-coffee.png",
                    title: "AROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    prize: "6.99$",
                }
            ],
        }
    }



    render(){
        let {data} = this.state;
        
        return(
            <>
                <OurCoffeeBg height="260" url="/img/for-your-bg.jpg"/>
                <AboutOurSth 
                src = "/img/for-your-pleasur.jpg"
                textone="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                texttwo="Afraid at highly months do things on at. Situation recommend objection do intention so questions."
                textthree="As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want."
                textfour=" Children me laughing we prospect answered followed. At it went
                is song that held help face."/>
                
                <CatalogCoffee data={data}/>
            </>
        );
    }
}

export default MainForYourPleasur;