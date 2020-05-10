import React from 'react';

import "./style.css";

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
        return <ul class="Paginator pagination">
            <li class={"page-item" + (!this.canGoPrevious() && " disabled")}>
                <a class="page-link" href={"https://www.minecraftserverslist.net/list/" + this.getManyPrevious()}>««</a>
            </li>
            <li class={"page-item" + (!this.canGoPrevious() && " disabled")}>
                <a class="page-link" href={"https://www.minecraftserverslist.net/list/" + this.getPrevious()}>«</a>
            </li>
            <li class="page-item active">
                <span class="page-link">{this.getCurrent()}</span>
            </li>
            <li class={"page-item" + (!this.canGoForward() && " disabled")}>
                <a class="page-link" href={"https://www.minecraftserverslist.net/list/" + this.getForward()}>»</a>
            </li>
            <li class={"page-item" + (!this.canGoForward() && " disabled")}>
                <a class="page-link" href={"https://www.minecraftserverslist.net/list/" + this.getManyForward()}>»»</a>
            </li>
        </ul>
    }
}

export default Paginator;