import React from 'react';

const style = (revealed) => {
    const styles = {
        defaults: {
            width: '100%',
            fontSize: '16px',
            transition: 'all 0.5s ease-in-out',
            transformOrigin: '0px -50px',
            boxSizing: 'border-box',
            backgroundColor: 'hsla(0, 0%, 90%, 1)',
            overflowY: 'hidden',
        },
        revealed() {
            return {
                ...this.defaults,
                transform: 'scaleY(1) translateZ(-1em)',
                maxHeight: '200px',
                padding: '10px 20px',
                opacity: '1'
            }
        },
        hidden() {
            return {
                ...this.defaults,
                transform: 'scaleY(0) translateZ(-1em)',
                maxHeight: '0px',
                padding: '0 20px',
                opacity: '0'
            }
        },
        p : {
            margin: 0,
            marginBottom: '5px',
        },
        ul : {
            margin: 0,
            paddingLeft: '20px'
        }
    };

    return {
        container: revealed ? styles.revealed() : styles.hidden(),
        p: styles.p,
        ul: styles.ul
    };
};

const AccordionContent = ({
    id, 
    content, 
    revealed
}) => {
    const styles = style(revealed);
    const bodyContent = content.map((cnt, idx)=> {
        let key = `${id}.${idx}`;
        if (Array.isArray(cnt)) {
            return (
                <ul key={key} style={styles.ul}>
                    {cnt.map(li => 
                        <li key={li}>{li}</li>
                    )}
                </ul>
            );
        } else {
            return <p key={key} style={styles.p}>{cnt}</p>
        }
    });

    return (
        <div 
            style={styles.container}>
            {bodyContent}
        </div>
    );
};

export default AccordionContent;