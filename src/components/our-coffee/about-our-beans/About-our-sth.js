import React from "react";
import './About-our-sth.scss';
import Title from "../../titles/Title";
import { BeanslogoBlack } from "../../beans-logo/Beans-logo";

class AboutOurSth extends React.Component{
    render() {
        let {src, textone, texttwo,  textthree, textfour} = this.props;
        return(
            <>
                <section className="about-our-sth__box">
                    <img className="about-our-sth__img" src={src} alt="foto" />
                    <div className="about-our-sth__description">
                        <Title name = "About our beans"/>
                        <BeanslogoBlack/>
                        <article className="about-our-sth__text">
                            <p>
                                {textone}                           
                            </p>
                            <p>
                                {texttwo}
                            </p>
                            <p>
                                {textthree}
                            </p>
                            <p>
                                {textfour}
                            </p>
                        </article>
                    </div>
                </section>   
                <div className="our-coffee__line"></div>         
            </>

        )
    }
}

export default AboutOurSth;