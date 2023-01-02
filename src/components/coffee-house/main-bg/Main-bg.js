import React from 'react';
import {BeanslogoWhite} from '../../beans-logo/Beans-logo';
import './Main-bg.scss';



class MainBg extends React.Component {
    render(){
        let {url, height} = this.props;
        return (
            <>
                <div className="main-bg__content" style={{height: `${height}px`, background: `url(${url})`}}>
                    <div className="main-bg__flexbox">
                        <h1 className="main-bg__title">
                            Everything You Love About Coffee
                        </h1>
                        <BeanslogoWhite/>
                        <div className="main-bg__logo-box"></div>
                        <div className="main-bg__title-two">
                            <p>We makes every day full of energy and taste</p>
                            <p>Want to try our beans?</p>
                        </div>
                        <button className="main-bg__button">
                            More
                        </button>
                        
                    </div>
                </div>
            </>
        );
    }
}

export default MainBg;