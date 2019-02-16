import React from 'react';
import {LinkContainer} from '../container/LinkContainer'
import { Link } from 'react-router-dom';
export const HeaderApp = () => {
    return (
        <div>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/members">Members</Link></li>
                <li><Link to="/todos">Todos</Link></li>
            </ul>
        </div>
    )

}