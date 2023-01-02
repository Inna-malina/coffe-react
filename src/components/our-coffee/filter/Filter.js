import React from "react";
import './Filter.scss';


class Filter extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            term: ""           
        }
    }

    onUpdateSearch=(e)=>{
        let term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }
    render() {
        
        return (
            <section className="our-coffee__form">
                <form action="#" className="form__box">
                    <div className="our-coffee__search">
                        <label htmlFor="">Lookiing for</label>
                        <input type="text" 
                                placeholder="start typing here..."
                                value={this.state.term}
                                onChange={this.onUpdateSearch}/>
                    </div>

                </form>
            </section>
        );
    }
}
export default Filter;