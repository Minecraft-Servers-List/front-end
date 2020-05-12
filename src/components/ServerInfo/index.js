import React from 'react';

import Box from '../Box';
import Button from '../Button';
import PlayerCounter from '../PlayerCounter';

import "./style.css";
import serverIcon from './default-server-icon.png';

class ServerInfo extends React.Component {
    state = {
        link: "#" + this.props.address,
        icon: this.isEmpty(this.props.icon) ? serverIcon : this.props.icon
    }

    render() {
        return <Box>
            <div className="d-flex align-items-center p-1">
                <a href={this.state.link}>
                    <img className="ServerInfo__server-list-icon mr-3 noselect" src={this.state.icon} alt="" width="64" height="64" />
                </a>
                <div className="lh-100 mr-auto">
                    <h6 id="server-10566" className="mb-0 text-title lh-100">{this.props.address}</h6>
                    <small className="ServerInfo__tags">
                        {this.props.children}
                    </small>
                </div>
                <div className="lh-100 ml-1 p-2">
                    <PlayerCounter currentPlayers={this.props.currentPlayers} maxPlayers={this.props.maxPlayers} />
                </div>
                <div className="lh-100 ml-1 p-2">
                    <Button href={this.state.link}>More info</Button>
                </div>
            </div>
        </Box>
    }

    isEmpty(value) {
        return (value == null || value.length === 0);
    }
}

export default ServerInfo;