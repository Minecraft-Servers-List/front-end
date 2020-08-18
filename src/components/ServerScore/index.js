import React from 'react';

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServerScore = (props) => <h4 class="mb-0 text-title lh-100"><FontAwesomeIcon icon={faStar} /> {props.score}</h4>

export default ServerScore;