import React from 'react';
import anime from 'animejs';

export class SimpleX extends React.Component {
    componentDidMount() {
        const fillTime = 4000;
        const shakeTime = 1000;
        const sparkTime = 200;
        const endTime = 1000;

        const backgroundGrey = '#94b3ba';
        const sparxBlue = '#00b1dc';
        const white = '#ffffff';

        const timeline = anime.timeline({
            loop: true,
            endDelay: endTime,
        });

        // Up-Down
        timeline.add({
            targets: '#water',
            translateY: [480+60, 0],
            duration: fillTime,
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
            duration: fillTime,
            easing: 'easeInOutSine',
            direction: 'alternate',
            loop: 3,
        }, 0);

        // Shake
        timeline.add({
            targets: ['#sparxXOutline', '#sparxX', '#water'],
            translateX: [
                { value: 5 },
                { value: -5 },
                { value: 5 },
                { value: -5 },
                { value: -5 },
                { value: 5 },
                { value: -5 },
                { value: 5 },
                { value: -5 },
                { value: -5 },
                { value: 5 },
                { value: 0 },
                { value: 5 },
                { value: 5 },
                { value: 0 },
                { value: -5 },
                { value: 0 },
                { value: 5 },
                { value: -5 },
                { value: 5 },
                { value: -5 },
                { value: -5 },
                { value: 5 },
                { value: -5 },
                { value: 5 },
                { value: 0 },
                { value: 5 },
                { value: 0 },
                { value: -5 },
                { value: 0 },
            ],
            translateY: [
                { value: 0 },
                { value: 0 },
                { value: -5 },
                { value: 5 },
                { value: -5 },
                { value: 5 },
                { value: -5 },
                { value: -5 },
                { value: 5 },
                { value: 0 },
                { value: -5 },
                { value: 0 },
                { value: -5 },
                { value: 0 },
                { value: 0 },
                { value: 0 },
                { value: 0 },
                { value: -5 },
                { value: 5 },
                { value: -5 },
                { value: 5 },
                { value: -5 },
                { value: -5 },
                { value: 5 },
                { value: 0 },
                { value: -5 },
                { value: 0 },
                { value: -5 },
                { value: 0 },
                { value: 0 },
            ],
            duration: shakeTime,
            easing: 'easeInOutSine',
        }, fillTime)

        // Background Colour(s)
        timeline.add({
            targets: 'body',
            background: [backgroundGrey, sparxBlue],
            easing: 'easeInOutSine',
            duration: 200,
        }, fillTime + shakeTime)
        timeline.add({
            targets: '#sparxX',
            fill: [backgroundGrey, sparxBlue],
            easing: 'easeInOutSine',
            duration: 200,
        }, fillTime + shakeTime)
        timeline.add({
            targets: '#water',
            fill: [sparxBlue, white],
            easing: 'easeInOutSine',
            duration: 200,
        }, fillTime + shakeTime)

        // Animate Sparks
        timeline.add({
          targets: '.spark',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutCubic',
          // delay: function(el, i) { return i * 5 },
          duration: sparkTime,
        }, fillTime + shakeTime);

        anime(timeline);
    }

    render() {
        const sparxX = (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640" width="640" height="640">
                <defs>
                    <path d="M0 640L640 640L640 0C536.19 20.08 429.52 20.08 320 0C210.48 -20.08 103.81 -20.08 0 0L0 640Z" id="water"/>
                    <path d="M-20 -20L660 -20L660 660L-20 660L-20 660L-20 -20ZM21.43 598.96L225.35 598.32L320.59 440.27L416.43 598.96L618.57 598.96L432.65 300.3L593.46 41.04L400.21 41.04L320.59 172.23L241.28 41.04L37.72 41.04L213.18 300.3L213.18 300.3L21.43 598.96Z" id="sparxX"/>
                    <path d="M21.43 598.96L225.35 598.32L320.59 440.27L416.43 598.96L618.57 598.96L432.65 300.3L593.46 41.04L400.21 41.04L320.59 172.23L241.28 41.04L37.72 41.04L213.18 300.3L213.18 300.3L21.43 598.96Z" id="sparxXOutline"/>
                    <path id="spark" d="M244.58 242.49L212.76 300.95" opacity="1" fillOpacity="0" stroke="#222f32" strokeWidth="5" strokeOpacity="1"/>
                </defs>
                <g>
                    <g>
                        <g>
                            <use xlinkHref="#water" fill="#00b7e0" opacity="1" fillOpacity="1" stroke="#000000" strokeWidth="3" strokeOpacity="1"/>
                        </g>
                        <g>
                            <use xlinkHref="#sparxX" opacity="1" fill="#94b3ba" fillOpacity="1"/>
                        </g>
                        <g>
                            <use xlinkHref="#sparxXOutline" opacity="1" stroke="#000000" fillOpacity="0" strokeWidth="5"/>
                        </g>
                        <g>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L186.89 187.57"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L212.76 205.14"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L232.84 225.41"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L186.89 401.08"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L244.58 242.49"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L258.96 251.05"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L298.66 184.81"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L348.68 118.57"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L340.56 149.66"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L296.63 245.65"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L309.47 236.18"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L405.46 138.85"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L462.23 95.59"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L451.42 138.85"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L382.47 225.37"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L612.29 88.83"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L643.39 79.36"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L488.31 197.2"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L418.97 249.92"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L563.63 194.27"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L688 184.81"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L543.35 251.05"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L510.9 263.37"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L386.53 299.72"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L647.48 267.28"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L436.55 315.03"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L377.74 327.4"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L506.85 357.85"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L418.97 351.09"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L440.6 380.83"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L493.93 436.26"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L301.36 353.93"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L436.55 444.37"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L475.75 530.89"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L301.36 386.24"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L342.59 478.19"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L258.96 366.31"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L271.62 444.37"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke="#000000" strokeWidth="3" strokeOpacity="1" d="M212.76 300.95L212.76 411.93"/>
                        </g>
                    </g>
                </g>
            </svg>
        )

        return sparxX;
    }
};
