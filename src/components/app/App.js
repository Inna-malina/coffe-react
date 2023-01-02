import React from 'react';
import {BrowserRouter as Router, Route, Routes, Link}  from "react-router-dom";
import './App.scss';
import { BeanslogoBlack } from '../beans-logo/Beans-logo';
import MainCoffeHouse from '../coffee-house/main-coffe-house/Main-coffe-house';
import MainOurCoffee from '../our-coffee/main-our-coffee/Main-our-coffee';
import MainForYourPleasur from '../for-your pleasur/main-for-your-pleasur/Main-for-your-pleasur';

class App extends React.Component {

    render(){
      return (
        <Router>
            <div className='app'>
                    <nav>
                        <div className="nav__box">
                            <img className="nav__img" alt="cofee-beans" src='/img/nav-logo-white.svg'/>
                            <ul className="nav__list">
                                <li className="nav__list-item">
                                    <Link to="/">Coffee house</Link> 
                                </li>
                                <li className="nav__list-item">
                                    <Link to="/our-coffee">Our coffee</Link> 
                                </li>
                                <li className="nav__list-item">
                                    <Link to="/for-your-pleasur">For your pleasure</Link> 
                                </li>
                            </ul>
                        </div>
                    </nav>



                    <main className="content">
                        <Routes>
                            <Route path="/" element={<MainCoffeHouse/>}></Route>
                            <Route path="/our-coffee" element={<MainOurCoffee/>}></Route>
                            <Route path="/for-your-pleasur" element={<MainForYourPleasur/>}></Route>
                        </Routes>
                    </main>



                    <footer>
                        <div className="footer">
                            <div className="nav__box">
                                <img className="nav__img" alt="cofee-beans" src='/img/nav-logo-black.svg'/>
                                <ul className="nav__list">
                                    <li className="nav__list-item">
                                        <Link to="/">Coffee house</Link>  
                                    </li>
                                    <li className="nav__list-item">
                                        <Link to="/our-coffee">Our coffee</Link> 
                                    </li>
                                    <li className="nav__list-item">
                                        <Link to="/for-your-pleasur">For your pleasure</Link> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                        <BeanslogoBlack/>
                    </footer>
            </div>            
        </Router>
      );
    }
}

export default App;
