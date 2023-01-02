import React from "react";
import './Nav.scss';

class Nav extends React.Component {
    render() {
        let {background, color} = this.props;
        return(
            <div className="nav__box">
                <img className="nav__img" src={background} alt="cofee-beans" />
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <a style={{color: `${color}`}} href="#">Coffee house</a> 
                    </li>
                    <li className="nav__list-item">
                        <a style={{color: `${color}`}} href="#">Our coffee</a> 
                    </li>
                    <li className="nav__list-item">
                        <a style={{color: `${color}`}} href="#">For your pleasure</a> 
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;