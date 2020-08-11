import React from 'react';

import "./style.css";
import { Link } from 'react-router-dom';

class Paginator extends React.Component {
    getCurrent() {
        return parseInt(this.props.current);
    }

    canGoPrevious() {
        return this.props.minimum < this.getCurrent();
    }

    canGoForward() {
        return this.getCurrent() < this.props.maximum;
    }

    getManyPrevious() {
        let manyPrevious = this.getCurrent() - 10;
        return manyPrevious > this.props.minimum ? manyPrevious : this.props.minimum;
    }

    getPrevious() {
        let previous = this.getCurrent() - 1;
        return previous > this.props.minimum ? previous : this.props.minimum;
    }

    getManyForward() {
        let manyForward = this.getCurrent() + 10;
        return manyForward < this.props.maximum ? manyForward : this.props.maximum;
    }

    getForward() {
        let forward = this.getCurrent() + 1;
        return forward < this.props.maximum ? forward : this.props.maximum;
    }

    render() {
        return <ul className="Paginator pagination">
            <li className={"page-item" + (!this.canGoPrevious() && " disabled")}>
                <Link to={`/list/${this.getManyPrevious()}`} className="page-link">««</Link>
            </li>
            <li className={"page-item" + (!this.canGoPrevious() && " disabled")}>
                <Link to={`/list/${this.getPrevious()}`} className="page-link">«</Link>
            </li>
            <li className="page-item active">
                <span className="page-link">{this.getCurrent()}</span>
            </li>
            <li className={"page-item" + (!this.canGoForward() && " disabled")}>
                <Link to={`/list/${this.getForward()}`} className="page-link" >»</Link>
            </li>
            <li className={"page-item" + (!this.canGoForward() && " disabled")}>
                <Link to={`/list/${this.getManyForward()}`} className="page-link">»»</Link>
            </li>
        </ul>
    }
}

export default Paginator;