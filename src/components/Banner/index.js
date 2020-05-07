import React from 'react';

import "./style.css"

class Banner extends React.Component {
    render() {
        return <div className="Banner starter-template" style={{backgroundImage: `url(${this.props.image})`}}>
            <h1>{this.props.title}</h1>
            <p className="lead font-500">
                {this.props.children}
            </p>
        </div>
    }
}

export default Banner;