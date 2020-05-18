import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css";
import serverIcon from './default-server-icon.png';

class Icon extends React.Component {

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        node.addEventListener("load", this.renderImage(node, this.props.src));
    }

    render() {
        return <img className="Icon Icon__loading mr-3 noselect" src={serverIcon} alt="" width="64" height="64" />
    }

    renderImage(element, src) {
        var img = new Image();
        img.addEventListener("load", () => {
            element.src = this.props.src;
            element.classList.remove("Icon__loading");
        });
        let pop = src;
        img.src = ""+pop;
    }
}

export default Icon;