import React from "react";
import './Title.scss';

class Title extends React.Component{
    render() {
        let {name} = this.props;
        return(
            <>
                <h2 className="title">
                    {name}
                </h2>
            </>
        )
    }
}

export default Title;