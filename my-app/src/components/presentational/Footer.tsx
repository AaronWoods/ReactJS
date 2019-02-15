import React from 'react';
import {LinkContainer} from '../container/LinkContainer'
export const Footer = () => (
    <p>
        <LinkContainer
        filter="SHOW=ALL"> 
        All 
        </LinkContainer>
        {' , '}
        <LinkContainer
        filter="SHOW=ACTIVE"> 
        Active
        </LinkContainer>
        {' , '}
        <LinkContainer
        filter="SHOW=COMPLETED"> 
        Completed
        </LinkContainer>
    </p>

)