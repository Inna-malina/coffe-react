import React from "react";
import './Coffee-goods.scss';

class CoffeeGoods extends React.Component {
     render(){
        let {background, title, country, prise} = this.props
        return (
            <div className="coffee-goods__card" data-name={country}>
                <img className="coffee-goods__img" 
                    // style={{background: `url(${background})`}}
                    src={background} 
                    alt="coffee"/>
                <h4 className="coffee-goods__title">
                    {title}
                </h4>
                <h4 className="coffee-goods__title country">
                    {country}
                </h4>
                <p className="coffee-goods__prise">
                    {prise}
                </p>
            </div>
        )
    }
}

export default CoffeeGoods;