import React from 'react';

import Paginator from '../Paginator';
import ServerInfo from '../ServerInfo';
import Badge from '../../components/Badge';

class ServerListPage extends React.Component {
    state = {
        page: this.props.page,
        servers: []
    };

    componentDidMount() {
        this.fetchServers(this.state.page);
    }

    fetchServers = async (page) => {
        const apiCall = await fetch(this.props.jsonUrl + page);
        const servers = await apiCall.json();

        this.setState({
            page: page,
            servers: servers
        });
    }

    handlePageChange = (pageNum) => {
        this.fetchServers(pageNum);
    }

    render() {
        return <div>
            <div className="d-flex toolbar">
                <nav aria-label="..." className="ml-auto mb-0">
                    <Paginator onPageChange={this.handlePageChange} minimum="1" current={this.state.page} maximum="10" />
                </nav>
            </div>

            <div>
                {this.renderServers()}
            </div>

            <div className="d-flex toolbar">
                <nav aria-label="..." className="ml-auto mb-0">
                    <Paginator onPageChange={this.handlePageChange} minimum="1" current={this.state.page} maximum="10" />
                </nav>
            </div>
        </div>;
    }

    renderServers() {
        return this.state.servers.map(server => {
            return this.renderServer(server);
        });
    }

    renderServer(server) {
        return <div key={server.id} className="server-list-entry">
            <ServerInfo address={server.domain} icon="" currentPlayers={server.onlinePlayers} maxPlayers={server.maxPlayers}>
                {
                    server.tags.map(tag => {
                        return (<Badge key={server.id + "-" + tag}>{tag}</Badge>);
                    })
                }
            </ServerInfo>
        </div>
    }
}

export default ServerListPage;