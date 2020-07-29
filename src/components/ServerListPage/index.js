import React from 'react';
import ReactDOM from 'react-dom';

import Paginator from '../Paginator';
import ServerInfo from '../ServerInfo';
import Badge from '../../components/Badge';

class ServerListPage extends React.Component {
    state = {
        page: this.props.page,
        maxPages: 10,
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
            maxPages: servers.info.totalPages,
            servers: servers.results
        });
    }

    handlePageChange = async (pageNum) => {
        await this.fetchServers(pageNum);
        this.scrollTop();
    }

    scrollTop() {
        if (window.pageYOffset <= 280) return; // Don't scroll when current position was at top
        var element = ReactDOM.findDOMNode(this);
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    render() {
        return <div>
            <div className="d-flex toolbar">
                <nav aria-label="..." className="ml-auto mb-0">
                    <Paginator onPageChange={this.handlePageChange} minimum="1" current={this.state.page} maximum={this.state.maxPages} />
                </nav>
            </div>

            <div>
                {this.renderServers()}
            </div>

            <div className="d-flex toolbar">
                <nav aria-label="..." className="ml-auto mb-0">
                    <Paginator onPageChange={this.handlePageChange} minimum="1" current={this.state.page} maximum={this.state.maxPages} />
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
            <ServerInfo id={server.id} address={server.domain} icon={"https://api.minecraftserverslist.net/v1/icons/" + server.image + ".jpg"} currentPlayers={server.onlinePlayers} maxPlayers={server.maxPlayers}>
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