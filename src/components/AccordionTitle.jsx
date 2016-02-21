import React, { Component } from 'react';
import Switch from './Switch';
import Radium from 'radium';

export default class AccordionTitle extends Component {
    constructor() {
        super();
        this.state = {
            hover: false
        }
    }
    style() {
        return {
            width: '100%',
            height: '50px',
            fontSize: '20px',
            padding: '0',
            paddingLeft: '20px',
            paddingRight: '10px',
            textAlign: 'left',
            border: '1px solid hsla(0, 0%, 99%, 1)',
            backgroundColor: 'LightSeaGreen',
            outline: 'none',
            cursor: 'pointer'
        };
    }

    render() {
        const { content, onClick, revealed } = this.props;
        return (
            <button 
                style={this.style()} 
                onClick={() => {
                    onClick();
                }}
                onMouseEnter={() => {
                    this.setState({
                        hover: true
                    });
                }}
                onMouseLeave={() => {
                    this.setState({
                        hover: false
                    })
                }}
                >
                {content}
                <Switch 
                    hover={this.state.hover}
                    open={revealed} />
            </button>
        );
    }
}

export default AccordionTitle;