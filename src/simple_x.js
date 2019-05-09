import React from 'react';
import anime from 'animejs';

export class SimpleX extends React.Component {
    componentDidMount() {
        const animationTime = 4000;

        const timeline = anime.timeline({
            loop: true,
            endDelay: 1000,
        });

        // Up-Down
        timeline.add({
            targets: '#water',
            translateY: [480+60, 0],
            // delay: 5000,
            duration: animationTime,
            easing: 'linear',
            direction: 'alternate',
        }, 0);

        let keyframes = [];
        const frame1 = {
            d: "M0 640L640 640L640 0C530.79 -27.67 424.12 -27.67 320 0C215.88 27.67 109.21 27.67 0 0L0 640Z",
        };
        const frame2 = {
            d: "M0 640L640 640L640 0C536.19 20.08 429.52 20.08 320 0C210.48 -20.08 103.81 -20.08 0 0L0 640Z",
        };
        for (var i = 5; i > 0; i--) {
            keyframes = keyframes.concat(frame1);
            keyframes = keyframes.concat(frame2);
        }
        // Waves
        timeline.add({
            targets: '#water',
            keyframes,
            duration: animationTime,
            easing: 'easeInOutSine',
            direction: 'alternate',
            loop: 3,
        }, 0);

       timeline.add({
            targets: 'body',
            background: '#00b1dc',
            easing: 'easeInOutSine',
            duration: 200,
       }, animationTime)

       timeline.add({
            targets: '#sparxX',
            fill: ['#94b3ba', '#00b1dc'],
            easing: 'easeInOutSine',
            duration: 200,
       }, animationTime)

        anime(timeline);
    }

    render() {
        const sparxX = (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="640" height="640">
              <defs>
                <path d="M0 640L640 640L640 0C536.19 20.08 429.52 20.08 320 0C210.48 -20.08 103.81 -20.08 0 0L0 640Z" id="water"/>
                <path d="M0 0L640 0L640 640L0 640L0 640L0 0ZM21.43 598.96L225.35 598.32L320.59 440.27L416.43 598.96L618.57 598.96L432.65 300.3L593.46 41.04L400.21 41.04L320.59 172.23L241.28 41.04L37.72 41.04L213.18 300.3L213.18 300.3L21.43 598.96Z" id="sparxX"/>
                <path d="M21.43 598.96L225.35 598.32L320.59 440.27L416.43 598.96L618.57 598.96L432.65 300.3L593.46 41.04L400.21 41.04L320.59 172.23L241.28 41.04L37.72 41.04L213.18 300.3L213.18 300.3L21.43 598.96Z" id="sparxXOutline"/>
                <path id="spark" d="M244.58 242.49L212.76 300.95" opacity="1" fillOpacity="0" stroke="#222f32" strokeWidth="5" strokeOpacity="1"/>
              </defs>
              <g>
                <g>
                  <g>
                    <use xlinkHref="#water" opacity="1" fill="#00b7e0" fillOpacity="1"/>
                    <g>
                      <use xlinkHref="#water" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1"/>
                    </g>
                  </g>
                  <g>
                    <use xlinkHref="#sparxX" opacity="1" fill="#94b3ba" fillOpacity="1"/>
                  </g>
                  <g>
                    <use xlinkHref="#sparxXOutline" opacity="1" stroke="#000000" fillOpacity="0" strokeWidth="5"/>
                        <use xlinkHref="#spark"/>
                  </g>
                    <g>
                        <use xlinkHref="#spark"/>
                        <use xlinkHref="#spark" d="M244.58 242.49L212.76 400.95"/>
                        <use xlinkHref="#spark" d="M189.78 211.28L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M258.96 251.05L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M298.66 184.81L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M348.68 118.57L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M340.56 149.66L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M296.63 245.65L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M309.47 236.18L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M405.46 138.85L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M462.23 95.59L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M451.42 138.85L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M382.47 225.37L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M612.29 88.83L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M643.39 79.36L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M488.31 197.2L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M418.97 249.92L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M563.63 194.27L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M688 184.81L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M543.35 251.05L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M510.9 263.37L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M386.53 299.72L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M647.48 267.28L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M436.55 315.03L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M377.74 327.4L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M506.85 357.85L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M418.97 351.09L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M440.6 380.83L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M493.93 436.26L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M301.36 353.93L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M436.55 444.37L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M475.75 530.89L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M301.36 386.24L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M342.59 478.19L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M258.96 366.31L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M271.62 444.37L212.76 300.95"/>
                        <use xlinkHref="#spark" d="M212.76 411.93L212.76 300.95"/>
                    </g>
                </g>
              </g>
            </svg>
        )

        return sparxX;
    }
};
