import React from 'react';
import AccordionTitle from './AccordionTitle';
import AccordionContent from './AccordionContent';

const style = () => {
    return {
        width: '100%',
        transformStyle: 'preserve-3d'
    };
}

const Accordion = ({
    id, 
    handleClick, 
    revealed, 
    content: { title, body }
}) => {
    return (
        <div style={style()} >
            <AccordionTitle 
                content={title}
                revealed={revealed}
                onClick={() => {
                    handleClick(id);
                }} />
            <AccordionContent 
                content={body}
                id={id}
                revealed={revealed} />
        </div>
    );
};

export default Accordion;