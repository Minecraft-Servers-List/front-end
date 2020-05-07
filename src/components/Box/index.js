import React from 'react';

import "./style.css"

class Box extends React.Component {
    render() {
        return <div className="Box">
            {this.props.children}
        </div>
    }
}

export default Box;