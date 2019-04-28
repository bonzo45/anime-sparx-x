import React from 'react';
import anime from 'animejs';

export class RoughX extends React.Component {
    componentDidMount() {
        const timeline = anime.timeline({
            loop: true,
        });

        // Animate Water
        // - waves
        timeline.add({
            targets: '#wave',
            d: {
                value: "m83.5,221.4375c52,55 80,50 112,3c32,-47 74,-55 105,-2c31,53 76,60 102,1c26,-59 77,-40 99,2c22,42 2,120 1.5,119.5625c0.5,0.4375 -416.5,-5.5625 -417,-6l-2.5,-117.5625z",
                // elasticity: 500,
            },
            duration: 1000,
            easing: 'easeInOutCubic',
            direction: 'alternate',
            loop: true,
        },
        // - rising
        {
            targets: '#wave',
            translateX: [1000, 0],
            duration: 10000,
            easing: 'linear',
        });

        // Animate Sparks
        timeline.add({
          targets: '.spark',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutCubic',
          delay: function(el, i) { return i * 5 },
          duration: 400
        }, 1400);

        anime(timeline);
    }

    render() {
        const sparxX = (
            <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path stroke-linecap="round" id="sparx_x" d="m221.5,192.5l-114.5,-174.5l132,0l50,85l53,-86l127,-1l-107,172l124,194l-134,1l-62,-105l-63,105l-135,1l129.5,-191.5z" fill-opacity="null" stroke-opacity="null" stroke-width="5" stroke="#000" fill="#fff"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_15" y2="132.5" x2="201.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_16" y2="147.5" x2="217.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_17" y2="108.5" x2="253.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_18" y2="63.5" x2="288.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_19" y2="141.5" x2="259.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_20" y2="76.5" x2="323.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_21" y2="48.5" x2="362.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_22" y2="76.5" x2="353.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_23" y2="135.5" x2="310.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_24" y2="39.5" x2="480.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_25" y2="114.5" x2="380.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_26" y2="113.5" x2="428.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_27" y2="150.5" x2="335.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_28" y2="108.5" x2="511.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_29" y2="155.5" x2="404.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_30" y2="163.5" x2="485.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_31" y2="184.5" x2="313.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_32" y2="192.5" x2="346.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_33" y2="202.5" x2="307.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_34" y2="221.5" x2="384.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_35" y2="220.5" x2="334.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_36" y2="238.5" x2="347.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_37" y2="274.5" x2="382.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_38" y2="218.5" x2="257.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_39" y2="280.5" x2="346.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_40" y2="330.5" x2="362.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_41" y2="242.5" x2="255.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_42" y2="302.5" x2="281.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_43" y2="282.5" x2="235.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                    <line stroke-linecap="round" stroke-linejoin="null" id="svg_44" y2="260.5" x2="197.5" y1="191.5" x1="222.5" fill-opacity="null" stroke-opacity="null" stroke-width="3" stroke="#000" fill="none"/>
                </g>
            </svg>
        )

        const water = (
            <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <path
                        id="svg_7"
                        d="m83.5,221.4375c32,-86 93,-53 112,3c19,56 100,38 105,-2c5,-40 93,-67 102,1c9,68 99,43 99,2c0,-41 2,120 1.5,119.5625c0.5,0.4375 -416.5,-5.5625 -417,-6l-2.5,-117.5625z"
                        fill-opacity="null"
                        stroke-opacity="null"
                        stroke-width="1.5"
                        stroke="#000"
                        stroke-dasharray="4"
                        fill="#0cc9c3"
                    />
                </g>
            </svg>
        )

        return sparxX;
    }
};
