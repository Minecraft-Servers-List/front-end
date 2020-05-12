import React from 'react';

import "./style.css";

class Button extends React.Component {
    render() {
        return <a className="Button btn btn-success my-2 my-sm-0" href={this.props.href} role="button">
            {this.props.children}
        </a>
    }
}

export default Button;