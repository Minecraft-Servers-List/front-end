import React from 'react';

import "./style.css";

import banner from "./banner.png";
import Navbar from '../../components/Navbar';
import Banner from '../../components/Banner';
import Footer from '../../components/Footer';
import ServerListPage from '../../components/ServerListPage';

class ServerList extends React.Component {
    render() {
        return <div>
            <Navbar />
            <Banner title="Minecraft server list" image={banner}>
                The servers shown in this list have been found by sophisticated server search systems.
                <br />
                If you want to add a server manually you can do it in <a className="nounderline" href="#addserver">this link</a>
            </Banner>
            <main className="container">
                <ServerListPage jsonUrl="https://api.minecraftserverslist.net/v1/list/" page="1" />
            </main>
            <Footer />
        </div>
    }
}

export default ServerList;