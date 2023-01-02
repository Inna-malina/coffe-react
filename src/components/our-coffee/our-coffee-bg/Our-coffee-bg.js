import React from 'react';
import './Our-coffee-bg.scss';

class OurCoffeeBg extends React.Component{
    render(){
        let {url, height} = this.props;
        return(
            <>
                <div className="our-coffee-bg__content" style={{height: `${height}px`, background: `url(${url})`}}>
                    <div className="our-coffee-bg__flexbox">
                        <h1 className="our-coffee-bg__title">
                            Our Coffee
                        </h1>
                    </div>
                </div>
            </>
        )
    }
}

export default OurCoffeeBg;