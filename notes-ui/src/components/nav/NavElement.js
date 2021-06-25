import React, {Component} from 'react';
import {Link} from "react-router-dom";

export const NavElement = (props) => {
    return (
        <li>
            <Link to={props.url}>{props.name}</Link>
        </li>
    );
}

export default NavElement;