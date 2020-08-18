import React from 'react';
import { Link } from 'react-router-dom';

import Box from '../Box';
import Icon from '../Icon';

import serverIcon from './default-server-icon.png';
import ServerScore from '../ServerScore';

class ServerDetails extends React.Component {

    render() {
        const { id, icon, address, score } = this.props;
        return <Box>
            <div className="d-flex align-items-center p-1">
                <Link to={`/server/${id}`}>
                    <Icon src={this.isEmpty(icon) ? serverIcon : icon} />
                </Link>
                <div class="lh-100 mr-auto">
                    <h6 id="server-10566" class="mb-0 text-title lh-100">{address}</h6>
                    <small>| {0} Average players | {this.props.currentPlayers} Online players |</small>
                </div>
                <div class="lh-100 ml-3 p-2">
                    <Link to={`/vote/${id}/${address}`} class="btn btn-success my-2 my-sm-0" role="button">Vote for this server</Link>
                </div>
                <div class="lh-100 ml-3 p-2">
                    <ServerScore score={score} />
                </div>
            </div>
        </Box>
    }

    isEmpty(value) {
        return (value == null || value.length === 0);
    }
}

export default ServerDetails;