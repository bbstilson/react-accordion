import React, { Component } from 'react';
import Accordion from './Accordion';

export default class AccordionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            revealed: []
        };
    }

    componentWillMount() {
        const { data } = this.props;
        const initialState = data.map(i => i.revealed);

        this.setState({
            revealed: initialState
        });
    }

    handleClick = (id) => {
        const { revealed } = this.state;
        const newState = revealed.map(
            (e, idx, old) => idx === id ? old[idx] === true ? false : true : false 
        );

        this.setState({
            revealed: newState
        }); 
    };

    style() {
        return {
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto'
        };
    }   

    render() {
        const { data } = this.props;
        const { revealed } = this.state;
        
        const accordions = data.map((content, idx) => {
            return (
                <Accordion 
                    key={content.id} 
                    id={idx} 
                    handleClick={this.handleClick} 
                    revealed={revealed[idx]} 
                    content={content} />
            );
        });

        return (
            <div style={this.style()}>
                {accordions}
            </div>
        );
    }
}