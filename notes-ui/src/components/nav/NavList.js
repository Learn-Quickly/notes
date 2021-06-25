import * as React from 'react';
import {NavElement} from './NavElement';

export const NavList = (props) => {
    return (
        <ul>
            <NavElement name="LQRL Notes" url="/" />
            <NavElement name="Sign in" url="/signin" />
            <NavElement name="Sign up" url="/signup" />
        </ul>
    );
};