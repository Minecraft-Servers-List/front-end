import React from 'react';

import "./style.css";

class Badge extends React.Component {
    render() {
        let link = "https://www.minecraftserverslist.net/search/" + this.props.children;
        return <a className="Badge badge badge-info notranslate" href={link}>
            {this.props.children}
        </a>
    }
}

export default Badge;