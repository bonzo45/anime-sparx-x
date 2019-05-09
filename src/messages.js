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
                {translateY: '0%', duration: 2500},
                {translateY: '100%', duration: 500},
            ],
            delay: function(el, i) { return i * 3000 },
            loop: true,
        })
    }

    render() {
        return (
            <div className="messages">
                <div className="message"><div className="text">Arranging Algebra</div></div>
                <div className="message"><div className="text">Baking Bar Charts</div></div>
                <div className="message"><div className="text">Collecting Calculus</div></div>
                <div className="message"><div className="text">Defining Decimals</div></div>
                <div className="message"><div className="text">Extracting Euler</div></div>
                <div className="message"><div className="text">Finding Fractions</div></div>
                <div className="message"><div className="text">Generating Graphs</div></div>
                <div className="message"><div className="text">Hunting Hypotenuse</div></div>
                <div className="message"><div className="text">Integrating Infinity</div></div>
                <div className="message"><div className="text">Juggling ???</div></div>
                <div className="message"><div className="text">Knitting Kites</div></div>
                <div className="message"><div className="text">Linking Lines</div></div>
                <div className="message"><div className="text">Mastering Multiplication</div></div>
                <div className="message"><div className="text">Noticing Normals</div></div>
                <div className="message"><div className="text">Organising Outliers</div></div>
                <div className="message"><div className="text">Perfecting Percentages</div></div>
                <div className="message"><div className="text">Querying Quadrants</div></div>
                <div className="message"><div className="text">Rescuing Radii</div></div>
                <div className="message"><div className="text">Storing Squares</div></div>
                <div className="message"><div className="text">Targetting Times Tables</div></div>
                <div className="message"><div className="text">Understanding Units</div></div>
                <div className="message"><div className="text">Vindicating Vertices</div></div>
                <div className="message"><div className="text">Welcoming Weights</div></div>
                <div className="message"><div className="text">X-Raying X</div></div>
                <div className="message"><div className="text">Yanking Years</div></div>
                <div className="message"><div className="text">Zesting Zero</div></div>
            </div>
        );
    }
};
