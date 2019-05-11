import './messages.css';
import React from 'react';
import anime from 'animejs';

export class Messages extends React.Component {
    componentDidMount() {
        anime({
            targets: '.message',
            easing: 'easeInOutCubic',
            keyframes: [
                {translateY: '-100%', duration: 0},
                {translateY: '0%', duration: 500},
                {translateY: '0%', duration: 4500},
                {translateY: '100%', duration: 500},
            ],
            delay: function(el, i) { return i * 5000 },
            loop: true,
        })
    }

    render() {
        return (
            <div className="messages">
                <div className="message"><div className="text">Preparing Sparx Homework...</div></div>
                <div className="message"><div className="text">Writing down bookwork...</div></div>
                <div className="message"><div className="text">Generating graphs...</div></div>
                <div className="message"><div className="text">Rendering help videos...</div></div>
                <div className="message"><div className="text">Loading times tables...</div></div>
                <div className="message"><div className="text">Baking bar charts...</div></div>
                <div className="message"><div className="text">Finding fractions...</div></div>
            </div>
        );
    }
};
