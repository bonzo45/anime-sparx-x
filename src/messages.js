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
            <div class="messages">
                <div class="message"><div class="text">Arranging Algebra</div></div>
                <div class="message"><div class="text">Baking Bar Charts</div></div>
                <div class="message"><div class="text">Collecting Calculus</div></div>
                <div class="message"><div class="text">Defining Decimals</div></div>
                <div class="message"><div class="text">Extracting Euler</div></div>
                <div class="message"><div class="text">Finding Fractions</div></div>
                <div class="message"><div class="text">Generating Graphs</div></div>
                <div class="message"><div class="text">Hunting Hypotenuse</div></div>
                <div class="message"><div class="text">Integrating Infinity</div></div>
                <div class="message"><div class="text">Juggling ???</div></div>
                <div class="message"><div class="text">Knitting Kites</div></div>
                <div class="message"><div class="text">Linking Lines</div></div>
                <div class="message"><div class="text">Mastering Multiplication</div></div>
                <div class="message"><div class="text">Noticing Normals</div></div>
                <div class="message"><div class="text">Organising Outliers</div></div>
                <div class="message"><div class="text">Perfecting Percentages</div></div>
                <div class="message"><div class="text">Querying Quadrants</div></div>
                <div class="message"><div class="text">Rescuing Radii</div></div>
                <div class="message"><div class="text">Storing Squares</div></div>
                <div class="message"><div class="text">Targetting Times Tables</div></div>
                <div class="message"><div class="text">Understanding Units</div></div>
                <div class="message"><div class="text">Vindicating Vertices</div></div>
                <div class="message"><div class="text">Welcoming Weights</div></div>
                <div class="message"><div class="text">X-Raying X</div></div>
                <div class="message"><div class="text">Yanking Years</div></div>
                <div class="message"><div class="text">Zesting Zero</div></div>
            </div>
        );
    }
};
