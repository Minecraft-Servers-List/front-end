import React from 'react';
import ReactDOM from 'react-dom';

import "./style.css";
import serverIcon from './default-server-icon.png';

class Icon extends React.Component {
    state = {
        icon: serverIcon
    }

    componentDidMount() {
        const node = ReactDOM.findDOMNode(this);
        node.addEventListener("load", this.renderImage(node));
    }

    componentDidUpdate() {
        const node = ReactDOM.findDOMNode(this);
        node.addEventListener("load", this.renderImage(node));
    }

    render() {
        return <img className="Icon Icon__loading mr-3 noselect" src={this.state.icon} alt="" width="64" height="64" />
    }

    renderImage(element) {
        var img = new Image();
        img.addEventListener("load", () => {
            this.state.icon = img.src;
            element.src = img.src;
            element.classList.remove("Icon__loading");
        });
        img.src = this.props.src;
    }
}

export default Icon;