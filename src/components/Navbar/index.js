import React from 'react';

import "./style.css";
import siteLogo from './site-logo.png';

import { faPlusSquare, faSearch, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return <nav className="Navbar navbar navbar-expand navbar-dark bg-kuro">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img src={siteLogo} width="30" height="30" className="site-logo d-inline-block align-top" alt="" />
                    Minecraft Server List
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample02">
                    <ul className="navbar-nav ml-auto">

                        <li className="nav-item active">
                            <a className="nav-link" href="#addserver">
                                <FontAwesomeIcon icon={faPlusSquare} /> Add Server
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="#search">
                                <FontAwesomeIcon icon={faSearch} /> Advanced Search
                            </a>
                        </li>

                        <li className="nav-item">
                            <Link to="/list" className="nav-link">
                                <FontAwesomeIcon icon={faServer} /> Server List
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    }
}

export default Navbar;