import React from 'react';
import OurCoffeeBg from '../our-coffee-bg/Our-coffee-bg';
import AboutOurSth from '../about-our-beans/About-our-sth';
import Filter from '../filter/Filter';
import CatalogCoffee from '../../catalog-coffee/Catalog-coffee';

class MainOurCoffee extends React.Component{
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
            term: ""
        }
    }


    onSearch = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.country.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    render(){
        let {term, data} = this.state;
        let visibleData = this.onSearch(data, term);

        return(
            <>
                <OurCoffeeBg height="260" url="/img/main-bg.jpg"/>
                <AboutOurSth 
                    src = "/img/about-our-beans.jpg"
                    textone="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible."
                    texttwo="Afraid at highly months do things on at. Situation recommend objection do intention so questions."
                    textthree="As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want."
                    textfour=" Children me laughing we prospect answered followed. At it went
                    is song that held help face."/>
                <Filter 
                    onUpdateSearch={this.onUpdateSearch}/>
                <CatalogCoffee data = {visibleData}/>
                
            </>
            
            
        );
    }
}
export default MainOurCoffee;