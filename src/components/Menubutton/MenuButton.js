import React, { Component } from 'react';
import './MenuButton.scss';

class MenuButton extends Component {

    render() {
        return(
            <span className="menubutton">
                <span 
                    className="buttontext"
                    onClick={() => {
                        document.getElementById(this.props.scrollItem).scrollIntoView(
                            {behavior: 'smooth'}
                        );
                    }}
                >
                    {this.props.title}
                </span>
            </span>
        );
    }
}

export default MenuButton