import React from 'react';

export default function Tab(props) {
    return (
        <a 
            href="/" 
            onClick={props.onClick}
            className={props.className}> 
            {props.name}
        </a>
    )
}