import React from 'react';
import {LinkContainer} from '../container/LinkContainer'
export const Footer = () => (
    <p>
        <LinkContainer
        filter="SHOW_ALL"> 
        All 
        </LinkContainer>
        {' , '}
        <LinkContainer
        filter="SHOW_ACTIVE"> 
        Active
        </LinkContainer>
        {' , '}
        <LinkContainer
        filter="SHOW_COMPLETED"> 
        Completed
        </LinkContainer>
    </p>

)