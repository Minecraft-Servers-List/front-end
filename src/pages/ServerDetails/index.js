import React from 'react';

import "./style.css";

import banner from "./default-server-banner.png";
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import ServerListPage from '../../components/ServerListPage';
import ServerInfo from '../../components/ServerInfo';
import Badge from '../../components/Badge';

class ServerList extends React.Component {
    state = {
        id: 0,
        domain: "Loading",
        score: 0,
        image: 0,
        onlinePlayers: 0,
        maxPlayers: 0,
        tags: []
    }

    componentDidMount() {
        if (this.props.match.params.id) {
            this.state.id = this.props.match.params.id;
        }
        this.fetchServer(this.state.id);
    }

    fetchServer = async (serverId) => {
        const apiCall = await fetch("https://api.minecraftserverslist.net/v1/servers/" + serverId);
        const serverInfo = await apiCall.json();

        this.setState({
            ...serverInfo
        });
    }

    render() {
        return <div>
            <Navbar />
            <Banner title={this.state.domain} image={banner}>
                If you are the owner of this server you can claim it in <a className="nounderline" href="#addserver">this link</a>
            </Banner>
            <main className="container">
                <ServerInfo id={this.state.id} address={this.state.domain} icon={"https://api.minecraftserverslist.net/v1/icons/" + this.state.image + ".jpg"} currentPlayers={this.state.onlinePlayers} maxPlayers={this.state.maxPlayers}>
                    {
                        this.state.tags.map(tag => {
                            return (<Badge key={this.state.id + "-" + tag}>{tag}</Badge>);
                        })
                    }
                </ServerInfo>
            </main>
            <Footer />
        </div>
    }
}

export default ServerList;