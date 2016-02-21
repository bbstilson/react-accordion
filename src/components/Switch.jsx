import React from 'react';

const style = (hover, open) => {
    const dim = 28;
    return {
        container: {
            width: `${dim}px`,
            height: `${dim}px`,
            position: 'relative',
            fontSize: 0,
            transition: 'transform 0.15s ease-in-out',
            transform: hover || open ? 'rotate(90deg)' : 'none',
            float: 'right',
        },
        bar: {
            width: `${dim / 8}px`,
            height: `${dim}px`,
            display: 'inline-block',
            position: 'absolute',
            left: open ? '60%' : '40%',
            transition: 'transform 0.5s',
            transition: 'left 0.3s ease-in-out',
        },
        barLeft() {
            return {
                ...this.bar,
                transform: 'rotate(-45deg)',
            };
        },
        barRight() {
            return {
                ...this.bar,
                transform: 'rotate(45deg)',
            };
        },
        fill: {
            height: '100%',
            width: '100%',
            transformOrigin: '0% 100%',
            transition: 'transform 0.3s ease-in-out',
            background: '#133b37',
            cursor: 'pointer',
        },
        fillLeft() {
            return {
                ...this.fill,
                transform: open ? 'scaleY(0.55)' : 'none',
                transformOrigin: '0% 0%',
            };
        },
        fillRight() {
            return {
                ...this.fill,
                transform: open ? 'scaleY(0.55)' : 'none'
            }
        }
    };
};

const Switch = ({ hover, open }) => {
    const styles = style(hover, open);
    return (
        <div style={styles.container}>
            <div style={styles.barLeft()}>
                <div style={styles.fillLeft()} />
            </div>
            <div style={styles.barRight()}>
                <div style={styles.fillRight()} />
            </div>
        </div>
    );
};

export default Switch;