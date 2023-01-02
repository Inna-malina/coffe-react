import React from "react";
import './Catalog-coffee.scss';
import CoffeeGoods from '../coffee-goods/Coffee-goods';

class CatalogCoffee extends React.Component{

    render(){
        let {data} = this.props;
        let elementsCoffee = data.map(item =>{
            return(
                <CoffeeGoods 
                    background={item.background}
                    title={item.title}
                    country={item.country}
                    prise={item.prize}
                />
            )
        })
       
        
        return(
            <section className="our-coffee__catalog-goods">
                {elementsCoffee}

            </section>
        );
    }
}

export default CatalogCoffee;