import React from 'react';

import "./style.css";
import { Link } from 'react-router-dom';

class Button extends React.Component {
    render() {
        return <Link to={this.props.href} className="Button btn btn-success my-2 my-sm-0" role="button">
            {this.props.children}
        </Link>
    }
}

export default Button;