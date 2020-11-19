// React
import React from 'react';

// Animation
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
const FadeInUp = styled.span`animation: 1s ${keyframes`${fadeInUp}`};`;

export default function Tab(props) {
    return (
        <FadeInUp><a 
            href="/" 
            onClick={props.onClick}
            className={props.className}> 
            {props.name}
        </a></FadeInUp>
    )
}