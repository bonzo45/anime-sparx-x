import React from 'react';
import anime from 'animejs';

const actuallyGrey = '#94b3ba';
const backgroundGrey = '#ffffff';
const sparxBlue = '#00b1dc';
const sparxOrange = '#f9650e';
const white = '#ffffff';
const black = '#000000';
const skinnyStroke = '3';
const fatStroke = '5';
const sparkStroke = () => Math.random() * 3 + 3;
const sparkStrokeColour = () => {
    // return black;
    const r = Math.random();
    if (r < 0.6) {
        return black;
    } else {
        return sparxBlue;
    }
}

export class SparxX extends React.Component {
    componentDidMount() {
        const fillTime = 10000;
        const shakeTime = 1000;
        const sparkTime = 500;
        const endTime = 1000;

        const timeline = anime.timeline({
            loop: true,
            endDelay: endTime,
        });

        // Up-Down
        timeline.add({
            targets: '#water',
            translateY: [640, 0],
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
            duration: sparkTime,
        }, fillTime + shakeTime)
        timeline.add({
            targets: '#sparxX',
            fill: [backgroundGrey, sparxBlue],
            easing: 'easeInOutSine',
            duration: sparkTime,
        }, fillTime + shakeTime)
        timeline.add({
            targets: '#water',
            fill: [sparxBlue, white],
            easing: 'easeInOutSine',
            duration: sparkTime,
        }, fillTime + shakeTime)

        // Animate Sparks
        timeline.add({
          targets: '.spark',
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: 'easeInOutCubic',
          delay: (el, i) => Math.random() * 200,
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
                </defs>
                <g>
                    <g>
                        <g>
                            <use xlinkHref="#water" fill={sparxBlue} opacity="1" fillOpacity="1" stroke={black} strokeWidth={skinnyStroke} strokeOpacity="1"/>
                        </g>
                        <g>
                            <use xlinkHref="#sparxX" opacity="1" fill={backgroundGrey} fillOpacity="1"/>
                        </g>
                        <g>
                            <use xlinkHref="#sparxXOutline" opacity="1" stroke={black} fillOpacity="0" strokeWidth={fatStroke}/>
                        </g>
                        <g>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L186.89 187.57"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L212.76 205.14"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L232.84 225.41"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L186.89 401.08"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L244.58 242.49"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L258.96 251.05"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L298.66 184.81"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L305.68 105.57"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L360.56 149.66"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L296.63 245.65"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L309.47 236.18"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L405.46 118.85"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L462.23 95.59"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L451.42 138.85"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L382.47 225.37"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L630.39 79.36"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L488.31 197.2"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L418.97 249.92"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L620 184.81"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L543.35 251.05"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L600.48 267.28"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L436.55 315.03"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L377.74 327.4"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L506.85 357.85"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L418.97 351.09"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L440.6 380.83"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L493.93 436.26"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L301.36 353.93"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L436.55 444.37"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L475.75 530.89"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L342.59 518.1"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L258.96 366.31"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L271.62 444.37"/>
                            <path className="spark" strokeLinecap="round" opacity="1" fillOpacity="0" stroke={sparkStrokeColour()} strokeWidth={sparkStroke()} strokeOpacity="1" d="M212.76 300.95L212.76 411.93"/>
                        </g>
                    </g>
                </g>
            </svg>
        )

        return sparxX;
    }
};
