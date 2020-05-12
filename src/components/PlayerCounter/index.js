import React from 'react';

import "./style.css";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PlayerCounter extends React.Component {
    render() {
        return <h4 className="PlayerCounter mb-0 text-title lh-100 text-right">
            {this.props.currentPlayers}/{this.props.maxPlayers} <FontAwesomeIcon icon={faUser} />
        </h4>;
    }
}

export default PlayerCounter;