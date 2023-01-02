import React from 'react';
import './Our-best.scss';
import Title from '../../titles/Title';
import CoffeeGoods from '../../coffee-goods/Coffee-goods';



class Ourbest extends React.Component{
    render(){
        return(
            <section className="our-best__box">
                <Title name='Our best'/>
                <div className="coffee-goods__flexbox">
                    <CoffeeGoods 
                        background = '/img/solimo-coffee.png'
                        title = 'Solimo Coffee Beans 2 kg' 
                        prise = '10.73$'
                    />

                    <CoffeeGoods 
                        background = '/img/presto-coffee.png'
                        title = 'Presto Coffee Beans 1 kg' 
                        prise = '15.99$'
                    />

                    <CoffeeGoods 
                        background = '/img/aromistico-coffee.png'
                        title = 'AROMISTICO Coffee 1 kg' 
                        prise = '6.99$'
                    />
                </div>
            </section>
        )
    }
}

export default Ourbest;